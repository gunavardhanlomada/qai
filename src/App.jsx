import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/admin/login';
import Services from './components/services/services';
import Products from './components/products/products';
import Partners from './components/partners/partners';
import Contactus from './components/contactus/contactus';
import Aboutus from './components/aboutus/aboutus';
import Layout from './Layout';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/partners" element={<Layout><Partners /></Layout>} />
        <Route path="/contactus" element={<Layout><Contactus /></Layout>} />
        <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
        <Route path='/admin' element = {<Layout><AdminDashboard/></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
