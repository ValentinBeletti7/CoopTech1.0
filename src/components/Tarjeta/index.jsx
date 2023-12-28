import React, { useState } from 'react';
import styles from './tarjeta.module.css'; 

const Tarjeta = ({ nombre,img }) => {
  const [after, setAfter] = useState(true);

  const handleClick = () => {
    setAfter(!after);
  };

  const className = after ? styles.card : `${styles.card} ${styles.cardafter}`;

  return (
    <>
    <div className={styles.divCard}>
    <p className={styles.descripcion}> Descripcion del Producto Descripcion del Producto  Descripcion del Producto  Descripcion del Producto Descripcion del Producto Descripcion del Producto  Descripcion del Producto  Descripcion del Producto</p>
      <div className={`${className} `}>
        <div className={styles.cardmenu}>
      
         <img src={img} className={styles.swadow } onClick={handleClick} />
        </div>
        <span>{nombre}</span>
        <div className={styles.cardfooter}>
          <div className={styles.cardbtn} onClick={handleClick}>
            ¡HAGA CLIC EN MÍ!<span>¡HAGA CLIC EN MÍ!</span>
          </div>
        </div>
      </div>
     
      </div>
    </>
  );
};

export default Tarjeta;
