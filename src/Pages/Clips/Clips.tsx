import axios from 'axios';
import { useEffect, useState } from 'react'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/scss/navigation';
import './customNavigation.scss';

//if the token is expired, use the backupClips
const backupClips: Clip[] = [
  {
    status: {
      privacyStatus: "public"
    },
    contentDetails: {
      videoId: "DsNj9KOTlAA?si=5MQ7ZpfxA1KC2x-O",
      videoPublishedAt: "2021-12-21T09:00:00Z"
    }
  },
  {
    status: {
      privacyStatus: "public"
    },
    contentDetails: {
      videoId: "RWOblHP62T4?si=WA__aEE0WxcnHfxp",
      videoPublishedAt: "2021-12-21T09:00:00Z"
    }
  },
  {
    status: {
      privacyStatus: "public"
    },
    contentDetails: {
      videoId: "9PyR7XSsPYA?si=Smvlq3_wfcmDHqp8",
      videoPublishedAt: "2021-12-21T09:00:00Z"
    }
  },
  {
    status: {
      privacyStatus: "public"
    },
    contentDetails: {
      videoId: "RSOtesoCb1A?si=qcwDU8RccmAKFkNT",
      videoPublishedAt: "2021-12-21T09:00:00Z"
    }
  },
  {
    status: {
      privacyStatus: "public"
    },
    contentDetails: {
      videoId: "vi9Ezq0aFy4?si=lAKnLjn6xJFnRG0Q",
      videoPublishedAt: "2021-12-21T09:00:00Z"
    }
  }
]

//document: https://developers.google.com/youtube/v3/docs/playlistItems?hl=zh-tw#resource
type Clip = {
  status: {
    privacyStatus: string;
  },
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
}; 

function Clips() {

  const [clips, setClips] = useState<Clip[]>([]);

  //get clips from youtube api
  const getClips = async () => {
    const tmp = [];
    const res1 = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'contentDetails, status',
        playlistId: "PLE0_hgc9uxD045UhzlgotyUXFNWhriuPh", //官方好料播放清單ID
        key: process.env.YOUTUBE_API_KEY
      }
    });
    tmp.push(...res1.data.items);

    //get covers from cover playlist
    const res2 = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'contentDetails, status',
        playlistId: "PLE0_hgc9uxD3ZK5VHrqrUXEhV6rKSXoBd", //Cover播放清單ID
        key: process.env.YOUTUBE_API_KEY
      }
    });
    tmp.push(...res2.data.items);

    //remove private clips
    for (let i = tmp.length - 1; i >= 0; i--) {
      if (tmp[i].status.privacyStatus === "private") {
        tmp.splice(i, 1);
      }
    }
    
    //sort the clips by videoPublishedAt
    tmp.sort((a: Clip, b: Clip) => {
      return new Date(b.contentDetails.videoPublishedAt).getTime() - new Date(a.contentDetails.videoPublishedAt).getTime();
    });

    //get the latest 5 clips
    tmp.splice(5);

    setClips(tmp);
  }

  useEffect(() => {
    getClips();
  }, []);

  //if the token is expired, use the backupClips
  useEffect(() => {
    if (clips.length === 0) {
      setClips(backupClips);
    }
  }, [clips]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      className='w-full h-[250px] md:h-[350px] lg:h-[600px] relative overflow-visible'
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