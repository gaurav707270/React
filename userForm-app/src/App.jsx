import React from 'react'
import { Routes, Route } from "react-router";
import Form from './screen/Form'
import AllUser from './screen/AllUser'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/allUser' element={<AllUser />} />
      </Routes>
    </div>
  )
}
