import './Subtitle.scss';

function SubtitleR({text, img}: {text: string, img: string}) {
    return (
      <div className='float-end w-[30%] relative mb-[72px] border-white border-b-2 md:border-b-4 lg:border-b-8 shadow-subtitle'>
        <img className='bg-white absolute -left-[10%] top-1/2 rounded-full border-white border-[3px] md:border-4 lg:border-8 w-[52px] h-[52px] md:w-[84px] md:h-[84px] lg:w-[125px] lg:h-[125px] shadow-icon z-10 -translate-x-1/2 -translate-y-1/2' src={img} alt="actor" />
        <h3 data-text={text} className="pr-[5px] mb-[5px] lg:mb-2 md:pr-0 w-full text-right md:text-center text-[16px] leading-[24px] md:text-xl lg:text-3xl text-primary drop-shadow-title">
          {text}
        </h3>
      </div>
    );
}

export default SubtitleR;