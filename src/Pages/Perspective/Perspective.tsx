import { useState } from "react";
import Modal from "../../Components/Modal";

import perspective from "/src/assets/三視圖.png";

function Perspective() {

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <div className="mb-[35px] mx-4">
      <img className="PC:w-[80%] PC:mx-auto" onClick={() => setOpenModal(true)} src={perspective} alt="perspective" />

      <Modal open={openModal} onClose={handleClose} img={perspective} />
    </div>
  );
}

export { Perspective };