import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLoginRegisterClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Resep Populer", href: "#top-products" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Ulasan", href: "#testimonials" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Sedap */}
          <div className="flex-shrink-0 flex items-center">
            {/* Sebaiknya gunakan Link to="/" dari router */}
            <div
              id="sidebar-logo"
              className="flex flex-col cursor-pointer"
              onClick={() => navigate("/guest")}
            >
              <span
                id="logo-title"
                className="font-poppins-extraBold text-[36px] leading-none text-gray-900"
              >
                Sedap{" "}
                <b id="logo-dot" className="text-hijau">
                  .
                </b>
              </span>
            </div>
          </div>

          {/* Menu Navigasi (Desktop) */}
          <div className="hidden md:flex md:ml-6 md:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-hijau hover:text-gray-900 transition duration-150 ease-in-out" // Ganti hover border ke hijau
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Tombol Login/Register (Desktop) dengan Animasi */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleLoginRegisterClick}
              className={`
                bg-white text-gray-800 font-medium py-2 px-5 rounded-md
                border border-gray-300
                transition-all duration-200 ease-in-out transform  /* Transisi untuk semua properti */
                hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm hover:-translate-y-px /* Efek Hover: bg, border, shadow, angkat sedikit */
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hijau /* Efek Fokus: ring hijau */
                active:scale-95 active:bg-gray-100 /* Efek Aktif: sedikit mengecil & bg lebih gelap */
              `}
            >
              Login / Register
            </button>
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hijau" // Ganti ring ke hijau
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat item diklik
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              {/* Tombol Login/Register (Mobile) dengan Animasi */}
              <button
                onClick={handleLoginRegisterClick}
                className={`
                  w-full bg-white text-gray-800 font-medium py-2 px-4 rounded-md
                  border border-gray-300
                  transition-all duration-200 ease-in-out transform
                  hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm hover:-translate-y-px
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hijau
                  active:scale-95 active:bg-gray-100`}
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
