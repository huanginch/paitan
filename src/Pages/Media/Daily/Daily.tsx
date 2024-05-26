import MediaIcon from '../MediaIcons';

import Arrow from '../../../assets/arrow.svg?react';
import FB from '../../../assets/fb.svg';
import FBActive from '../../../assets/fb-active.svg';
import Twitter from '../../../assets/twitter.svg';
import TwitterActive from '../../../assets/twitter-active.svg';
import Thread from '../../../assets/thread.svg';
import ThreadActive from '../../../assets/thread-active.svg';
import laugh from '/src/assets/laugh.png';

function Daily({className}: {className: string}) {

  return (
    <div className={`${className} flex border-b-4 md:border-b-8 border-primary`}>
      <img className="w-[123px] h-[123px] md:w-[200px] md:h-[200px] mt-[-15px] md:mt-[-45px]" src={laugh} alt="laugh" />
      <div className="bg-white/[.66] flex-grow pr-2">
        <h5 className="pl-2 pt-2 md:pl-6 md:pt-6 text-primary text-base md:text-2xl tablet:text-4xl">日常奇遇 & 爛笑話都來這~~</h5>
        <div className='flex items-center justify-between'>
          <Arrow className='w-[100px] md:w-[150px] tablet:w-[300px]' />
          <div className='flex flex-grow justify-evenly'>
            <MediaIcon link="https://www.facebook.com/PaitanOfficial?locale=zh_TW" Icon={FB} ActiveIcon={FBActive}/>
            <MediaIcon link="https://x.com/paitan6111" Icon={Twitter} ActiveIcon={TwitterActive} />
            <MediaIcon link="https://www.threads.net/@menonpaitan_official" Icon={Thread} ActiveIcon={ThreadActive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Daily };