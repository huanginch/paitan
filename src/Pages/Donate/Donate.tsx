import DonateCards from "../../Components/DonateCards";
import donate from "/src/assets/donate.png";
import shop from "/src/assets/shop.png";

const donates = [
  {
    link: "https://deerdonate.herokuapp.com/donation/PaitanOfficial",
    img: donate,
    cardName: "綠界",
    text: "抖內主播痔瘡醫藥費"
  },
  {
    link: "https://paitan-official.cashier.ecpay.com.tw/",
    img: shop,
    cardName: "周邊",
    text: "來湯黑撿小垃圾~"
  }
]

function Donate() {
    return (
        <div className="flex flex-wrap">
            {
                donates.map((donate, i) => {
                    return (
                        <DonateCards
                          key={donate.cardName + i}
                          link={donate.link}
                          img={donate.img}
                          cardName={donate.cardName}
                          text={donate.text} />
                    );
                })
            }
        </div>
    );
}

export { Donate };