import './Subtitle.scss';

function SubtitleR({text, img}: {text: string, img: string}) {
    return (
      <div className='flex justify-end w-full relative mb-[72px]'>
        <img className='bg-white absolute right-[60%] xs:right-[50%] md:right-[40%] lg:right-[30%] -top-[50%] md:-top-[25%] lg:-top-[10%] rounded-full border-white border-[10px] w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] shadow-icon z-10' src={img} alt="actor" />
        <h3 data-text={text} className="border-white border-b-4 lg:border-b-8 shadow-subtitle pr-[50px] md:pr-0 lg:py-[12px] w-2/3 xs:w-[60%] md:w-[45%] lg:w-[30%] text-right md:text-center text-[22px] md:text-xl lg:text-3xl text-primary drop-shadow-title pb-2 md:pb-3 lg:mb-2">
          {text}
        </h3>
      </div>
    );
}

export default SubtitleR;