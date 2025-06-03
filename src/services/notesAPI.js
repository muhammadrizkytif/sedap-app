import axios from 'axios'

const API_URL = "https://vwkthnmzifbeuqdpmtwb.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3a3Robm16aWZiZXVxZHBtdHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDg5OTQsImV4cCI6MjA2NDQ4NDk5NH0.5yBPRtpGim4EjFFoy0RgGYaLDiSeJe4EH3zN5Ppph7g"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
         await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    async updateNote(id, data) {
        const noteData = { ...data, updated_at: new Date().toISOString() };
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, noteData, { headers });
        return response.data[0]; 
    }
}
