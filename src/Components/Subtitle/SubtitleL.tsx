import './Subtitle.scss';

function SubtitleL({text, img}: {text: string, img: string}) {
    return (
      <div className='relative w-[30%] mb-[300px] md:mb-[50px] PC:mb-[100px] border-white border-b-2 md:border-b-4 lg:border-b-8 shadow-subtitle'>
        <h3 data-text={text} className="pl-[10px] md:pl-0 text-left md:text-center text-[16px] leading-[24px] md:text-xl lg:text-3xl text-primary drop-shadow-title pb-[5px] md:pb-3 lg:mb-2">
          {text}
        </h3>
        <img className='bg-white absolute left-full top-1/2 rounded-full border-white border-[3px] md:border-4 lg:border-8 w-[52px] h-[52px] md:w-[84px] md:h-[84px] lg:w-[125px] lg:h-[125px] shadow-icon z-10 -translate-x-1/2 -translate-y-1/2' src={img} alt="actor" />
      </div>
    );
}

export default SubtitleL;