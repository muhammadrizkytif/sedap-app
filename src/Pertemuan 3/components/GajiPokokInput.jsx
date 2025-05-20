import React from 'react';

function gajiPokokInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">
        Gaji Pokok
      </label>
      <input
        type="number"
        placeholder="Masukkan jumlah gaji"
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default gajiPokokInput;