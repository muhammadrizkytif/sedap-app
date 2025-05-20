// src/pages/Error401.jsx
import React from 'react';
// Sesuaikan path ke ErrorPage jika berbeda (misal: './ErrorPage' jika masih di folder pages)
import ErrorPage from '../pages/ErrorPage';
// Sesuaikan path ke errorData jika berbeda
import { errorDetails } from '../Data/errorData';

function Error401() {
  // Ambil data spesifik untuk error 401 dari file data
  const errorData = errorDetails['401'];

  // Fallback sederhana jika data tidak ditemukan (seharusnya tidak terjadi jika errorData.js benar)
  if (!errorData) {
    console.error("Data untuk Error 401 tidak ditemukan di errorData.js");
    return <div>Error: Data for 401 not found.</div>;
  }

  
  return (
    <ErrorPage
      errorCode={errorData.code}
      errorTitle={errorData.title}
      errorDescription={errorData.description}
      animationUrl={errorData.animationUrl}
    />
  );
}

// Pastikan ada export default
export default Error401;