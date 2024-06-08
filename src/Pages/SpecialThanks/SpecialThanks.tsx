import { useState, useEffect } from "react";
import Profile from "./Profile"
import "./SpecialThanks.scss"

import loud from "/src/assets/loud.png";
import loudPC from "/src/assets/loud-pc.png";

import winterMelon from '/src/assets/冬瓜冰茶頭像.png';
import aiya from '/src/assets/哀呀頭像.png';

const profiles = [ 
  {
    text: "繪師把拔：冬瓜冰茶",
    twitter: "@WMiceTea",
    icon: winterMelon
  },
  {
    text: "Live2D麻麻：哀呀",
    twitter: "@aiya_draw_play",
    icon: aiya
  },
]


function SpecialThanks() {
  const [imgUrl, setImgUrl] = useState<string>(loud);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImgUrl(loud);
      } else {
        setImgUrl(loudPC);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);


  return (
    <div className="bg-SpecialThanks bg-repeat-x bg-contain bg-center md:bg-none md:bg-white md:rounded-[40px] md:border-[5px] md:border-third md:mx-auto w-full md:w-[85%] PC:w-[70%] h-[331px] md:h-auto pt-[30px] PC:pt-[40px] relative z-0 mb-[120px] md:flex md:flex-row-reverse items-end md:pr-[30px] PC:pr-[80px]">
      <div className="md:flex-grow ">
        <ul>
          {profiles.map((profile, index) =>
            <li className={index !== profiles.length ? 'mb-[30px] md:mb-[55px]' : 'mb-0'}>
              <Profile key={`profile-${index}`} text={profile.text} twitter={profile.twitter} icon={profile.icon} />
            </li>
          )
          }
        </ul>
      </div>
      <p data-text="特別" className="md:hidden special text-white text-[40px] text-center">特別 <span data-text="感謝" className="thanks text-[64px] align-text-top">感謝</span></p>
      <img className="w-[164px] md:w-[250px] lg:w-[300px] mt-[-60px] relative z-0 md:rounded-bl-[30px]" src={imgUrl} alt="loud" />
    </div>
  )
}

export { SpecialThanks }