import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "../src/Views/Home";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Servicios from './Views/Servicios';
import CasosExito from './Views/CasosExito';
import ComoSomos from './Views/Adncooptech/ComoSomos';
import Quienesomos from './Views/Adncooptech/QuienesSomos';
import Sostenibilidad from './Views/Adncooptech/Sostenibilidad';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/ComoSomos" element={<ComoSomos/>} />
      <Route path="/Quienesomos" element={<Quienesomos/>} />
      <Route path="/Sostenibilidad" element={<Sostenibilidad/>} />

      <Route path="/CasosExito" element={<CasosExito/>} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
