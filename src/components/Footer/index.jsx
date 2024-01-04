import React from "react";
import styles from './footer.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Imagen1 from '/src/assets/Coop_Tech_inicial_page-0005-removebg-preview.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
   <div className="grid grid-cols-2 gap-2 text-center  pt-9	">
    <div className="mb-9 flex justify-center">
      <img src={Imagen1}className={styles.imagenfooter}></img>
    <p  className={ styles.textofooter }> | </p> 
    <Link to="/Servicios" onClick={() => handleLinkClick("/Servicios")}>
    <p  className={ styles.textofooter }> Servicios </p>
    </Link>
    <p  className={ styles.textofooter }> | </p> 
    <Link to="/ComoSomos" onClick={() => handleLinkClick("/ComoSomos")}>
    <p className={ styles.textofooter }> Como somos  </p>
    </Link>
    <p  className={ styles.textofooter }> | </p> 
    <Link to="/Noticias" onClick={() => handleLinkClick("/Noticias")}>
    <p className={ styles.textofooter }> Noticias </p>
    </Link>
      </div>

      <div className="mb-9 flex justify-center">
      <a className="mr-9 text-neutral-800 dark:text-neutral-200 text-xl 	">
      <FaInstagram className={styles.icon}/>
      </a>
     <a className="mr-9 text-neutral-800 dark:text-neutral-200 text-xl	">
     <FaLinkedinIn className={styles.icon}/>
     </a>
     <a className="mr-9 text-neutral-800 dark:text-neutral-200 text-xl	">
     <LuMail className={styles.icon}/>
     </a>
     <a className="mr-9 text-neutral-800 dark:text-neutral-200 text-xl	">
     <FaWhatsapp className={styles.icon} />
     </a>
      </div>
    </div>


    <div
      className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
     Todos los Derechos Reservados Copyright © IT & Development -  <a> COOPMORTEROS 2024 </a>
    </div>
  </footer>
      );
    }




export default Footer;