// src/components/Error400.jsx
import React from 'react';
import ErrorPage from './ErrorPage';
import { errorDetails } from '../Data/errorData';

function Error400() {
  const errorData = errorDetails['400']; // Ambil data spesifik 400

  return (
    <ErrorPage
      errorCode={errorData.code}
      errorTitle={errorData.title}
      errorDescription={errorData.description}
      animationUrl={errorData.animationUrl}
    />
  );
}

export default Error400;