import React from 'react'
import Navbar from "./components/Navbar";
import UserInput from './components/UserInput';
import DisplayTask from './components/DisplayTask';

export default function App() {
  return (
    <div>
      <Navbar />
      <UserInput />
      <DisplayTask />
    </div >
  )
}
