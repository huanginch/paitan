import StaffCard from "./StaffCard/StaffCard";

import weiwei from '/src/assets/大尾尾.png';
import anders from '/src/assets/姆斯.png';
import derder from '/src/assets/ㄉㄉ.png';
import endorisa from '/src/assets/遠藤.png';

const staffInfo = [
  {
    name: '大尾尾',
    dc: 'weiweida',
    img: weiwei,
    msg: '神秘阿尾'
  },
  {
    name: '姆斯',
    dc: 'anders_mus',
    img: anders,
    msg: '工具M'
  },
  {
    name: 'ㄉㄉ',
    dc: 'derder_tc',
    img: derder,
    msg: <img className="inline-block mx-auto align-top m-[-10px]" src="/src/assets/可達鴨.png" alt="duck" />
  },
  {
    name: '遠藤',
    dc: 'endorisa0825',
    img: endorisa,
    msg: '水蜜桃罐頭'
  }
];

function Staff() {
  return (
    <>
      <div className="md:bg-Staff bg-center bg-contain flex flex-col md:flex-row flex-wrap items-center justify-center">
        {staffInfo.map((staff, idx) => {
          return (
            <StaffCard
              key={`staff-${idx}`}
              staffDC={staff.dc}
              staffImg={staff.img}
              staffName={staff.name}
              staffMsg={staff.msg}
            />
          )
        })}
      </div>
    </>
  )
}

export { Staff }