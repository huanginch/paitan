import axios from 'axios';
import { useEffect, useState } from 'react'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/scss/navigation';
import './customNavigation.scss';

//document: https://developers.google.com/youtube/v3/docs/playlistItems?hl=zh-tw#resource
type Clip = {
  contentDetails: {
    videoId: string;
    startAt: string;
    endAt: string;
    note: string;
    videoPublishedAt: string;
  };
}; 

function Clips() {

  const [clips, setClips] = useState<Clip[]>([]);

  //get clips from youtube api
  const getClips = async () => {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'contentDetails',
        playlistId: "PLE0_hgc9uxD045UhzlgotyUXFNWhriuPh", //官方好料播放清單ID
        key: process.env.YOUTUBE_API_KEY
      }
    });
    setClips(res.data.items);
  }

  useEffect(() => {
    getClips();
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      className='mb-[44px] w-full h-[250px] md:h-[350px] lg:h-[600px] relative overflow-visible'
    >
      {
        clips.map((clip: Clip, index) => {
          return (
            <SwiperSlide key={index} className='w-full'>
              <iframe className='mx-auto rounded-xl w-full md:w-[80%] h-full' src={`https://www.youtube.com/embed/${clip.contentDetails.videoId}?si=vixUIEyA79pFcliD`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export { Clips };