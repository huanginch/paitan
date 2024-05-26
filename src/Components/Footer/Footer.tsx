import './Footer.scss';

function Footer() {
  return (
    <footer className="bg-third text-text text-center text-[15px] leading-[22px] py-3 md:flex md:justify-between md:flex-row-reverse md:px-[55px] tablet:text-[20px] tablet:leading-[24px] tablet:py-4">
      <p>
        Copyright© 2024 Code: <span data-text="int" className="underline"><a target="_blank" href="https://github.com/huanginch">int</a></span> / Design: <span data-text="Mitto" className="underline"><a target="_blank" href="https://x.com/mitto_artwork">Mitto</a></span>
      </p>
      <p>圖片版權為繪師所有，僅用於網站呈現</p>
    </footer>
  );
}

export { Footer };