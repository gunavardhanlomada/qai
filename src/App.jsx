import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/home';

function App() {

  return (
    <>
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
