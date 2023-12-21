import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "../src/Views/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
