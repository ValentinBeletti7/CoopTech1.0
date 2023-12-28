import React from 'react';
import styles from '././adncooptech.module.css';
import Panel from '../../components/Panel';
import Olas from '../../components/Olas';

const Adncooptech = () => {
  return (
    <>
      <Panel imagen="src/assets/adn.jpeg"  seccion="ADN COOPTECH" subSeccion="Como somos"/>
     <div className={styles.contenido}>
      <Olas titulo='Mision' imagen="src/assets/furniture-1840463_1280.jpg" />
      <Olas titulo='Valores'/>   
      <Olas titulo='Cultura'/>


     </div>
    </>
  );
}

export default Adncooptech;
