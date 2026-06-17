import React from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from "./screen/Home";
import Projects from "./screen/Projects";
import Experience from "./screen/Experience";
import Contect from "./screen/Content";
import Login from './screen/Login';
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login  />}></Route>
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        <Route path='/projects' element={<ProtectedRoute><Projects /></ProtectedRoute>}></Route>
        <Route path='/experience' element={<ProtectedRoute><Experience /></ProtectedRoute>}></Route>
        <Route path='/contect' element={<ProtectedRoute><Contect /></ProtectedRoute>}></Route>

      </Routes>
    </>
  )
}
