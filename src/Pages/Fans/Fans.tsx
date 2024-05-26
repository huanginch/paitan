import './Fans.scss';

import menon from "/src/assets/麵音頭像-mobile.png";
import mutan from "/src/assets/母湯頭像.png";

function Fans() {
  return (
    <div className='tablet:flex tablet:justify-between tablet:items-center mb-[37px] tablet:mb-[127px]'>
      <img className='hidden relative z-[1] tablet:block' src={menon} alt="menon" />
      <h4 data-text="粉絲形象" className="tablet:hidden relative z-0 fansTitle bg-white border-t-4 border-b-4 border-third text-white text-[32px] leading-10 py-1 text-center">粉絲形象</h4>
      <div className='tablet:flex tablet:flex-grow lg:flex-grow-0 tablet:relative tablet:bg-white tablet:rounded-[60px] tablet:border-third tablet:border-8 tablet:mx-[117px] tablet:justify-between lg:justify-center tablet:items-center relative z-[1]'>
        <div className='hidden tablet:block bg-third rounded-[60px] w-full h-[62px] absolute top-0 z-0'></div>
        <div className='bg-[rgba(252,211,107,0.44)] bg-Fans bg-no-repeat bg-center tablet:bg-none tablet:bg-transparent relative z-1'>
          <img className="w-[250px] mx-auto pt-[15px] pb-[22px] tablet:pl-[20px] lg:pl-[40px] tablet:pb-0" src={mutan} alt="母湯" />
        </div>
        <div className='px-4 relative z-0 fansTitle bg-white tablet:bg-transparent border-t-4 border-b-4 border-third tablet:border-0 text-white tablet:pb-[20px]'>
          <h4 data-text="粉絲形象" className="hidden tablet:block relative z-0 fansTitle text-white text-[32px] leading-10 lg:text-[48px] lg:leading-[60px] py-1 text-center tablet:mt-[12px] mb-[18px] lg:tracking-[20px]">粉絲形象</h4>
          <p className='text-[32px] leading-10 text-[rgba(0,0,0,0.3)] mt-4 tablet:mt-0 tablet:mb-2'>麵音好可愛</p>
          <p data-text="- - 母湯" className='fansName text-right text-[40px] leading-[57px] lg:text-[60px]'>- - 母湯</p>
        </div>
      </div>
      <img className='hidden relative z-[1] tablet:block' src={menon} alt="menon" />
      <div className='hidden tablet:block absolute z-0 mt-5 bg-third w-full h-[29px]'></div>
    </div>
  );
}

export { Fans };