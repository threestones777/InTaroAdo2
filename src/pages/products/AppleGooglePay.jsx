import bg from "@/assets/applegooglepay/bg.png";
import bg1 from "@/assets/applegooglepay/bg1.png";
import bg2 from "@/assets/applegooglepay/bg2.png";
import bg3 from "@/assets/applegooglepay/bg3.png";
import bg4 from "@/assets/applegooglepay/bg4.png";
import bg5 from "@/assets/applegooglepay/bg5.png";
import bg6 from "@/assets/applegooglepay/bg6.png";
import bg7 from "@/assets/applegooglepay/bg7.png";
import bg8 from "@/assets/applegooglepay/bg8.png";
import bg9 from "@/assets/applegooglepay/bg9.png";
import arrowRight from "@/assets/arrow-right.png";
import { Link } from "react-router-dom";
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
    question: `${i18nKeys.apple_15}`,
    answer: `${i18nKeys.apple_16}`,
  },
  {
    question: `${i18nKeys.apple_17}`,
    answer: `${i18nKeys.apple_18}`,
  },
  {
    question: `${i18nKeys.apple_19}`,
    answer: `${i18nKeys.apple_20}`,
  },
  {
    question: `${i18nKeys.apple_21}`,
    answer: `${i18nKeys.apple_22}`,
  },
  {
    question: `${i18nKeys.apple_23}`,
    answer: `${i18nKeys.apple_24}`,
  },
  {
    question: `${i18nKeys.apple_25}`,
    answer: `${i18nKeys.apple_26}`,
  },
];

const mapList3 = (data = []) => {
  return (
    <div className="w-1184 mx-auto flex justify-between pt-75 pb-75">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-580 h-351 pt-37 pl-40 pr-40 bg-white rounded-30 wow animate__animated animate__fadeInUp`}
          >
            <div className="w-full h-100">
              <div className="w-100 h-100 rounded-50 bg-[#F0F0F0] float-right">
                <img
                  src={item.img}
                  className="w-48 h-48 mx-auto relative top-26"
                />
              </div>
            </div>
            <p className="mt-20 mb-20 text-36 leading-36 font-bold text-[#000]">
              {item.title}
            </p>
            <hr className="w-501 border-t-1 mb-20" />
            <p className="text-14 leading-24 font-normal text-[#000]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList4 = (data = []) => {
  return (
    <div className="w-984 mx-auto flex justify-between pt-75 pb-75">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-140 h-450  wow animate__animated animate__fadeInUp`}
          >
            <div
              className="w-140 h-285"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <img
              src={item.num}
              className="w-65 h-65 mx-auto mt-28 z-50 bg-[#f5fefe]"
            />
            <p className="w-225 mx-auto mt-22 relative right-58 text-[#000]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function AppleGooglePay() {
  return (
    <div>
      <div
        className="w-full h-540 relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-155 absolute left-[10%]">
          <p className="w-540 text-48 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.apple_1}
          </p>
          <p className="w-540 text-48 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.apple_01}
          </p>
          <p
            className={`${
              localStorage.lang === "en" ? "w-400" : ""
            } text-24 leading-48 font-normal pt-10  wow animate__animated animate__fadeInUp`}
          >
            {i18nKeys.apple_2}
          </p>
          <Link
            to="/resource/recommended"
            className="block text-[#FCFCFD] w-206 h-52 bg-[#FF5C01] p-18 text-center rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20 wow animate__animated animate__fadeInUp"
          >
            <span className="">{i18nKeys.apple_3}</span>
            <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
          </Link>
        </div>
      </div>

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-ful bg-[#F0F0F0]">
        {mapList3([
          {
            img: bg1,
            title: `${i18nKeys.apple_4}`,
            desc: `${i18nKeys.apple_5}`,
          },
          {
            img: bg2,
            title: `${i18nKeys.apple_6}`,
            desc: `${i18nKeys.apple_7}`,
          },
        ])}
      </div>

      <div
        className="w-full h-830 text-[#141416] text-center"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-48 leading-64 font-bold pt-90  wow animate__animated animate__fadeInUp">
          {i18nKeys.apple_8}
        </div>
        <div className="text-24 leading-24 font-normal pt-20  wow animate__animated animate__fadeInUp">
          {i18nKeys.apple_9}
        </div>
        {mapList4([
          {
            img: bg4,
            num: bg7,
            desc: `${i18nKeys.apple_10}`,
          },
          {
            img: bg5,
            num: bg8,
            desc: `${i18nKeys.apple_11}`,
          },
          {
            img: bg6,
            num: bg9,
            desc: `${i18nKeys.apple_12}`,
          },
        ])}
        <div className="w-780 mx-auto h-100 flex justify-between relative bottom-180">
          <hr className="z-10 w-358 border-t-2 border-[#141416]" />
          <hr className="z-10 w-358 border-t-2 border-[#141416]" />
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.apple_13}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.apple_14}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
