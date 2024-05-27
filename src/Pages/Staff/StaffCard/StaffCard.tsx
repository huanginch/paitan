import './StaffCard.scss';

import discord from '/src/assets/discord.svg';
import staffbg from '/src/assets/staff對話框.png';

function StaffCard({staffDC, staffImg, staffName, staffMsg}:{staffDC: string, staffImg: string, staffName: string, staffMsg: string | JSX.Element}) {
  return (
    <div className="bg-Staff-Card bg-no-repeat bg-top bg-clip-border bg-cover tablet:bg-contain relative w-[300px] h-[250px] tablet:w-[400px] tablet:h-[450px] md:mx-5 lg:mx-[80px] mb-[44px] md:mb-[60px] tablet:mb-[120px] z-0">
      <div className="relative bg-[rgba(252,211,107,0.58)] mt-[30px] max-w-[80%] rounded-r-lg ">
        <img className="w-[50px] h-[50px] tablet:w-[80px] tablet:h-[80px] absolute left-[12%] lg:left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2" src={discord} alt="discord" />
        <p data-text={staffDC} className="staffDC text-white tablet:text-2xl py-1 ml-14 tablet:ml-24">{staffDC}</p>
      </div>
      <img className="relative z-[-2] w-[120px] h-[120px] tablet:w-[300px] tablet:h-[300px] mx-auto mb-[45px] md:mt-[10px] md:mb-[33px]" src={staffImg} alt="staff" />
      <img className='absolute -bottom-[20px] z-[-1]' src={staffbg} alt="對話框" />
      <p data-text={`${staffName} :`} className="staffName text-center text-2xl tablet:text-[40px] text-white">{staffName} : {
        typeof staffMsg === 'string' ? <span className="text-third">{staffMsg}</span> : staffMsg}
      </p>
    </div>
  )
}

export default StaffCard;