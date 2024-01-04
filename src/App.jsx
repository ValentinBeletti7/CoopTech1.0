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
import Sostenibilidad from './Views/Adncooptech/Sostenibilidad';
import ServiciosDescripcion from './Views/Servicios/vistaDescripcion';
import QuienesSomos from './Views/Adncooptech/QuienesSomos';
import Noticias from './Views/Noticias';
import Premios from './Views/Premios';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/ComoSomos" element={<ComoSomos/>} />
      <Route path="/QuienesSomos" element={<QuienesSomos/>} />
      <Route path="/Sostenibilidad" element={<Sostenibilidad/>} />
      <Route path="/ServiciosDescripcion" element={<ServiciosDescripcion/>} />
      <Route path="/CasosExito" element={<CasosExito/>} />
      <Route path="/Premios" element={<Premios/>} />
      <Route path="/Noticias" element={<Noticias/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
