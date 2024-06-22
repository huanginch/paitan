import './NameCard.scss';

function NameCard({name, intro} : {name: string, intro: string}) {
    return (
      <div className="bg-white border-third border-[10px] text-center md:text-left rounded-full md:rounded-[30px] text-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 md:left-[25%] py-1 px-4 xs:px-[20px] md:pl-12 z-[100]">
        <h4 data-text={name} className='text-[16px] md:text-[32px]'>{name}</h4>
        <p data-text={intro} className='text-[12px] md:text-[24px] md:pr-20'>{intro}</p>
        </div>
    );
}

export { NameCard };