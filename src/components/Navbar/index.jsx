import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
  const navbarRef = useRef(null);
  const [expand, setExpand] = useState(false);

  const expandir = () => {
    setExpand(!expand);
    const height = expand ? "5rem" : "50vh";
    
    if (expand) {
      navbarRef.current.style.height = height;
    } else {
      navbarRef.current.style.height = height;
    }
  };


  return (
    <div ref={navbarRef} className={" absolute top-0	 w-full bg-neutral-900 transition-all  duration-1000 ease-in-out h-20 overflow-hidden	shadow-md z-50 "  }>
     <div  className={'w-screen flex flex-row bg-neutral-900	w-full h-[10vh]  	'+ styles.navbar} > 
   
   <div>
   {expand ? (
          <button onClick={expandir} className={`mx-7 ${styles.icon} `}>
           <RxCross2 />
          </button>
        ) : (
          <button onClick={expandir} className={`mx-7 ${styles.icon} `}>
            <BsList />
          </button>
          )}

   </div>
   <Link to="/">
   <img className={styles.img}   src='src/assets/Coop_Tech_inicial_page-0001-removebg-preview.png'></img>
   </Link>
   <div>
   <Link  to="/home">
   <button className={'mx-7 '+ styles.nav}>Intranet</button>
   </Link>
  
   </div>
  
   
    </div>
      
    {<Contenido />}
    </div>
  );
};

const Contenido = () => {
  return(
    <>


<div className="grid grid-cols-4 gap-4 text-center m-12	">
    <ul class={"list-inside " +styles.nav}>
    <Link to="/Servicios">
         <a><h2>SERVICIOS</h2> </a>
    </Link>
            <li>Oficina Virutal</li>
            <li>Reconecta </li>
            <li>+Agua </li>
            <li>Cloud services </li>
            <li>Provision </li>
            <li>Desarollos especiales </li>
    </ul>

    <ul class={"list-inside " +styles.nav}>
    <h2>ADN COOPTECH</h2>
        <ul class={"list-inside " +styles.nav}>
        <Link to="/ComoSomos">
        <a> <h3>Como somos</h3></a> 
        </Link>
        <li>Mision</li>
        <li>Valores </li>
        <li>Cultura </li>
        </ul>
        <ul class={"list-inside " +styles.nav}>
        <Link to="/QuienesSomos">
        <a> <h3>Quienes somos</h3></a> 
        </Link>
         <li>Modelo de Negocios</li>
         <li>Detalle del equipo </li>
        </ul>
        <ul class={"list-inside " +styles.nav}>
        <Link to="/Sostenibilidad">
        <a> <h3>Sostenibilidad </h3></a> 
        </Link>
        </ul>
    </ul>

    <ul class={"list-inside " +styles.nav}>
    <Link to="/CasosExito">
    <a> <h2 className="mb-14">CASOS DE EXITO</h2></a>
    </Link>
    <Link to="/CasosExito">
    <a> <h2 >CERTIFICACIONES Y PREMIOS </h2> </a>
    </Link>
   
    </ul>

<ul class={"list-inside " +styles.nav}>

    <h2>CARRERA </h2> 
      <ul class={"list-inside " +styles.nav}>
      <li>kind Job</li> 
      </ul>
        <ul class={"list-inside " +styles.nav}>
        <Link to="https://coopmorteros.com/?8">
        <li  className="mb-2	">Ofertas de empleo</li>
        </Link>
        </ul>
    <Link to="/Noticias">
    <a> <h2 >COMUNIDAD / NOTICIAS </h2> </a>
    </Link>
  </ul>
</div>

    </>
  );
};


export default Navbar;