import { useState } from "react";

function MediaIcons({link, Icon, ActiveIcon}: {link: string, Icon: string, ActiveIcon: string}) {

  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [focusedLink, setFocusedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleLinkFocus = (link: string) => {
    setFocusedLink(link);
  };

  const handleLinkBlur = () => {
    setFocusedLink(null);
    setActiveLink(null);
  };

  const getIcon = (link: string, defaultIcon: string, activeIcon: string) => {
    if (activeLink === link || focusedLink === link) {
      return activeIcon;
    }
    return defaultIcon;
  };


  return (
    <a target='_blank'
      onClick={() => handleLinkClick(link)}
      onFocus={() => handleLinkFocus(link)}
      onBlur={handleLinkBlur}
      href={link} className='hover:opacity-50 transition-all duration-300'>
      <img className='w-[35px] h-[35px] md:w-[65px] md:h-[65px] tablet:w-[80px] tablet:h-[80px]' src={getIcon(link, Icon, ActiveIcon)} alt={link} />
    </a>
  );
}

export default MediaIcons;