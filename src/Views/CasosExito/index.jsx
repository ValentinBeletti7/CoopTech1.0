import React from 'react';
import styles from './casosexito.module.css';
import Panel from '../../components/Panel';
import Carousel from '../../components/Carousel';
import TarjetaTesti from '../../components/Testimonio';

import Imagen1 from '/src/assets/logo1.jpg';
import Imagen2 from '/src/assets/logo2.jpg';
import Imagen3 from '/src/assets/logo3.jpg';
import Imagen4 from '/src/assets/logo4.jpg';
import Imagen5 from '/src/assets/logo5.jpg';
import Imagen6 from '/src/assets/logo6.jpg';
import Imagen7 from '/src/assets/imagen1.jpg';
import Imagen8 from '/src/assets/persona-e1533759204552.jpg';
import Imagen9 from '/src/assets/2165947w620.jpg';
import Imagen10 from '/src/assets/buildings-1850129_1280.jpg';

const CasosExito = () => {
  const imagenesCarrusel = [
    Imagen1,
    Imagen2,
    Imagen3,
    Imagen4,
    Imagen5,
    Imagen6,

  ];

  return (
    <>
      <Panel imagen={Imagen10}seccion="Casos de Exito" subSeccion=" " />
      <Carousel titulo="Empresas y Cooperativas que confían en nuestros Servicios" imagenes={imagenesCarrusel} />
      <div className={styles.contenido + ' grid grid-cols-3'}>
        <TarjetaTesti img={Imagen7} nombre="Valentin Beletti" empresa="Mercado Libre" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño." />
        <TarjetaTesti img={Imagen8} nombre="Gonzalo Pagliano" empresa="Amazon" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño." />
        <TarjetaTesti img={Imagen9} nombre="Matias Lorenzatti" empresa="Apple" texto="Porque si no exportara de tu casa un cabello, que es grande, y nada de lo cual traería a tu casa por poco tiempo, yo sería mi hogar, o sería el más pequeño." />
      </div>
    </>
  );
}

export default CasosExito;
