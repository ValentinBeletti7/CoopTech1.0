import React from 'react';
import styles from '.././adncooptech.module.css';
import Panel from '../../../components/Panel';
import Olas from '../../../components/Olas';



const Quienesomos = () => {
  return (
    <>
      <Panel imagen="src/assets/adn.jpeg"  seccion="ADN COOPTECH" subSeccion="Quienes somos"/>
     <div className={styles.contenido}>
      <Olas titulo='Modelo de Negocios' imagen="src/assets/furniture-1840463_1280.jpg" />
      <Olas titulo='Detalle del equipo'/>   
      <Olas titulo='Certificaciones y premios'/>


     </div>
    </>
  );
}

export default Quienesomos;
