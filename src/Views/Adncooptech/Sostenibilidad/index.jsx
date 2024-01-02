import React from 'react';
import styles from '.././adncooptech.module.css';
import Panel from '../../../components/Panel';
import Olas from '../../../components/Olas';



const Sostenibilidad = () => {
  return (
    <>
      <Panel imagen="src/assets/sea-164989_1280.jpg"   seccion="ADN COOPTECH" subSeccion="Sostenibilidad"/>
     <div className={styles.contenido}>
      <Olas titulo='Sostenibilidad  ' imagen="src/assets/furniture-1840463_1280.jpg" />



     </div>
    </>
  );
}

export default Sostenibilidad;
