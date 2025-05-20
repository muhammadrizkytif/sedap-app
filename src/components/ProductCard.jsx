import React from 'react';

// Komponen Card untuk menampilkan produk
const ProductCard = ({ product }) => {
  if (!product) return null; // Handle jika data produk tidak ada

  // Format harga ke Rupiah (contoh sederhana)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, 
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/400x300?text=Resep'} 
          alt={product.name}
          className="w-full h-48 object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
        />
        
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate group-hover:text-sedap-red">
          {product.name}
        </h3>
 
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-sedap-red">
            {/* Tampilkan harga jika ada, atau info lain (misal: tingkat kesulitan) */}
             {product.price ? formatPrice(product.price) : 'Gratis'}
          </span>
          <a href={`/recipes/${product.id}`} /* Ganti dengan link detail */
             className="text-sm text-gray-500 hover:text-sedap-red font-medium transition duration-150 ease-in-out">
             Lihat Detail →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;