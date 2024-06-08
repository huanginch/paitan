import NameCard from "./NameCard";

import paitanIntro from "/src/assets/Paitan_Intro.png";

function Paitan() {
  return (
    <div className="text-[#727171] text-[12px] md:text-[20px] lg:text-[24px] bg-background border-t-8 border-b-8 border-third md:pl-10 PC:pl-52 relative mb-[35px] md:mb-[70px] flex flex-col items-center self-center md:block">
      <img src={paitanIntro} className="absolute bottom-full md:right-0 md:bottom-0 w-[100%] xs:w-[83%] md:w-[50%]" alt="paitan" />
     <div>
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
      <NameCard name="麵音白湯" intro="(負責失控的老闆)  "/>
    </div>
  );
}

export default Paitan;