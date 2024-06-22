import NameCard from "./NameCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import './Paitan.scss'

import paitanIntro from "/src/assets/Paitan_Intro.png";
import paitanIntro2 from "/src/assets/Paitan_Intro_2.png";

function Paitan() {
  return (
    <div className="text-[#727171] text-[12px] md:text-[20px] lg:text-[24px] bg-background border-t-8 border-b-8 border-third mb-[35px] md:mb-[70px] flex flex-col items-center self-center md:block">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        className='w-full overflow-visible relative'>
        <SwiperSlide
          className="w-full md:w-auto mx-auto">
          <img src={paitanIntro} className="absolute bottom-full xs:left-[10%] md:left-auto md:right-0 md:bottom-0 w-[100%] xs:w-[83%] md:w-[50%]" alt="paitan" />
          <div className="w-[50%] mx-auto md:ml-[56px] PC:ml-[220px]">
            <p className="pt-[58px] md:pt-[35px] pb-[38px]">
              嗚呼──！！大家好我是白湯！！<br />每天督促自己不要亂ㄘ毒的個人勢VTUBER
            </p>
            <p className="pb-[38px]">
              用骨頭、香料、還有美好味道<br />（差點成為廚餘）的拉麵湯精靈
            </p>
            <p className="pb-[53px] md:pb-[95px]">
              喜歡唱歌、做讓人開心(或問號)的影片<br />還有畫畫、ASMR、拉麵、糖心蛋！
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="mx-auto">
          <img src={paitanIntro2} className="absolute bottom-[105%] xs:left-[8%] xs:bottom-full md:left-auto md:right-0 md:bottom-0 w-[100%] xs:w-[83%] md:w-[60%] tablet:w-[50%]" alt="paitan" />
          <div className="w-[50%] mx-auto md:ml-[56px] PC:ml-[220px]">
            <p className="pt-[58px] md:pt-[35px] pb-[38px]">
              白湯身為拉麵精靈真正的樣子<br />二週年以前都是用生前的模樣和大家見面
            </p>
            <p className="pb-[38px]">
              死前向神秘的力量許願<br />希望自己能成為一個讓大家都開心的存在
            </p>
            <p className="pb-[53px] md:pb-[95px]">
              但不管外表變成什麼樣子<br />小王八蛋還是小王八蛋
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <NameCard name="麵音白湯" intro="(負責失控的老闆)  "/>
    </div>
  );
}

export default Paitan;