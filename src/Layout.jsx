import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b12', color: 'white' }}>
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
