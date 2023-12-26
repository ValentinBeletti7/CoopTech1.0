import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "../src/Views/Home";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Servicios from './Views/Servicios';
import Adncooptech from './Views/Adncooptech';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Adncooptech" element={<Adncooptech/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
