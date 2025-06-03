import React, { useState, useEffect } from 'react';
import AlertBox from "../components/AlertBox";
import { notesAPI } from "../services/notesAPI";
import GenericTable from '../components/GenericTable';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';
import { AiFillDelete, AiOutlinePlusCircle, AiOutlineEdit, AiOutlineCloseCircle } from 'react-icons/ai'; // Tambah icon

export default function Notes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [notes, setNotes] = useState([]);

    // State untuk form tambah
    const [addDataForm, setAddDataForm] = useState({ title: "", content: "" });
    // State untuk form edit
    const [editDataForm, setEditDataForm] = useState({ id: null, title: "", content: "" });
    const [isEditing, setIsEditing] = useState(false); // Kontrol visibilitas modal edit

    // Handle change untuk form tambah
    const handleAddChange = (evt) => {
        const { name, value } = evt.target;
        setAddDataForm({ ...addDataForm, [name]: value });
    };

    // Handle change untuk form edit
    const handleEditChange = (evt) => {
        const { name, value } = evt.target;
        setEditDataForm({ ...editDataForm, [name]: value });
    };

    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan. Coba lagi nanti.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!addDataForm.title.trim() || !addDataForm.content.trim()) {
            setError("Judul dan Isi Catatan tidak boleh kosong.");
            setTimeout(() => setError(""), 3000);
            return;
        }
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            await notesAPI.createNote(addDataForm);
            setSuccess("Catatan berhasil ditambahkan!");
            setAddDataForm({ title: "", content: "" }); 
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
            setTimeout(() => setError(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            await notesAPI.deleteNote(id);
            setSuccess("Catatan berhasil dihapus!");
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan saat menghapus: ${err.message}`);
            setTimeout(() => setError(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    
    const handleOpenEditModal = (note) => {
        setEditDataForm({ id: note.id, title: note.title, content: note.content });
        setIsEditing(true);
        setError(""); 
        setSuccess("");
    };

    
    const handleCloseEditModal = () => {
        setIsEditing(false);
        setEditDataForm({ id: null, title: "", content: "" }); 
    };

    
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        if (!editDataForm.title.trim() || !editDataForm.content.trim()) {
            setError("Judul dan Isi Catatan tidak boleh kosong saat mengedit.");
            
            setTimeout(() => setError(""), 3000);
            return;
        }
        if (!editDataForm.id) {
            setError("ID catatan tidak ditemukan untuk diedit.");
            setTimeout(() => setError(""), 3000);
            return;
        }
        try {
            setLoading(true); 
            setError("");
            setSuccess("");
            await notesAPI.updateNote(editDataForm.id, { title: editDataForm.title, content: editDataForm.content });
            setSuccess("Catatan berhasil diperbarui!");
            setTimeout(() => setSuccess(""), 3000);
            handleCloseEditModal();
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan saat memperbarui: ${err.message}`);
            setTimeout(() => setError(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-emerald-700 mb-2">NotesApp</h1>
                <p className="text-gray-600">Catat semua idemu dengan mudah!</p>
            </header>

            <div className="mb-4 min-h-[40px]">
                {error && <AlertBox type="error">{error}</AlertBox>}
                {success && <AlertBox type="success">{success}</AlertBox>}
            </div>

            {/* Form Tambah Catatan Card */}
            {!isEditing && ( 
                <div className="bg-white rounded-xl shadow-xl p-6 mb-10">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
                        <AiOutlinePlusCircle className="mr-2 text-emerald-500" size={24} />
                        Tambah Catatan Baru
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="title-add" className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
                            <input
                                id="title-add"
                                type="text"
                                name="title"
                                value={addDataForm.title}
                                placeholder="Misal: Daftar Belanja Mingguan"
                                disabled={loading}
                                onChange={handleAddChange}
                                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="content-add" className="block text-sm font-medium text-gray-700 mb-1">Isi Catatan</label>
                            <textarea
                                id="content-add"
                                name="content"
                                value={addDataForm.content}
                                placeholder="Tulis isi catatan anda di sini..."
                                onChange={handleAddChange}
                                disabled={loading}
                                rows="3"
                                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 resize-none placeholder-gray-400"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Mohon Tunggu...
                                </>
                            ) : "Tambah Catatan"}
                        </button>
                    </form>
                </div>
            )}


            {/* Modal/Form Edit Catatan */}
            {isEditing && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                                <AiOutlineEdit className="mr-2 text-blue-500" size={24} />
                                Edit Catatan
                            </h3>
                            <button onClick={handleCloseEditModal} className="p-1 rounded-full hover:bg-gray-200">
                                <AiOutlineCloseCircle size={24} className="text-gray-500"/>
                            </button>
                        </div>
                        <form onSubmit={handleUpdateSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="title-edit" className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
                                <input
                                    id="title-edit"
                                    type="text"
                                    name="title"
                                    value={editDataForm.title}
                                    placeholder="Judul catatan"
                                    disabled={loading}
                                    onChange={handleEditChange}
                                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="content-edit" className="block text-sm font-medium text-gray-700 mb-1">Isi Catatan</label>
                                <textarea
                                    id="content-edit"
                                    name="content"
                                    value={editDataForm.content}
                                    placeholder="Isi catatan..."
                                    onChange={handleEditChange}
                                    disabled={loading}
                                    rows="4"
                                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                                <button
                                    type="button"
                                    onClick={handleCloseEditModal}
                                    disabled={loading}
                                    className="w-full sm:w-auto px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Memperbarui...
                                        </>
                                    ) : "Simpan Perubahan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {/* Daftar Catatan Card */}
            <div className={`bg-white rounded-xl shadow-xl overflow-hidden ${isEditing ? 'filter blur-sm' : ''}`}> {/* Blur background jika modal aktif */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>

                {loading && notes.length === 0 && (
                    <div className="p-10"> <LoadingSpinner text="Memuat catatan..." /> </div>
                )}
                {!loading && notes.length === 0 && !error && (
                    <div className="p-10"> <EmptyState text="Belum ada catatan. Tambah catatan pertamamu!" /> </div>
                )}
                {!loading && notes.length === 0 && error && (
                     <div className="p-10"> <EmptyState text={error} type="error" /> </div>
                )}

                {notes.length > 0 && (
                    <GenericTable
                        columns={["No", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 align-top">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 align-top">
                                    <div className="font-semibold text-emerald-600 text-md break-words">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 max-w-xs align-top">
                                    <div className="truncate text-gray-700 text-sm break-words" title={note.content}> 
                                        {note.content}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-center align-top">
                                    <div className="flex items-center justify-center space-x-2">
                                        <button
                                            onClick={() => handleOpenEditModal(note)}
                                            disabled={loading || isEditing} 
                                            className="p-2 rounded-full hover:bg-blue-100 disabled:opacity-50"
                                            title="Edit catatan"
                                        >
                                            <AiOutlineEdit className="text-blue-500 text-xl hover:text-blue-700 transition-colors" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            disabled={loading || isEditing}
                                            className="p-2 rounded-full hover:bg-red-100 disabled:opacity-50"
                                            title="Hapus catatan"
                                        >
                                            <AiFillDelete className="text-red-500 text-xl hover:text-red-700 transition-colors" />
                                        </button>
                                    </div>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
            <footer className="text-center mt-12 py-4">
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} NotesApp. Dibuat dengan ❤️.</p>
            </footer>
        </div>
    );
}