import bg from "@/assets/budgetcontrol/bg.png";
import bg2 from "@/assets/budgetcontrol/bg2.png";
import bg3 from "@/assets/budgetcontrol/bg3.png";
import bg4 from "@/assets/budgetcontrol/bg4.png";
import bg5 from "@/assets/budgetcontrol/bg5.png";
import bg6 from "@/assets/budgetcontrol/bg6.png";
import bg7 from "@/assets/budgetcontrol/bg7.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import arrowRightRed from "@/assets/arrow-right-red.png";
import { Link } from "react-router-dom";
import Topic from "@/components/Topic";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Partner from "@/components/Partner";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
const images = [partner1, partner2, partner3, partner4, partner5];
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.control_21}`,
    answer: `${i18nKeys.control_22}`,
  },
  {
    question: `${i18nKeys.control_23}`,
    answer: `${i18nKeys.control_24}`,
  },
  {
    question: `${i18nKeys.control_25}`,
    answer: `${i18nKeys.control_26}`,
  },
  {
    question: `${i18nKeys.control_27}`,
    answer: `${i18nKeys.control_28}`,
  },
  {
    question: `${i18nKeys.control_29}`,
    answer: `${i18nKeys.control_30}`,
  },
  {
    question: `${i18nKeys.control_31}`,
    answer: `${i18nKeys.control_32}`,
  },
];

const mapList3 = (data = []) => {
  return (
    <div className="w-1186 mx-auto flex justify-between text-center pt-70 pb-85">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-274 h-385 ${item.color} ${item.text} pl-32 pr-42 pt-50 rounded-25 wow animate__animated animate__fadeInUp`}
          >
            <img src={item.img} className="w-64 h-64 mx-auto" />
            <p className="mt-34 mb-16 text-24 leading-24 font-bold">
              {item.title}
            </p>
            <p className="h-40 text-14 leading-20 font-normal">{item.desc}</p>
            <Link
              to={item.path}
              className={`block mx-auto mt-60 ${
                localStorage.lang === "en" ? "w-180" : "w-145"
              } h-52 ${item.btnBg} p-18 text-center rounded-25 ${
                item.btnText
              } text-18 leading-16 ${item.btnHover} hover:cursor-pointer`}
            >
              <span>{item.btnContent}</span>
              <img src={item.btnImg} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        );
      })}
      <div
        className="w-274 h-385 pl-20 pr-20 pt-50 rounded-25 wow animate__animated animate__fadeInUp"
        style={{
          backgroundImage: `url(${bg7})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default function BudgetControl() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.control_1}
        desc={i18nKeys.control_2}
        path="/resource/recommended"
        btnText={i18nKeys.control_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#EDEDED]">
        <div>
          <div className="pt-80 text-center text-[#141416] text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
            {i18nKeys.control_4}
          </div>
          <div className="pt-20 text-center text-[#141416] text-24 leading-24 font-normal wow animate__animated animate__fadeInUp">
            {i18nKeys.control_5}
          </div>
          {mapList3([
            {
              img: bg4,
              color: "bg-white",
              text: "text-[#000]",
              title: `${i18nKeys.control_6}`,
              btnBg: "bg-[#000000]",
              btnText: "text-white",
              btnContent: `${i18nKeys.control_8}`,
              btnImg: arrowRight,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.control_7}`,
              path: "/products/budgetcontrol",
            },
            {
              img: bg5,
              color: "bg-[#FF5C01]",
              text: "text-[#fff]",
              title: `${i18nKeys.control_9}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#FF5C01]",
              btnContent: `${i18nKeys.control_11}`,
              btnImg: arrowRightRed,
              btnHover: "hover:bg-[#000]",
              desc: `${i18nKeys.control_10}`,
              path: "/products/realtimeinfor",
            },
            {
              img: bg6,
              color: "bg-[#FF8541]",
              text: "text-[#fff]",
              title: `${i18nKeys.control_12}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#666666]",
              btnContent: `${i18nKeys.control_14}`,
              btnImg: arrowRightBlack,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.control_13}`,
              path: "/products/processreport",
            },
          ])}
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justify-between">
        <div className="w-700 h-412">
          <div className="w-550 h-220 mx-auto mt-122">
            <p className="w-550 text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.control_15}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.control_16}
            </p>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto h-412 rounded-35 flex justifu-between mt-80">
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div className="w-550 h-220 mx-auto mt-87">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.control_17}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.control_18}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full mt-120">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.control_19}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.control_20}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
