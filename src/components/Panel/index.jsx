import React from 'react';
import styles from './panel.module.css';

const Panel = ({imagen,seccion,texto}) => {
  return (
    <>
      <div className={' '+ styles.hero}>
        <img className={styles.imagenpanel} src={imagen} alt="Servicios" />
        <p className={styles.texto} >{seccion}</p>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.wave1}>
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className={styles.wave2}>
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className={styles.wave3}>
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </div>
      
    </>
  );
}

export default Panel;
