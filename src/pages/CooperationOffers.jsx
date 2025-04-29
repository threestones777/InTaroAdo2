import bg from "@/assets/cooperationoffers/bg.png";
import bg2 from "@/assets/smenterprises/bg2.png";
import bg10 from "@/assets/cooperationoffers/bg10.png";
import bg11 from "@/assets/cooperationoffers/bg11.png";
import bg12 from "@/assets/cooperationoffers/bg12.png";
import bg13 from "@/assets/cooperationoffers/bg13.png";
import bg14 from "@/assets/cooperationoffers/bg14.png";
import bg15 from "@/assets/cooperationoffers/bg15.png";
import bg16 from "@/assets/cooperationoffers/bg16.png";
import bg17 from "@/assets/cooperationoffers/bg17.png";
import nm1 from "@/assets/cooperationoffers/nm1.png";
import nm2 from "@/assets/cooperationoffers/nm2.png";
import nm3 from "@/assets/cooperationoffers/nm3.png";
import nm4 from "@/assets/cooperationoffers/nm4.png";
import nm5 from "@/assets/cooperationoffers/nm5.png";
import nm6 from "@/assets/cooperationoffers/nm6.png";
import bg8 from "@/assets/cooperationoffers/bg8.png";
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
const images2 = [nm1, nm2, nm3, nm4, nm5, nm6];
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.cooper_46}`,
    answer: `${i18nKeys.cooper_47}`,
  },
  {
    question: `${i18nKeys.cooper_48}`,
    answer: `${i18nKeys.cooper_49}`,
  },
  {
    question: `${i18nKeys.cooper_50}`,
    answer: `${i18nKeys.cooper_51}`,
  },
  {
    question: `${i18nKeys.cooper_52}`,
    answer: `${i18nKeys.cooper_53}`,
  },
  {
    question: `${i18nKeys.cooper_54}`,
    answer: `${i18nKeys.cooper_55}`,
  },
  {
    question: `${i18nKeys.cooper_56}`,
    answer: `${i18nKeys.cooper_57}`,
  },
];

const mapList2 = (data = []) => {
  return (
    <div className="w-940 mx-auto flex justify-between text-center pt-60 pb-40">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-300 h-350 ${item.color} ${item.text} pl-13 pr-13 pt-44 rounded-16 wow animate__animated animate__fadeInUp`}
          >
            <div className={`w-91 h-91 mx-auto ${item.imgBg} rounded-50`}>
              <img
                src={item.img}
                className="w-64 h-64 mx-auto relative top-14"
              />
            </div>
            <p className="mt-40 mb-6 text-24 leading-24 font-bold">
              {item.title}
            </p>
            <p className="text-14 leading-20 font-normal opacity-80">
              {item.desc}
            </p>
            <div className={`${item.numColor} text-36 mt-20`}>
              <p className="text-36 leading-36 font-black italic">{item.num}</p>
              <p className="text-14 leading-20 font-normal mt-10">
                {i18nKeys.cooper_37}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapList3 = (data = []) => {
  return (
    <div className="w-1120 mx-auto flex justify-between text-left pt-60 pb-121">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-350 ${item.color} rounded-25 pt-26 pl-32 pr-32 pb-32 wow animate__animated animate__fadeInUp`}
          >
            <p className={`mb-40 text-72 leading-72 font-medium ${item.text}`}>
              {item.num}
            </p>
            <p className={`mb-16 text-24 leading-24 font-bold ${item.TTT}`}>
              {item.title}
            </p>
            <p
              className={`h-80 text-14 leading-20 font-normal opacity-80 ${item.text}`}
            >
              {item.btnContent}
            </p>
            <Link
              to={item.path}
              className={`block mt-10 ${
                localStorage.lang === "en" ? "w-180" : "w-145"
              } h-52 ${item.btnBg} p-18 text-center rounded-25 ${
                item.btnText
              } text-18 leading-16 hover:opacity-80 hover:cursor-pointer`}
            >
              <span>{item.desc}</span>
              <img src={item.btnImg} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapList7 = (data = []) => {
  return (
    <div className="w-1186 mx-auto flex justify-between text-center pt-60 pb-40">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-192 h-304 ${item.color} ${item.text} pl-13 pr-13 pt-42 rounded-16 wow animate__animated animate__fadeInUp`}
          >
            <div className={`w-91 h-91 mx-auto ${item.imgBg} rounded-50`}>
              <img
                src={item.img}
                className="w-64 h-64 mx-auto relative top-14"
              />
            </div>
            <p className="mt-34 mb-16 text-24 leading-24 font-bold">
              {item.title}
            </p>
            <p className="h-40 text-14 leading-20 font-normal opacity-80">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function CooperationOffers() {
  return (
    <div>
      <div
        className={`w-full h-540 text-center text-white  wow animate__animated animate__fadeInUp`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`${
            localStorage.lang === "en" ? "w-860" : "w-660"
          } mx-auto text-48 font-bold pt-149`}
        >
          <div dangerouslySetInnerHTML={{ __html: i18nKeys.cooper_1 }} />
        </div>
        <p className={`mx-auto font-normal pt-10 text-24 leading-48`}>
          {i18nKeys.cooper_2}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-206 h-48 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:text-white hover:cursor-pointer mt-20 mx-auto wow animate__animated animate__fadeInUp"
        >
          <span>{i18nKeys.cooper_3}</span>
        </Link>
      </div>

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#000] text-white">
        <div className="w-1000 mx-auto pt-127 text-center">
          <p className="text-48 leading-64 font-boid  wow animate__animated animate__fadeInUp">
            {i18nKeys.cooper_4}
          </p>
          <p className="text-24 leading-32 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.cooper_5}
          </p>
        </div>
        {mapList3([
          {
            num: "01",
            color: "bg-white",
            TTT: "text-[#141416]",
            text: "text-[#000]",
            title: `${i18nKeys.cooper_6}`,
            btnBg: "bg-[#000000]",
            btnText: "text-white",
            btnContent: `${i18nKeys.cooper_7}`,
            btnImg: arrowRight,
            btnHover: "hover:bg-[#FF5C01]",
            desc: `${i18nKeys.cooper_8}`,
            path: "/products/budgetcontrol",
          },
          {
            num: "02",
            color: "bg-[#FF5C01]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_9}`,
            btnBg: "bg-[#fff]",
            btnText: "text-[#FF5C01]",
            btnContent: `${i18nKeys.cooper_10}`,
            btnImg: arrowRightRed,
            btnHover: "hover:bg-[#000]",
            desc: `${i18nKeys.cooper_11}`,
            path: "/products/realtimeinfor",
          },
          {
            num: "03",
            color: "bg-[#FF8541]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_12}`,
            btnBg: "bg-[#fff]",
            btnText: "text-[#000]",
            btnContent: `${i18nKeys.cooper_13}`,
            btnImg: arrowRightBlack,
            btnHover: "hover:bg-[#FF5C01]",
            desc: `${i18nKeys.cooper_14}`,
            path: "/products/processreport",
          },
        ])}
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
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
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-42" : "mt-51"
            }`}
          >
            <p className="text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
              {i18nKeys.cooper_15}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.cooper_16}
            </p>
            <Link
              to="/solution/smenterprises"
              className={`block ${
                localStorage.lang === "en" ? "w-230" : "w-206"
              } h-52 bg-[#141416] p-18 pl-32 text-[#FCFCFD] rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp`}
            >
              <span className="">{i18nKeys.cooper_17}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto bg-[#EDEDED] mt-80 pt-90 text-center rounded-30 pb-67">
        <div className="text-48 leading-64 font-bold text-[#000] wow animate__animated animate__fadeInUp">
          {i18nKeys.cooper_18}
        </div>
        {mapList7([
          {
            img: bg10,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#000]",
            title: `${i18nKeys.cooper_19}`,
            desc: `${i18nKeys.cooper_20}`,
          },
          {
            img: bg11,
            color: "bg-[#FF5C01]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_21}`,
            desc: `${i18nKeys.cooper_22}`,
          },
          {
            img: bg12,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#000]",
            title: `${i18nKeys.cooper_23}`,
            desc: `${i18nKeys.cooper_24}`,
          },
          {
            img: bg13,
            color: "bg-[#FF8541]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_25}`,
            desc: `${i18nKeys.cooper_26}`,
          },
          {
            img: bg14,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#000]",
            title: `${i18nKeys.cooper_27}`,
            desc: `${i18nKeys.cooper_28}`,
          },
        ])}
        <div
          className="w-1180 h-215 mx-auto text-center wow rounded-25 animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg8})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`${
              localStorage.lang === "en" ? "w-650" : "w-550"
            } mx-auto text-18 leading-24 font-normal text-white pt-63`}
          >
            {i18nKeys.cooper_29}
          </div>
          <Link
            to="/resource/recommended"
            className="block mx-auto w-206 h-52 bg-[#fff] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer hover:text-white mt-20 wow animate__animated animate__fadeInUp"
          >
            <span>{i18nKeys.cooper_30}</span>
          </Link>
        </div>
      </div>

      <div className="w-1320 mx-auto bg-[#EDEDED] mt-40 pt-90 text-center rounded-30 pb-67">
        <div className="text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
          {i18nKeys.cooper_31}
        </div>
        <div className="text-16 leading-24 font-normal text-[#000] mt-10 wow animate__animated animate__fadeInUp">
          {i18nKeys.cooper_32}
        </div>
        <div className="w-940 h-136 bg-[#fff] mx-auto rounded-30 mt-58 wow animate__animated animate__fadeInUp">
          <p className="text-24 leading-28 font-bold pt-20">
            {i18nKeys.cooper_33}
          </p>
          <p className="w-620 mx-auto text-16 leading-24 font-normal text-[#000] pt-15">
            {i18nKeys.cooper_34}
          </p>
        </div>
        {mapList2([
          {
            img: bg15,
            color: "bg-white",
            imgBg: "bg-[#000]",
            text: "text-[#000]",
            title: `${i18nKeys.cooper_35}`,
            desc: `${i18nKeys.cooper_36}`,
            num: "10%",
            numColor: "text-[#99C2B0]",
          },
          {
            img: bg16,
            color: "bg-[#FF8948]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_38}`,
            desc: `${i18nKeys.cooper_39}`,
            num: "15%",
            numColor: "text-[#E5E5E5]",
          },
          {
            img: bg17,
            color: "bg-[#FF5C01]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            title: `${i18nKeys.cooper_40}`,
            desc: `${i18nKeys.cooper_41}`,
            num: "20%",
            numColor: "text-[#FFD8AF]",
          },
        ])}
      </div>

      <div className="mt-149">
        <div className="text-[#000]  text-48 leading-64 font-bold text-center wow animate__animated animate__fadeInUp">
          {i18nKeys.cooper_42}
        </div>
        <div
          className={`${
            localStorage.lang === "en" ? "w-800" : "w-550"
          } mx-auto mt-10 text-[#000] text-16 leading-24 font-normal text-center mb-40 wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.cooper_43}
        </div>
        <Partner num="6" width="w-928" w="w-138" h="83" images={images2} />
      </div>

      <div className="bg-[#F0F0F0] w-full mt-80">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.cooper_44}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.cooper_45}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
