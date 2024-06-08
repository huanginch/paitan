
import './NavbarLink.scss';

function NavbarLink({ text, link }: { text: string, link: string }){
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (!element) return;

    // the position should cut the navbar height
    const position = element.getBoundingClientRect()?.top + window.scrollY - 120;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }

  return (
    <a data-text={text} href={link} onClick={handleClick} type="button" className="navbarlink block w-full lg:border-[5px] lg:border-white lg:rounded-[40px] lg:bg-primary lg:px-[10px] PC:px-8 lg:py-1 lg:shadow-button lg:text-[24px] lg:text-white lg:hover:text-primary lg:hover:border-primary lg:hover:bg-white lg:focus:text-primary lg:focus:border-primary lg:focus:bg-white transition-all ease-linear duration-200">
      {text}
    </a>
  )
}

export default NavbarLink;