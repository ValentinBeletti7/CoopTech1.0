import React from 'react'
import styles from './inicio.module.css'
const Home = () => {

return (
    <>
    
    <video src="src/assets/production_id_3683883 (1080p).mp4" autoplay="true" muted="true" loop="true" ></video>
    <div className= {styles.texto + ' ml-48'}>
    <img className={styles.img }   src='src/assets/Coop_Tech_inicial_page-0001-removebg-preview.png'></img>
    <p> Descubre la diversidad </p>
    <p> de productos comunitarios</p> 

    </div>
    </>
  )
}

export default Home;
