import { useEffect, useState } from "react";

import menon from "/src/assets/麵音.png";
import menonMobile from "/src/assets/麵音-mobile.png";
import chichi from "/src/assets/機機君.png";
import chichiMobile from "/src/assets/機機君-mobile.png";

function Other() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const menonUrl = isMobile ? menonMobile : menon;
  const chichiUrl = isMobile ? chichiMobile : chichi;

  return (
    <div className="bg-Artist-Other bg-cover px-2 flex flex-col justify-center md:flex-row md:justify-evenly lg:justify-center content-between items-center overflow-hidden">
      <img className="md:mt-[20px] mb-[30px] lg:mb-[200px] w-[300px] tablet:w-auto md:max-w-[400px] md:max-h-[400px] PC:max-w-[500px] PC:max-h-[500px]" src={menonUrl} alt="menon" />
      <img className="md:mt-[60px] mb-[20px] lg:mt-[200px] w-[300px] tablet:w-auto md:max-w-[400px] md:max-h-[400px] PC:max-w-[500px] PC:max-h-[500px]" src={chichiUrl} alt="chichi" />
    </div>
  );
}

export default Other;