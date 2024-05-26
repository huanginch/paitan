import { useState } from "react";
import Modal from "../../Components/Modal";

import rules from "/src/assets/二創規範.jpg";
import rulesIcon from "/src/assets/rules.png";

function Rules() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }



  return (
    <div className="bg-Rules md:bg-Rules-PC bg-center bg-no-repeat bg-cover flex px-[36px] md:px-[48px] pt-[29px] pb-[32px] justify-center items-end">
      <img onClick={() => setOpenModal(true)} className="w-[171px] h-[227px] md:w-[50%] tablet:w-[40%] md:h-auto md:ml-[20px] tablet:ml-[80px]" src={rules} alt="二創規範" />
      <div>
        <img className="w-[116px] md:w-[225px] lg:w-[65%]" src={rulesIcon} alt="rules" />
        <div className="mb-[6px] md:mb-[24px] tablet:mb-[28px] bg-white border-2 border-l-0 border-primary tablet:border-[5px] tablet:border-l-0 rounded-r-[24px] pl-1 py-1 pr-[18px] md:pl-4 md:py-4 md:pr-[20px] tablet:w-[85%]">
          <p className="text-[10px] leading-[15px] md:text-[24px] md:leading-[26px] tablet:text-[30px] tablet:leading-[40px]">歡迎大家分享自己的創作( 繪圖、影片剪輯 等等)<br/>相關tag可以參考左邊規範~</p>
        </div>
        <div className="bg-white border-2 border-l-0 border-primary tablet:border-[5px] tablet:border-l-0 rounded-r-[24px] pl-1 pt-[1px] pr-[18px] md:pl-4 md:py-4 md:pr-[20px] tablet:w-[85%]">
          <p className="text-[10px] leading-[15px] md:text-[24px] md:leading-[26px] tablet:text-[30px] tablet:leading-[40px]">請遵守所示之規範<br/>不要皮，請尊重他人</p>
        </div>
      </div>

      <Modal open={openModal} onClose={handleClose} img={rules} />
    </div>
  );
}

export { Rules };