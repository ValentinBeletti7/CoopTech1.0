import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import { BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
     <div  className={'w-screen flex flex-row bg-blue-600 	w-full h-28 p-4 '+ styles.navbar} > 
   
    <div>
    <Link to="/home">
    <button className={'mx-7'+ styles.icon} ><BsList /></button>
    </Link>
    </div>

    <img className={styles.img}   src='src/assets/Coop_Tech_inicial_page-0005-removebg-preview.png'></img>

    <div>
    <Link to="/home">
    <button className='mx-7  '>Intranet</button>
    </Link>
    <Link to="/home">
    <button className='mx-7  '>Blog</button>
    </Link>
    </div>
   
    
     </div>
    </>
  )
}

export default Navbar