import TwitterParent from '../../../assets/twitter-parent.svg?react';
import twitterParent from '/src/assets/twitter-parent.svg';

function Profile({ text, twitter, icon }: { text: string, twitter: string, icon: string}) {
  return (
    <div className="flex items-center relative mb-[30px] md:mb-[60px] px-[60px] md:px-[40px]">
      <TwitterParent className="md:hidden absolute z-10 left-[50px]" />
      <div className="flex flex-col text-sm leading-5 text-center w-full">
        <p className="text-third md:text-[18px] lg:text-[36px] md:mb-[17px] md:pr-[50px]">
          {text}
        </p>
        <a target="_blank" className="bg-third text-white md:text-[16px] lg:text-[24px] rounded-full py-1 pl-2 border-2 border-third focus:bg-white focus:text-third hover:opacity-80" href={`https://www.x.com/${twitter}`}>
          <img className="hidden md:inline w-[25px] mr-1 lg:mr-[22px]" src={twitterParent} alt="twitter" />
          {twitter}</a>
      </div>
      <img className="absolute w-[70px] md:w-[75px] right-[10%] md:right-[5%] lg:w-[120px] lg:right-[2%]" src={icon} alt="icon" />
    </div>
  )
}

export { Profile }