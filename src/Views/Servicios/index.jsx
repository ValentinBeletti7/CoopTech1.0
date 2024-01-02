import React from 'react';
import styles from './servicios.module.css';
import Tarjeta from '../../components/Tarjeta';
import Panel from '../../components/Panel';

const Servicios = () => {
  return (
    <>
      <Panel imagen="src/assets/concepto-comunicacion-ocio-personas.jpg"  seccion="Servicios" subSeccion="Creamos soluciones completas, Para que tus redes eléctricas, de agua potable, telecomunicaciones y otros servicios funcionen mejor, de manera segura y eficiente. @ Estamos para impulsar juntos, la transformación digital en la gestión de los servicios esenciales.@ COOPTECH es tu aliado tecnológico para una mejor gestión de los servicios esenciales. "/>
      <div className={` grid grid-cols-3 gap-3 text-center m-12 `}>
      <Tarjeta img="src/assets/oficinavirtual.png" nombre="Oficina Virtual" link="/ServiciosDescripcion#ofiVirtual"/>
      <Tarjeta nombre="Reconecta " link="/ServiciosDescripcion#reconecta"/>
      <Tarjeta nombre="+Agua " link="/ServiciosDescripcion#agua"/>
      <Tarjeta nombre="Cloud services" link="/ServiciosDescripcion#cloud"/>
      <Tarjeta nombre="Provision " link="/ServiciosDescripcion#provision"/>
      <Tarjeta nombre="Desarollos especiales " link="/ServiciosDescripcion#desarollos"/>
      </div>
    </>
  );
}

export default Servicios;
