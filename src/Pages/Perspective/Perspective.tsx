import { useState } from "react";
import Modal from "../../Components/Modal";

import perspective1 from "/src/assets/三視圖-new.png";
import perspective2 from "/src/assets/三視圖.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      className='w-full relative overflow-visible mb-[35px] mx-4'
    >
      {
        imgs.map((img, index) => {
          return (
            <SwiperSlide key={index} className='w-full'>
              <img className="PC:w-[80%] PC:mx-auto" onClick={handleImg} src={img} alt="perspective" />
            </SwiperSlide>
          );
        })
      }
      <Modal open={openModal} onClose={handleClose} img={curImg} />
    </Swiper>
  );
}

export { Perspective };