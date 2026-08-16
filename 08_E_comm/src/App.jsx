import React from 'react'
import { Route, Routes } from "react-router";
import Home from './components/home02/Home';
import Cart from './components/cart03/Cart';
import Navbar from './components/navbar01/Navbar';
import DetailPage from './components/detail/DetailPage';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/detail' element={< DetailPage />} />
      </Routes>
    </>
  )
}
