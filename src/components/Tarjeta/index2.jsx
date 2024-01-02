import React, { useState } from 'react';
import styles from './tarjeta2.module.css'; 

const Tarjeta2 = ({ dia,mes,año,titulo,descripcion,imagen}) => {
  return (
    <>
  <div className={styles.wrapper}>
  <img src={imagen} className={styles.wrapper} />
<div className={styles.date}>
  <span className={styles.day}>{dia}</span>
  <span className={styles.month}>{mes}</span>
  <span className={styles.year}>{año}</span>
</div>
<div className={styles.data}>
  <div className={styles.content}>
    <h1 className={styles.title}><a href="#">{titulo}</a></h1>
    <p className={styles.text}>{descripcion}</p>
  </div>
</div>
</div>
    </>
  );
};

export default Tarjeta2;
