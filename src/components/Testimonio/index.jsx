import React from 'react';
import styles from './testi.module.css'; 

const TarjetaTesti = ({texto,img,nombre,empresa}) => {
  return (
      <>
        <div className={styles.testimonialitem} >
          <img src={img} className= {styles.testimonialimg} alt="" />
          
          <h3>{nombre}</h3>
          <h4>{empresa} </h4>
          <p>
            {texto}
          </p>
        </div>
      </>
      );
    }



export default TarjetaTesti;
