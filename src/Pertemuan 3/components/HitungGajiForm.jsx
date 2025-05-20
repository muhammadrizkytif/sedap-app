import React, { useState } from 'react';
import GajiPokokInput from './components/GajiPokokInput';
import PajakInfo from './components/PajakInfo';
import HitungGajiBersih from './components/HitungGajiBersih';

function HitungGajiForm() {
  const [gaji, setGaji] = useState('');

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <GajiPokokInput value={gaji} onChange={(e) => setGaji(e.target.value)} />

        <PajakInfo />

        <HitungGajiBersih gaji={gaji} />
      </div>
    </div>
  );
}

export default HitungGajiForm;