import React from 'react';
import styles from './servicios.module.css';
import Tarjeta from '../../components/Tarjeta';
import Panel from '../../components/Panel';
import Imagen1 from '/src/assets/concepto-comunicacion-ocio-personas.jpg';
import Imagen2 from '/src/assets/oficinavirtual.png';


const Servicios = () => {
  return (
    <>
      <Panel imagen={Imagen1} seccion="Servicios" subSeccion="Creamos soluciones completas, Para que tus redes eléctricas, de agua potable, telecomunicaciones y otros servicios funcionen mejor, de manera segura y eficiente. @ Estamos para impulsar juntos, la transformación digital en la gestión de los servicios esenciales.@ COOPTECH es tu aliado tecnológico para una mejor gestión de los servicios esenciales. "/>
      <div className={` grid grid-cols-3 gap-3 text-center m-12 `}>
      <Tarjeta img={Imagen2} nombre="Oficina Virtual" link="/ServiciosDescripcion" />
      <Tarjeta nombre="Reconecta " link="/ServiciosDescripcion" />
      <Tarjeta nombre="+Agua " link="/ServiciosDescripcion"/>
      <Tarjeta nombre="Cloud services" link="/ServiciosDescripcion"/>
      <Tarjeta nombre="Provision " link="/ServiciosDescripcion"/>
      <Tarjeta nombre="Desarollos especiales " link="/ServiciosDescripcion"/>
      </div>
    </>
  );
}

export default Servicios;
