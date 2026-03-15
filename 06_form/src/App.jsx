import './App.css'
import { Navbar } from "./components/navbar/Navbar";
import { Form } from './components/form/Form'
import { Users } from "./components/users/Users";
import { Routes, Route } from "react-router";


export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path='/users' element={<Users />} />

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

