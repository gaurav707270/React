import React from 'react';
import { Routes, Route } from "react-router";

import Navbar from './components/Navbar';
import UtilsBody from './components/UtilsBody';
import DiplayText from './components/DiplayText';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<UtilsBody />} />
        <Route path="/texts" element={<DiplayText />} />
      </Routes>
    </>
  );
}