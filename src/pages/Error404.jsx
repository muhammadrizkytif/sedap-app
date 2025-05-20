// src/components/Error404.jsx
import React from 'react';
import ErrorPage from './ErrorPage'; // Import komponen reusable
import { errorDetails } from '../Data/errorData'; // Import data

function Error404() {
  const errorData = errorDetails['404']; // Ambil data spesifik 404

  return (
    <ErrorPage
      errorCode={errorData.code}
      errorTitle={errorData.title}
      errorDescription={errorData.description}
      animationUrl={errorData.animationUrl}
    />
  );
}

export default Error404;