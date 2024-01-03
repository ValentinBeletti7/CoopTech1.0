import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';

const Carousel = ({ titulo, imagenes }) => {
  return (
    <>
      <h1 className={'text-center'}>{titulo}</h1>
      <div className='mx-20'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}

          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imagenes.map((imagen, index) => (
            <SwiperSlide className={styles.centrado} key={index}>
              <img src={imagen} className='w-3/4' alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
