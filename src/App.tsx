import { useState, useEffect, useContext } from "react";

import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import SubtitleL from "./Components/Subtitle/SubtitleL";
import SubtitleR from "./Components/Subtitle/SubtitleR";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import Opening from "./Components/Opening";

import Banner from "./Pages/Banner";
import Artist from "./Pages/Artist";
import Staff from "./Pages/Staff";
import SpecialThanks from "./Pages/SpecialThanks";
import Fans from "./Pages/Fans";
import Clips from "./Pages/Clips";
import Media from "./Pages/Media";
import Rules from "./Pages/Rules";
import Donate from "./Pages/Donate";

import { useAnimate } from "framer-motion";
import DataContext from "./stores/Context";

import background from "/src/assets/bg-small.png";
import actor from "/src/assets/actor.png";
import staff from "/src/assets/staff.png"; 
import welcom from '/src/assets/歡迎光臨麵屋.png';
import welcomTablet from '/src/assets/歡迎光臨麵屋-tablet.png';
import welcomMobile from '/src/assets/歡迎光臨麵屋-Mobile.png';
import logoImg from '/src/assets/LOGO-01.png';
import paitanBanner from '/src/assets/paitan_banner.png';
import paitabBannerMobile from '/src/assets/paitan_banner-Mobile.png';
import opening from '/src/assets/opening.gif';
import openingMobile from '/src/assets/opening-mobile.gif';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showOpening, setShowOpening] = useState(true);
  const [ navbar, animateNavbar ] = useAnimate();
  const { appSize, setAppSize } = useContext(DataContext);

  const cacheImages = async (srcArray: string[]): Promise<void> => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    const images = [welcomMobile, paitabBannerMobile, openingMobile, welcomTablet, paitanBanner, opening, welcom, background, logoImg];

    cacheImages(images);

    setTimeout(async () => {
      setIsLoading(false);
      setShowOpening(true);
      setTimeout(() => {
        setShowOpening(false);
      }, 2800);
    }, 3000);

    // scroll to top when refresh and loading
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAppSize("Mobile");
        console.log(appSize);
      } else if (window.innerWidth < 992) {
        setAppSize("Tablet");
        console.log(appSize);
      } else {
        setAppSize("Desktop");
        console.log(appSize);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [appSize, setAppSize]);


  useEffect(() => {
    if (showOpening) {
      return;
    }

    if (appSize === "Mobile" || appSize === "Tablet") {
      animateNavbar(navbar.current, { opacity: [0, 1] }, { ease: "easeInOut", duration: 1.5, delay: 2.5 });
    } else {
      animateNavbar(navbar.current, { opacity: [0, 1] }, { ease: "easeInOut", duration: 1.5, delay: 4.5 });
    }
    
  }, [animateNavbar, appSize, navbar, showOpening]);

  {
    if (isLoading) {
      return (<Loading isLoading={isLoading} />)
    } else {
      return (
        <div>
          <Opening img={appSize === 'Mobile' ? openingMobile : opening} isLoading={showOpening} />
          <div className="overflow-hidden" style={{
            backgroundImage: `url(${background})`,
          }}>
            <div
              ref={navbar}
              className="fixed z-[100]">
              <Navbar />
            </div>
            <section id="banner" className="pt-[45px] mb-[120px]">
              <Banner />
            </section>
            <section id="member-intro" className="mb-[48px] md:mb-[80px] lg:mb-[100px]">
              <div className="mb-[30px] md:mb-[60px] lg:mb-[80px]">
                <Title text="成員介紹" />
              </div>
              <SubtitleL text="藝人列表" img={actor} />
              <div className="mb-[40px] lg:mb-[150px]">
                <Artist />
              </div>
              <SubtitleR text="STAFF列表" img={staff} />
              <Staff />
              <SpecialThanks />
              <Fans />
            </section>
            <section id="clips" className="mb-[40px] md:mb-[80px] lg:mb-[160px]">
              <div className="mb-[20px]">
                <Title text="精華 / Cover" />
              </div>
              <div className="px-5">
                <Clips />
              </div>
            </section>
            <section className="mb-[45px] md:mb-[80px] tablet:mb-[180px]" id="media">
              <div className="mb-[30px]">
                <Title text="社群連結" />
              </div>
              <Media />
            </section>
            <section id="rules" className="mb-[40px] md:mb-[80px] lg:mb-[120px]">
              <div className="mb-[18px] tablet:mb-[40px]">
                <Title text="二創規範" />
              </div>
              <Rules />
            </section>
            <section id="donate">
              <div className="mb-[21px] md:mb-[32px] tablet:mb-[123px]">
                <Title text="湯黑俱樂部" />
              </div>
              <Donate />
            </section>
            <Footer />
          </div>
        </div>
      );
    }

    
  }
}

export default App;
