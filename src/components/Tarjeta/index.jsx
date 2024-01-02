import React, { useState } from 'react';
import styles from './tarjeta.module.css'; 

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
        <button onClick={() => window.location.href = link} className={styles.cardbtn}>
        ¡Esto me interesa!<span>¡Esto me interesa!</span>
      </button>

        </div>
      </div>
     
      </div>
    </>
  );
};

export default Tarjeta;
