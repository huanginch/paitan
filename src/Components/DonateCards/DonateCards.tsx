import './DonateCards.scss';

// function iOS() {
//   return [
//     'iPad Simulator',
//     'iPhone Simulator',
//     'iPod Simulator',
//     'iPad',
//     'iPhone',
//     'iPod'
//   ].includes(navigator.platform)
//     // iPad on iOS 13 detection
//     || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
// }

function DonateCards({ link, img, cardName, text }: { link:string, img: string, cardName: string, text: string }) {

  // const [isiOS, setIsiOS] = useState(false);
  // // const style = {
  // //   lineHeight: isiOS ? '68px' : '38px',
  // //   fontSize: isiOS ? '64px' : '28px',
  // //   paddingTop: isiOS ? '68px' : '38px',
  // //   paddingBottom: isiOS ? '68px' : '38px',
  // //   paddingRight: isiOS ? '68px' : '38px',
  // // }

  // if (iOS()) {
  //   //make the cardname line height bigger for iOS
  //   setIsiOS(true);
  // }

  return (
    <a target="_blank" href={link} className="donate-card flex hover:opacity-50 transition-all duration-500 ease-in-out mx-auto mb-[36px] md:mb-[80px] tablet:mb-[123px]">
      <div className="w-[65px] md:w-[63px] lg:w-[145px] h-full flex flex-col items-center justify-center">
        <div className='w-[65px] md:w-[63px] lg:w-[145px] card-name bg-white border-[5px] tablet:border-[13px] border-third rounded-t-[81px] flex-grow flex flex-col justify-center'>
          <p className="w-full text-4xl tablet:text-[64px] leading-[68px] tablet:leading-[68px] text-primary pt-[21px] pb-[5px] ml-[10px] md:ml-[15px] tablet:mr-[25px]">{cardName}</p>
        </div>
        <div className="card-bottom w-[65px] md:w-[63px] lg:w-[145px] h-[29px] tablet:h-[48px] bg-third"></div>
      </div>
      <div className="flex flex-col">
        <img className="w-[132px] h-[132px] mr-[29px] tablet:mr-[58px] tablet:w-[250px] tablet:h-[250px]" src={img} alt={cardName} />
        <div className="card-text bg-white border-third border-[3px] tablet:border-[10px] border-l-0 tablet:border-l-0 rounded-r-[37px]">
          <p className="text-donate text-[13px] tablet:text-[28px] tablet:leading-[38px] px-[3px] tablet:px-[12px] py-[2px] leading-[20px]">{text}</p>
        </div>
      </div>
    </a>
  );
}

export { DonateCards };