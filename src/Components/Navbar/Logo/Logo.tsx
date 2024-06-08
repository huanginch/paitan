import './Logo.scss';

import menon from "/src/assets/Menon.png";

function Logo() {

  return (
    <div className="logo lg:hover:bg-primary lg:focus:bg-primary lg:max-w-[500px] lg:border-[5px] bg-white lg:border-primary lg:rounded-r-[40px] relative z-10 w-auto lg:w-[30vw] PC:w-[50vw]">
      <a href="#" className='flex items-center lg:block'>
        <img className="mr-2 block lg:hidden w-[38px] h-[38px]" src={menon} alt="Menon" />
        <h1 className="lg:rounded-r-[40px] lg:text-[22px] lg:py-1 lg:pl-1 PC:pl-8 text-white transition-all ease-linear duration-500">麵音白湯  MenonPaitan</h1>
      </a>
    </div>
  )
}

export { Logo };