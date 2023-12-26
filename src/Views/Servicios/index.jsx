import React from 'react';
import styles from './servicios.module.css';
import Tarjeta from '../../components/Tarjeta';
import Panel from '../../components/Panel';

const Servicios = () => {
  return (
    <>
      <Panel imagen="src/assets/fondoServicios.jpg"  seccion="Servicios"/>
      <div className={`${styles.contenido} grid grid-cols-3 gap-3 text-center mx-12 mb-12`}>
        <Tarjeta nombre="Oficina Virtual" descripcion="Breve descripción del producto" logo=" src/assets/oficinavirtual.png" />
        <Tarjeta nombre="Reconecta" descripcion="Breve descripción del producto" />
        <Tarjeta nombre="+Agua" descripcion="Breve descripción del producto" />
        <Tarjeta nombre="Cloud services" descripcion="Breve descripción del producto" />
        <Tarjeta nombre="Provisión" descripcion="Breve descripción del producto" />
        <Tarjeta nombre="Desarrollos especiales" descripcion="Breve descripción del producto" />
      </div>
    </>
  );
}

export default Servicios;
