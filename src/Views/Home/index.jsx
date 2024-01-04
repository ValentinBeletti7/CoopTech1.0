import React, { useState, useEffect } from 'react';
import styles from './inicio.module.css';

import Imagen2 from '/src/assets/Coop_Tech_inicial_page-0001-removebg-preview.png';
import Imagen1 from '/src/assets/concepto-comunicacion-ocio-personas.jpg';

const Home = () => {
  const [showFirstParagraph, setShowFirstParagraph] = useState(true);
  const [currentParagraph, setCurrentParagraph] = useState(1);

  useEffect(() => {
    const timeoutHideFirstParagraph = setTimeout(() => {
      setShowFirstParagraph(false);
    }, 10000);

    const timeoutShowSecondParagraph = setTimeout(() => {
      setShowFirstParagraph(true);
      setCurrentParagraph((prev) => (prev === 1 ? 2 : 1)); // Alternar entre 1 y 2
    }, 20000);

    return () => {
      clearTimeout(timeoutHideFirstParagraph);
      clearTimeout(timeoutShowSecondParagraph);
    };
  }, [currentParagraph]);


  return (
    <>
      {/*<video
        src={Imagen1}
        autoPlay={true}
        muted={true}
        loop={true}
  ></video>*/}<img
          className={styles.swadow}
          src={Imagen1}
          alt="Descripción de la imagen"
        />
      <div className={styles.texto + ' ml-48'}>
        <img
          className={styles.swadow}
          src={Imagen2}
          alt="Descripción de la imagen"
        />
        <p className={showFirstParagraph ? styles.fadeIn : styles.fadeOut}>
        Para evolucionar los servicios esenciales, con adaptabilidad y escalabilidad.
        </p>
        <p className={`${showFirstParagraph ? styles.fadeOut : styles.fadeIn} ${styles.ubicacion}`}>
        Para hacer un mejor trabajo juntos.
        </p>
      </div>
    </>
  );
};

export default Home;
