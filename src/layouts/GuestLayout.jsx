import React from 'react';
import { Outlet } from 'react-router-dom'; 


import NavigationBar from './NavigationBar'; 
import Footer from './Footer';            

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar khusus Guest */}
      <NavigationBar />

      {/* Konten Halaman (dirender oleh Outlet) */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* Footer khusus Guest */}
      <Footer />
    </div>
  );
};

export default GuestLayout;