import { useContext, useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import DataContext from '../../stores/Context';

import welcom from '/src/assets/歡迎光臨麵屋.png';
import welcomTablet from '/src/assets/歡迎光臨麵屋-tablet.png';
import welcomMobile from '/src/assets/歡迎光臨麵屋-Mobile.png';
import logoImg from '/src/assets/LOGO-01.png';
import paitanBanner from '/src/assets/paitan_banner.png';
import paitabBannerMobile from '/src/assets/paitan_banner-Mobile.png';
import woohooUrl from '/src/assets/嗚呼.png';

function Banner() {
  const [ logo, animateLogo ] = useAnimate();
  const [ paitan, animatePaitan ] = useAnimate();
  const [woohoo , animateWoohoo] = useAnimate();
  const [ welcome, animateWelcome ] = useAnimate();
  const [welcomUrl, setWelcomUrl] = useState<string>(welcom);
  const [paitanBannerUrl, setPaitanBannerUrl] = useState<string>(paitanBanner);
  const { appSize } = useContext(DataContext);

  useEffect(() => {
    
    if (appSize === "Mobile" || appSize === "Tablet") {
      animateLogo(logo.current, { x: 0, opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 1.5 });
      animatePaitan(paitan.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 1.5 });
      animateWelcome(welcome.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 3.5 });

     if(appSize === "Mobile") {
      setWelcomUrl(welcomMobile);
       setPaitanBannerUrl(paitabBannerMobile);
       animateWoohoo(woohoo.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 3.5 });
     } else {
      setWelcomUrl(welcomTablet);
       setPaitanBannerUrl(paitanBanner);
     }
    } else {
      animateLogo(logo.current, { x: [-500, 0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 4 });
      animatePaitan(paitan.current, { x: [500, 0], opacity: [0, 1] }, { ease: "easeInOut", duration: 1.5, delay: 2 });
      animateWelcome(welcome.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 6 });

      setWelcomUrl(welcom);
      setPaitanBannerUrl(paitanBanner);
    }
      
  }, [animateLogo, animatePaitan, animateWelcome, appSize, logo, paitan, welcome, woohoo, animateWoohoo]);

  return (
    <div className="flex flex-col items-center justify-stretch md:justify-end lg:justify-end md:relative w-full h-[calc(100vh-100px)] md:h-[calc(100vh-40px)] mb-[35px]">
      <img
        ref={welcome}
        className="md:absolute md:w-[100%] tablet:w-[50%] z-10 top-0 md:top-[10%] tablet:left-[15%] -translate-x-50 -translate-y-50"
        src={welcomUrl}
        alt="Welcome" />
      <div className='flex md:flex-row-reverse justify-between items-start md:absolute md:bottom-0 md:right-0 w-full lg:max-w-[1020px]'>
        <img ref={woohoo} className='md:hidden' src={woohooUrl} alt="嗚呼" />
        <img
          ref={paitan}
          src={paitanBannerUrl}
          className='object-contain md:object-cover w-[60%] lg:w-[65%]'
          alt="Paitan" />
      </div>
      <div
        ref={logo}
        className="bg-background w-full ">
        <img
          className="w-[200px] xs:w-[70%] md:w-auto md:max-h-[250px] mx-auto md:mx-0 py-2 lg:py-4 lg:pl-[100px]" src={logoImg}
          alt="Logo" />
      </div>
    </div>
  );
}

export { Banner };