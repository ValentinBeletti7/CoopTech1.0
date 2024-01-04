import React from 'react';
import styles from './servicios.module.css';
import Panel from '../../components/Panel';
import Olas from '../../components/Olas';
import Imagen1 from '/src/assets/concepto-comunicacion-ocio-personas.jpg';


const ServiciosDescripcion = () => {
  return (
    <>
      <Panel imagen={Imagen1}  seccion="Servicios" subSeccion="Creamos soluciones completas, Para que tus redes eléctricas, de agua potable, telecomunicaciones y otros servicios funcionen mejor, de manera segura y eficiente. @ Estamos para impulsar juntos, la transformación digital en la gestión de los servicios esenciales.@ COOPTECH es tu aliado tecnológico para una mejor gestión de los servicios esenciales. "/>
    <div>
    <Olas
       color=" text-black	"
       titulo='Oficina Virtual'
       id='ofiVirtual'
       posicion="1"
       texto ="Descripcion Del Producto "
       imagen={Imagen1} 
       video="1"  
          />

      <div className={`${styles.sectionbg} ${styles.section}`}>
       <Olas
       color=" text-white"
       titulo='Reconecta '
       id='reconecta'
       posicion="2"
       texto ="Descripcion Del Producto "
       imagen={Imagen1}   
       video="1"     />
     </div> 
      <Olas
      color=" text-black	"
       titulo='+Agua '
       id='agua'
       posicion="1"
       texto ="Descripcion Del Producto "
       imagen={Imagen1}    
       video="1"    />
      <div className={`${styles.sectionbg} ${styles.section}`}>
      <Olas
      color=" text-white"
       titulo='Cloud services '
       id='cloud'
       posicion="2"
       texto ="Descripcion Del Producto "
       imagen={Imagen1}  
       video="1"      />
      </div>
      <Olas
       color=" text-black	"
       titulo='Provision '
       id='provision'
       posicion="1"
       texto ="Descripcion Del Producto "
       imagen={Imagen1}
       video="1"        />
      <div className={`${styles.sectionbg} ${styles.section}`}>
       
      <Olas
      color=" text-white"
       titulo='Desarollos especiales'
       id='desarollos'
       posicion="2"
       texto ="Descripcion Del Producto "
       imagen={Imagen1} 
       video="1"       />
      </div>
    </div>
    </>
  );
}

export default ServiciosDescripcion;
