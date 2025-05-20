// src/components/ErrorPage.jsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function ErrorPage({ errorCode, errorTitle, errorDescription, animationUrl }) {
  const handleLottieError = (e) => {
    console.error("Lottie failed to load:", e);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Kolom Animasi */}
        <div className="w-full md:w-2/5 flex justify-center">
          {animationUrl ? (
            <Player
              autoplay
              loop
              src={animationUrl}
              style={{ height: '600px', width: '450px', maxWidth: '100%' }}
              onError={handleLottieError}
            />
          ) : (
            <div className="w-[200px] h-[300px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              [No Animation]
            </div>
          )}
        </div>

        {/* Kolom Teks */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-500 leading-none mb-3">
            {errorCode}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            {errorTitle}
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            {errorDescription}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            ← Back To Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;