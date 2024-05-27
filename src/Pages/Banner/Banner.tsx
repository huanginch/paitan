import { useContext, useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import DataContext from '../../stores/Context';

import welcom from '/src/assets/歡迎光臨麵屋.png';
import welcomMobile from '/src/assets/歡迎光臨麵屋-Mobile.png';
import logoImg from '/src/assets/LOGO-01.png';
import paitanBanner from '/src/assets/paitan_banner.png';

function Banner() {
  const [ logo, animateLogo ] = useAnimate();
  const [ paitan, animatePaitan ] = useAnimate();
  const [ welcome, animateWelcome ] = useAnimate();
  const [bannerUrl, setBannerUrl] = useState<string>(welcom);
  const { appSize } = useContext(DataContext);

  useEffect(() => {
    
    if (appSize === "Mobile" || appSize === "Tablet") {
      animateLogo(logo.current, { x: 0, opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 1.5 });
      animatePaitan(paitan.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 1.5 });
      animateWelcome(welcome.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 3.5 });

      setBannerUrl(welcomMobile);
    } else {
      animateLogo(logo.current, { x: [-500, 0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 4 });
      animatePaitan(paitan.current, { x: [500, 0], opacity: [0, 1] }, { ease: "easeInOut", duration: 1.5, delay: 2 });
      animateWelcome(welcome.current, { x: [0], opacity: [0, 1] }, { ease: "easeInOut", duration: 2, delay: 6 });

      setBannerUrl(welcom);
    }
      
      
  }, [animateLogo, animatePaitan, animateWelcome, appSize, logo, paitan, welcome]);

  return (
    <div className="relative w-full md:h-[calc(100vh-40px)] h-[calc(100vh-100px)]">
      <img
        ref={welcome}
        className="absolute w-[100%] md:w-[70%] tablet:w-[50%] z-10 top-0 md:top-[10%] tablet:left-[20%] -translate-x-50 -translate-y-50"
        src={bannerUrl}
        alt="Welcome" />
      <div
        ref={logo}
        className="absolute bottom-0 bg-background w-full h-[250px]">
        <img
          className="w-[100%] xs:w-[70%] md:w-auto md:max-h-[250px] mx-auto md:mx-0 py-2" src={logoImg}
          alt="Logo" />
      </div>
      <img
        ref={paitan}
        className="absolute bottom-[250px] md:bottom-0 right-0 overflow-hidden w-[60%] xs:w-[80%] md:max-w-[500px]"
        src={paitanBanner}
        alt="Paitan" />
    </div>
  );
}

export { Banner };