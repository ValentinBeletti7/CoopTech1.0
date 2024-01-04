import React from 'react';
import styles from './Olas.module.css';
import { Button } from 'react-scroll';
import { LuDownload } from "react-icons/lu";


const Olas = ({ imagen, titulo, posicion, texto, video, id,color }) => {
  const textoArray = texto.split(/\@/);
  const listaDeTexto = textoArray.map((element, index) => (
    <li className={styles.textli + color} key={index}>
      {element}
    </li>
  ));
  const ulClassName =
    textoArray.length === 1
      ? `${styles.texto} list-none`
      : `${styles.texto} list-disc`;
      return (
        <>
          <div className="relative " id={id}>
            <h1 className={'text-center ' + color}>{titulo}</h1>
            <div className='grid grid-cols-3'>
              {posicion === "1" ? (
                <>
             {video == 1 ? (
                <>
                <img
                    src={imagen}
                    className={`mx-12 mb-12 col-start-1 col-end-3  ${styles.img}`}
                  />
                  
                   {/*<video  controls src={video} loop={true} className={`mx-12 mb-12 col-start-1 col-end-3 rounded-b-xl  ${styles.img}`}></video>*/}
                  <ul className={`mx-12 col-end-7 col-span-2 text-center ${ulClassName}`}>{listaDeTexto}
                  <Button className={styles.boton}> <LuDownload className={styles.icono} /></Button></ul>
                </>
              ) : (
                <>
                  <img
                    src={imagen}
                    className={`mx-12 mb-12 col-start-1 col-end-3  ${styles.img}`}
                  />
                  <ul className={`mx-12 col-end-7 col-span-2  ${ulClassName}`}>{listaDeTexto}
                  </ul>
                </>
              )}
    
                </>
              ) : (
                <>
                {video == 1 ? (
                <>
                 <ul className={`mx-16 col-start-1 col-end-3 text-center ${ulClassName}`}>{listaDeTexto}
                 <Button className={styles.boton}>  <LuDownload className={styles.icono}  /></Button>

                 </ul>
                 <img
                    src={imagen}
                    className={`mx-16 mb-12 col-end-7 col-span-2 ${styles.img}`}
                  />
                 {/*<video controls src={video} loop={true} className={`mx-16 mb-12 col-end-7 col-span-2 rounded-b-xl ${styles.img}`}></video>*/}
                </>
              ) : (
                <>
                  <ul className={`mx-16 col-start-1 col-end-3  ${ulClassName}`}>{listaDeTexto}

                  </ul>
                  
                  <img
                    src={imagen}
                    className={`mx-16 mb-12 col-end-7 col-span-2 ${styles.img}`}
                  />
                </>
              )}             
                </>
              )}
            </div>
          </div>
        </>
      );
    };

export default Olas;
