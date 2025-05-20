import React from "react";

function ListProduk() {
  return (
    <div className="produk-detail-section">
      <hr />
      <JudulProduk judul="Produk Rekomendasi untuk Keluarga Sehat" />
      <ItemProduk
        gambar="img/1.jpg"
        alt="Produk Suplemen Vitamin C"
        nama="Suplemen Vitamin C untuk Kekebalan Tubuh"
        deskripsi="Suplemen Vitamin C membantu meningkatkan daya tahan tubuh dan mencegah penyakit. Cocok untuk dikonsumsi seluruh anggota keluarga, terutama saat musim pancaroba."
        informasiTambahan="Rating: 4.5/5 (120 Ulasan)"
      />
      <ItemProduk
        gambar="img/2.jpg"
        alt="Minyak Ikan Omega-3"
        nama="Minyak Ikan Omega-3 untuk Kesehatan Otak"
        deskripsi="Minyak ikan Omega-3 penting untuk perkembangan otak anak-anak dan menjaga fungsi kognitif orang dewasa."
        informasiTambahan="Sumber Omega-3 Terbaik"
      />
      <ItemProduk
        gambar="img/3.jpg"
        alt="Probiotik untuk Kesehatan Pencernaan"
        nama="Probiotik untuk Kesehatan Pencernaan"
        deskripsi="Probiotik membantu menjaga keseimbangan bakteri baik dalam usus, mendukung sistem pencernaan yang sehat, dan meningkatkan penyerapan nutrisi."
        informasiTambahan="Direkomendasikan oleh Dokter Anak"
      />
    </div>
  );
}

function JudulProduk({ judul }) {
  return <h2>{judul}</h2>;
}

function ItemProduk({ gambar, alt, nama, deskripsi, informasiTambahan }) {
  return (
    <div className="produk-item">
      <img src={gambar} alt={alt} />
      <h3>{nama}</h3>
      <p>{deskripsi}</p>
      <InformasiTambahan informasi={informasiTambahan} />
    </div>
  );
}

function InformasiTambahan({ informasi }) {
  return <p className="informasi-tambahan">{informasi}</p>;
}

export default ListProduk;
