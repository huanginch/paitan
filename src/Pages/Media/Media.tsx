import Daily from "./Daily";

import Youtube from "../../assets/youtube.svg?react";
import YoutubeActive from "../../assets/youtube-active.svg?react";
import Twitch from "../../assets/twitch.svg?react";
import TwitchActive from "../../assets/twitch-active.svg?react";
import Discord from "../../assets/discord.svg?react";
import DiscordActive from "../../assets/discord-active.svg?react";

import unicorn from "/src/assets/unicorn.png";

import { useState } from "react";

function Media() {

  const [isYTActive, setIsYTActive] = useState(false);
  const [isTWActive, setIsTWActive] = useState(false);
  const [isDCActive, setIsDCActive] = useState(false);

  //change the svg component when the link is clicked
  const handleYTFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsYTActive(true);
    else return;
    e.stopPropagation();
  }

  const handleYTBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsYTActive(false);
    else return;
    e.stopPropagation();
  }

  const handleTWFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsTWActive(true);
    else return;
    e.stopPropagation();
  }

  const handleTWBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsTWActive(false);
    else return;
    e.stopPropagation();
  }

  const handleDCFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsDCActive(true);
    else return;
    e.stopPropagation();
  }

  const handleDCBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) setIsDCActive(false);
    else return;
    e.stopPropagation();
  }

  return (
    <div className="">
      <div className="text-white bg-here bg-center md:bg-here-pc bg-contain bg-no-repeat w-[200px] md:w-[400px] tablet:w-[600px] h-[46px] md:h-[100px] flex items-center justify-center ml-[calc(50%-100px)] md:ml-[calc(50%-200px)] tablet:ml-[calc(50%-250px)] tablet:mb-[-65px]">
        <p className="pr-2 md:pr-10 md:text-[28px] tablet:text-4xl">主播都在這裡開台辣~</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-10 tablet:ml-16 relative z-0">
          <a target="_blank" onFocus={handleYTFocus} onBlur={handleYTBlur} href="https://www.youtube.com/@PaitanOfficial" className="flex items-center bg-white active:bg-third text-third active:text-white active:border-primary py-[6px] md:py-[12px] rounded-r-[19px] tablet:rounded-full pl-2 font-bold border-third border-[3px] tablet:border-[5px] border-l-0 mb-[10px] hover:opacity-50 transition-all ease-in duration-200 tablet:mb-[36px]">
            {
              isYTActive ? <YoutubeActive className="w-[37px] h-[37px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/> : <Youtube className="w-[36px] h-[38px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/>
            }
            <p className="text-[13px] md:text-[28px] tablet:text-4xl leading-[20px] md:leading-[30px] pr-2 md:pr-5 tablet:pr-[48px]">基本上都在這裡開台<br/>Cover、精華等等都在這</p>
            <div className="w-[100px] h-2 bg-third absolute z-[-1] left-[-100px]"></div>
          </a>
          <a target="_blank" onFocus={handleTWFocus} onBlur={handleTWBlur} href="https://www.twitch.tv/menonpaitan" className="flex items-center bg-white active:bg-third text-third active:text-white active:border-primary py-[6px] md:py-[12px] rounded-r-[19px] tablet:rounded-full pl-2 font-bold border-third border-[3px] tablet:border-[5px] border-l-0 hover:opacity-50 transition-all ease-in duration-200">
            {
              isTWActive ? <TwitchActive className="w-[37px] h-[37px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/> : <Twitch className="w-[36px] h-[38px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/>
            }
            <p className="text-[13px] md:text-[28px] tablet:text-4xl leading-[20px] md:leading-[30px]">
              偶爾會在這裡開台<br/>(多數在玩遊戲~)
            </p>
            <div className="w-[100px] h-2 bg-third absolute z-[-1] left-[-100px]"></div>
          </a>
        </div>
        <img className="w-[187px] md:w-[300px] tablet:w-[400px]" src={unicorn} alt="unicorn" />
      </div>
      <a target="_blank" onFocus={handleDCFocus} onBlur={handleDCBlur} href="https://discord.com/invite/4YkXqmwngT" className="flex items-center bg-white active:bg-third text-third active:text-white py-[6px] rounded-l-[86px] pl-2 tablet:pl-10 border-third border-[3px] tablet:border-[5px] active:border-primary border-r-0 tablet:border-r-0 float-end hover:opacity-50 transition-all ease-in duration-200 tablet:w-[45%] mb-[15px] md:mb-[80px]">
        {
            isDCActive ? <DiscordActive className="w-[36px] h-[38px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/> : <Discord className="w-[36px] h-[38px] mr-[6px] md:w-[80px] md:h-[80px] tablet:mx-[20px] active:drop-shadow-[8px_6px_6px_rgba(255,255,225,0.25)]"/>
        }
        <p className="mr-5 md:mr-0 text-sm md:text-[28px] tablet:text-4xl md:leading-[30px]">跟大家聊天來這~</p>
      </a>
      <Daily className="clear-both"/>
    </div>
  );
}

export { Media };