import React from 'react';
import Panel from '../../components/Panel';
import TarjetaTesti from '../../components/Testimonio';

import Imagen1 from '/src/assets/sea-164989_1280.jpg';
import Imagen2 from '/src/assets/png-clipart-ribbon-award-prize-blue-ribbon-purple-ribbon.png';

const Premios = () => {
  return (
    <>
      <Panel imagen={Imagen1} seccion="CERTIFICACIONES Y PREMIOS" subSeccion=""/>
      <div className={` grid grid-cols-4 gap-4 text-center m-12 `}>
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />
      <TarjetaTesti img={Imagen2} nombre="Diseño Impecable"  texto="Premio al proyecto con la interfaz más intuitiva y atractiva" />

      </div>
    </>
  );
}

export default Premios;
