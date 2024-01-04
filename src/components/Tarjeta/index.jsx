import React, { useState } from 'react';
import styles from './tarjeta.module.css'; 
import { Link } from 'react-router-dom';

const Tarjeta = ({ nombre,img, link }) => {
  const [after, setAfter] = useState(true);

 

  const className = after ? styles.card : `${styles.card} ${styles.cardafter}`;

  return (
    <>
    <div className={styles.divCard} >
      <div className={`${className} `}>
        <div className={styles.cardmenu}>

         <img src={img} className={styles.swadow } />
        </div>
        <span>{nombre}</span>
        <div  className={styles.cardfooter}>
        <Link to="/ServiciosDescripcion">
        <button    
         className={styles.cardbtn}>
        ¡Esto me interesa!<span>¡Esto me interesa!</span>
      </button>
      </Link>

        </div>
      </div>
     
      </div>
    </>
  );
};

export default Tarjeta;
