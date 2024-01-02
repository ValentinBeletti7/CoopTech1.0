import React from 'react';
import styles from './Carousel.module.css';
const Carousel = ({titulo}) => {

  
  return (
    <> 
     <h1 className={'text-center'}>{titulo}</h1>

      {/* <div className={styles.clientsslider} >
     <div className={styles.swiperwrapper}>
      <div className={styles.swiperslide}><img src="src/assets/hombre-haciendo-su-ritual-cuidado-personal.jpg"  /></div>
      <div className={styles.swiperslide}><img src="src/assets/hombre-haciendo-su-ritual-cuidado-personal.jpg"  /></div>
      <div className={styles.swiperslide}><img src="src/assets/hombre-haciendo-su-ritual-cuidado-personal.jpg"  /></div>
      <div className={styles.swiperslide}><img src="src/assets/hombre-haciendo-su-ritual-cuidado-personal.jpg"  /></div>


    </div>
    <div className={styles.swiperpagination}></div>
  </div>*/}
    </>
    
  );
}

export default Carousel;
