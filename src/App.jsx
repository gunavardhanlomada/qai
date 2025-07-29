import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/admin/login';
import Navbar from './components/navbar';
import Services from './components/services/services';
import Products from './components/products/products';
import Partners from './components/partners/partners';
import Contactus from './components/contactus/contactus';
import Aboutus from './components/aboutus/aboutus';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
