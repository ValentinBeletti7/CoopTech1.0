import React from 'react';
import styles from './servicios.module.css';
import Tarjeta from '../../components/Tarjeta';
import Panel from '../../components/Panel';

const Servicios = () => {
  return (
    <>
      <Panel imagen="src/assets/fondoServicios.jpg"  seccion="Servicios"/>
      <div className={`${styles.contenido} grid grid-cols-3 gap-3 text-center mx-12 mb-12`}>
      <Tarjeta img="src/assets/oficinavirtual.png" nombre="Oficina Virtual"/>
      <Tarjeta nombre="Reconecta "/>
      <Tarjeta nombre="+Agua "/>
      <Tarjeta nombre="Cloud services"/>
      <Tarjeta nombre="Provision "/>
      <Tarjeta nombre="Desarollos especiales "/>
      </div>
    </>
  );
}

export default Servicios;
