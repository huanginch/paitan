import './DonateCards.scss';

function DonateCards({ link, img, cardName, text }: { link:string, img: string, cardName: string, text: string }) {
  return (
    <a target="_blank" href={link} className="donate-card flex hover:opacity-50 transition-all duration-500 ease-in-out mx-auto mb-[36px] md:mb-[80px] tablet:mb-[123px]">
      <div className="w-[65px] md:w-[63px] lg:w-[145px] h-full flex flex-col items-center justify-center">
        <div className="w-full card-name bg-white border-[5px] tablet:border-[13px] border-third rounded-t-[81px] flex-grow flex items-center">
          <h5 className="text-4xl tablet:text-[64px] text-primary pt-[21px] pb-[5px]">{cardName}</h5>
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