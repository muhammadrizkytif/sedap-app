// src/components/NavigationBar.jsx
import React from "react";

const NavigationBar = () => {
  const handleLoginRegisterClick = () => {
    alert("Tombol Login/Register diklik! Arahkan ke halaman login/register.");
  };

  const menuItems = [
    { name: "Beranda", href: "#home" },
    { name: "Resep", href: "#recipes" },
    { name: "Artikel", href: "#articles" },
    { name: "Tentang Kami", href: "#about" },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex-shrink-0">

          {/* Logo */}
          <div id="sidebar-logo" className="flex flex-col">
            <span
              id="logo-title"
              className="font-poppins-extraBold text-[48px] leading-none text-gray-900 cursor-pointer"
            >
              Sedap{" "}
              <b id="logo-dot" className="text-hijau">
                .
              </b>
            </span>
            <span
              id="logo-subtitle"
              className="font-barlow text-sm text-gray-400 -mt-1"
            >
              Modern Guest Pages
            </span>
          </div>
        </div>

        <nav className="hidden md:flex flex-grow justify-center items-center space-x-6 lg:space-x-8 mx-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-green-600 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex-shrink-0">
          <button
            onClick={handleLoginRegisterClick}
            className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:ring-opacity-50">
            Login / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
