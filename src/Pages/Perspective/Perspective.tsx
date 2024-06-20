import { useState } from "react";
import Modal from "../../Components/Modal";

import perspective1 from "/src/assets/三視圖-new.png";
import perspective2 from "/src/assets/三視圖.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import './Perspective.scss'

const imgs = [perspective1, perspective2];

function Perspective() {

  const [openModal, setOpenModal] = useState(false);
  const [curImg, setCurImg] = useState(perspective1);

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleImg = (e: React.MouseEvent<HTMLImageElement>) => {
    setCurImg(e.currentTarget.src);
    setOpenModal(true);
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      className='w-[95%] overflow-visible mb-[35px] mx-auto'
    >
      {
        imgs.map((img, index) => {
          return (
            <SwiperSlide key={index} className='w-full flex items-center align-middle h-full'>
              <img className="w-[80%] mx-auto block" onClick={handleImg} src={img} alt="perspective" />
            </SwiperSlide>
          );
        })
      }
      <Modal open={openModal} onClose={handleClose} img={curImg} />
    </Swiper>
  );
}

export { Perspective };