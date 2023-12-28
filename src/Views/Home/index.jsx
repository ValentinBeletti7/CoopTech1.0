import React, { useState, useEffect } from 'react';
import styles from './inicio.module.css';

const Home = () => {
  const [showFirstParagraph, setShowFirstParagraph] = useState(true);

  useEffect(() => {
    // Oculta el primer párrafo después de 10 segundos
    const timeoutHideFirstParagraph = setTimeout(() => {
      setShowFirstParagraph(false);
    }, 10000);

    // Muestra el segundo párrafo después de 20 segundos (10 segundos para ocultar + 10 segundos para mostrar)
    const timeoutShowSecondParagraph = setTimeout(() => {
      setShowFirstParagraph(true);
    }, 20000);

    // Limpia para que vuelva a comenzar
    return () => {
      clearTimeout(timeoutHideFirstParagraph);
      clearTimeout(timeoutShowSecondParagraph);
    };
  }, []);


  return (
    <>
      <video
        src="src/assets/production_id_3683883 (1080p).mp4"
        autoPlay={true}
        muted={true}
        loop={true}
      ></video>
      <div className={styles.texto + ' ml-48'}>
        <img
          className={styles.swadow}
          src="src/assets/Coop_Tech_inicial_page-0001-removebg-preview.png"
          alt="Descripción de la imagen"
        />
        <p className={showFirstParagraph ? styles.fadeIn : styles.fadeOut}>
        Para evolucionar los servicios esenciales, con adaptabilidad y escalabilidad.
        </p>
        <p className={!showFirstParagraph ? styles.fadeIn : styles.fadeOut}>
        Para hacer un mejor trabajo juntos.
        </p>
      </div>
    </>
  );
};

export default Home;
