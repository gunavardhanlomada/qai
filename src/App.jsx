import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/admin/login';
import Navbar from './components/navbar';

function App() {

  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
