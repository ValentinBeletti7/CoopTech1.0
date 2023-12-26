import React from 'react';
import styles from './adncooptech.module.css';
import Panel from '../../components/Panel';

const Adncooptech = () => {
  return (
    <>
      <Panel imagen="src/assets/adn.jpeg"  seccion="ADN COOPTECH"/>
     <div className={styles.contenido}>
      <h1 className={ ' text-center '}>Como somos</h1>
      <h1 className={  ' text-center '}>Quienes somos</h1>
      <h1 className={  ' text-center '}>Sostenibilidad</h1>


     </div>
    </>
  );
}

export default Adncooptech;
