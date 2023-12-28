import React from 'react';
import styles from './servicios.module.css';
import Tarjeta from '../../components/Tarjeta';
import Panel from '../../components/Panel';

const Servicios = () => {
  return (
    <>
      <Panel imagen="src/assets/fondoServicios.jpg"  seccion="Servicios" subSeccion="Creamos soluciones completas, Para que tus redes eléctricas, de agua potable, telecomunicaciones y otros servicios funcionen mejor, de manera segura y eficiente. @ Estamos para impulsar juntos, la transformación digital en la gestión de los servicios esenciales.@ COOPTECH es tu aliado tecnológico para una mejor gestión de los servicios esenciales. "/>
      <div className={` grid grid-cols-3 gap-3 text-center mx-12 mb-12`}>
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
