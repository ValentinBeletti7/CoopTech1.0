import React from 'react';
import styles from '.././adncooptech.module.css';
import Panel from '../../../components/Panel';
import Olas from '../../../components/Olas';


import Imagen1 from '/src/assets/sea-164989_1280.jpg';
import Imagen2 from '/src/assets/furniture-1840463_1280.jpg';

const QuienesSomos = () => {
  return (
    <>
      <Panel imagen={Imagen1}  seccion="ADN COOPTECH" subSeccion="Quienes somos"/>
     <div className={styles.contenido}>
      <Olas titulo='Modelo de Negocios'     color=" text-black	" posicion="1" imagen={Imagen2}     texto ="Nuestro compromiso va más allá de la tecnología: buscamos generar bienestar en las personas, mediante servicios de calidad y accesibles, a través de la tecnología y la innovación. "/>
      <div className={`${styles.sectionbg} ${styles.section}`}>
      <Olas  titulo='Detalle del equipo'   color=" text-white" posicion="2" texto ="Nuestros talentos, evolucionan los negocios. Nos especializamos en el desarrollo de soluciones integrales, tanto de software como de hardware, para el monitoreo, control y gestión de sistemas complejos: redes eléctricas, de agua potable, telecomunicaciones y sistemas de gestión operativa del equipo de trabajo, abordando desafíos comunes en empresas y organizaciones que ofrecen servicios esenciales"/>
      </div>
     </div>
    </>
  );
}

export default QuienesSomos;
