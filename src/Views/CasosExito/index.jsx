import React from 'react';
import styles from './casosexito.module.css';
import Panel from '../../components/Panel';
import Carousel from '../../components/Carousel';
import TarjetaTesti from '../../components/Testimonio';

const CasosExito = () => {
  return (
    <>
    <Panel imagen="src/assets/buildings-1850129_1280.jpg"  seccion="Casos de Exito" subSeccion=" "/>
    <Carousel titulo="Empresas y Cooperativas que confian en nuestros Servicios"/>
    <div className={styles.contenido + ' grid grid-cols-3'}>
    <TarjetaTesti img="src/assets/imagen1.jpg" nombre="Valentin Beletti" empresa="Mercado Libre" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño."/>
    <TarjetaTesti img="src/assets/persona-e1533759204552.jpg" nombre="Gonzalo Pagliano" empresa="Amazon" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño."/>
    <TarjetaTesti img="src/assets/2165947w620.jpg" nombre="Matias Lorenzatti" empresa="Apple" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño."/>

     </div>
    </>
  );
}

export default CasosExito;
