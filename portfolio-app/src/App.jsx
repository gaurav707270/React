import React from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from "./screen/Home";
import Projects from "./screen/Projects";
import Experience from "./screen/Experience";
import Contect from "./screen/Content";
import Login from './screen/Login';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/contect' element={<Contect />}></Route>

      </Routes>
    </>
  )
}
