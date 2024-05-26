import './Subtitle.scss';

function SubtitleL({text, img}: {text: string, img: string}) {
    return (
      <div className='relative max-w-72 md:max-w-80 lg:max-w-96 mb-[350px] md:mb-[80px]'>
        <h3 data-text={text} className="border-white border-b-4 lg:border-b-8 shadow-subtitle lg:py-[12px] pl-[50px] text-left lg:text-center text-[22px] md:text-xl lg:text-3xl text-primary drop-shadow-title pb-2 md:pb-3 lg:mb-2">
          {text}
        </h3>
        <img className='bg-white absolute -right-[10%] lg:-right-[20%] -top-[50%] md:-top-[25%] lg:-top-[10%] rounded-full border-white border-[10px] w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] shadow-icon' src={img} alt="actor" />
      </div>
    );
}

export default SubtitleL;