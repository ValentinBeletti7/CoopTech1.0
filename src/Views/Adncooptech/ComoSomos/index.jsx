import React from 'react';
import styles from '.././adncooptech.module.css';
import Panel from '../../../components/Panel';
import Olas from '../../../components/Olas';

import Imagen1 from '/src/assets/sea-164989_1280.jpg';
import Imagen2 from '/src/assets/furniture-1840463_1280.jpg';
import Imagen3 from '/src/assets/desk-593327_1280.jpg';

const ComoSomos = () => {
  return (
    <>
      <Panel imagen={Imagen1} seccion="ADN COOPTECH" subSeccion="Como somos" />
      <Olas
        color=" text-black"
        titulo="Mision"
        posicion="1"
        imagen={Imagen2}
        texto="Nuestro compromiso va más allá de la tecnología: buscamos generar bienestar en las personas, mediante servicios de calidad y accesibles, a través de la tecnología y la innovación."
      />
      <div className={`${styles.sectionbg} ${styles.section}`}>
        <Olas
          color=" text-white"
          titulo="Valores"
          imagen={Imagen3}
          posicion="2"
          texto="Responsabilidad Social: Comprometidos con el impacto positivo en las personas y el entorno en el que operamos.@ Cercanía y Calidez: Valoramos la atención personalizada y el trato humano en todas nuestras interacciones.@ Honestidad del Equipo de Trabajo: La transparencia y la integridad son la base de nuestras relaciones profesionales.@ Innovación e Iniciativa: Buscamos constantemente nuevas formas de mejorar y crecer, promoviendo la creatividad y la iniciativa en nuestro equipo."
        />
      </div>
      <Olas
        color=" text-black"
        titulo="Cultura"
        
        posicion="1"
        texto="Impulsamos la transformación digital en el ámbito de los servicios esenciales, y ofrecemos soluciones adaptadas y escalables en constante evolución, con el propósito de llevar nuestro impacto positivo y duradero a personas de otras localidades."
      />
    </>
  );
}

export default ComoSomos;
