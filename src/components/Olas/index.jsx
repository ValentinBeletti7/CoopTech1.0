import React from 'react';
import styles from './Olas.module.css';

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
             {video != null ? (
                <>
                 <video  controls src={video} loop={true} className={`mx-12 mb-12 col-start-1 col-end-3 rounded-b-xl  ${styles.img}`}></video>
                  <ul className={`mx-12 col-end-7 col-span-2  ${ulClassName}`}>{listaDeTexto}</ul>
                </>
              ) : (
                <>
                  <img
                    src={imagen}
                    className={`mx-12 mb-12 col-start-1 col-end-3  ${styles.img}`}
                  />
                  <ul className={`mx-12 col-end-7 col-span-2  ${ulClassName}`}>{listaDeTexto}</ul>

                </>
              )}
    
                </>
              ) : (
                <>
                {video != null ? (
                <>
                 <ul className={`mx-16 col-start-1 col-end-3  ${ulClassName}`}>{listaDeTexto}</ul>
                 <video controls src={video} loop={true} className={`mx-16 mb-12 col-end-7 col-span-2 rounded-b-xl ${styles.img}`}></video>
                </>
              ) : (
                <>
                  <ul className={`mx-16 col-start-1 col-end-3  ${ulClassName}`}>{listaDeTexto}</ul>
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
