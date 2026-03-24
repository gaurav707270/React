import './App.css'

import { Routes, Route } from "react-router";
import { Navbar } from "./components/navbar/Navbar";
import { Form } from './components/form/Form'
import { Users } from "./components/users/Users";
import { Home } from './components/home/Home';


export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/home' element={<Home />} />

      </Routes>

    </>
  )
}


// import './App.css'
// import { Navbar } from "./components/navbar/Navbar";
// import { Form } from './components/form/Form'
// import { Routes, Route } from "react-router-dom";

// export const App = () => {

//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Form />} />
//       </Routes>
//     </>
//   )
// }

