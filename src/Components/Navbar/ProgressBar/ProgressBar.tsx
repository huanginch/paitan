import { useContext, useEffect, useState } from "react";
import DataContext from "../../../stores/Context";

import menon from "/src/assets/Menon.png";

function ProgressBar({progress}: { progress: number}) {
  const menonPosition = progress - 2;
  const [progressBarSize, setProgressBarSize] = useState<number>(progress)
  const { appSize } = useContext(DataContext);

  useEffect(() => {
    if (appSize === "Mobile" || appSize === "Tablet") {
      setProgressBarSize(100);
    } else {
      setProgressBarSize(progress);
    }
  }, [appSize, progress]);


  return (
    <div className="relative flex content-center w-screen bg-[rgba(255,184,0,0.18)] h-[8px]">
      <div className="transition-all ease-linear duration-200 h-[8px] bg-primary lg:bg-[#FF9900]" style={{ width: `${progressBarSize}%`}}>
      </div>
      <img className="hidden lg:block transition-all ease-linear duration-200 absolute w-[40px] h-[40px] bottom-[-15px]" src={menon} alt="Menon" style={{ left: `${menonPosition}%` }}/>
    </div>
  );
}

export { ProgressBar };