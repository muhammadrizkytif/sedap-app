import React from "react";
// Impor ikon sosial dari react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Logo & Info Kontak */}
          <div>
            {/* Logo Sedap (Versi Footer) */}
            <div id="footer-logo" className="mb-5">
              <span className="font-poppins-extraBold text-3xl leading-none text-white">
                Sedap<b className="text-hijau">.</b>
              </span>
            </div>
            <p className="text-sm mb-3">Jl. Akasia. No.123, Pekanbaru, Riau</p>
            <p className="text-sm mb-3">
              <a href="mailto:info@sedap.com" className="hover:text-white">
                info@sedap.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+62123456789" className="hover:text-white">
                +62 123 456 789
              </a>
            </p>
          </div>

          {/* Kolom 2: Quick Links (Opsional) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#top-products" className="hover:text-white">
                  Resep Populer
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Masakan Nusantara
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hidangan Pembuka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Menu Utama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kue & Dessert
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Minuman
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Ikuti Kami
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white bg-gray-700 hover:bg-sedap-red w-10 h-10 rounded-full flex items-center justify-center transition duration-150 ease-in-out"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Sedap. Modern Food Inspiration. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
