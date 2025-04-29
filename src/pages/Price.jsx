import bg from "@/assets/recommended/bg.png";
import bg1 from "@/assets/price/bg1.png";
import bg2 from "@/assets/price/bg2.png";
import bg3 from "@/assets/price/bg3.png";
import bg4 from "@/assets/price/bg4.png";
import bg5 from "@/assets/price/bg5.png";
import bg6 from "@/assets/price/bg6.png";
import bg7 from "@/assets/price/bg7.png";
import bg8 from "@/assets/price/bg8.png";
import bg9 from "@/assets/price/bg9.png";
import bg10 from "@/assets/price/bg10.png";
import bg11 from "@/assets/price/bg11.png";
import bg12 from "@/assets/price/bg12.png";
import bg13 from "@/assets/price/bg13.png";
import bg14 from "@/assets/price/bg14.png";
import bg15 from "@/assets/price/bg15.png";
import bg16 from "@/assets/price/bg16.png";
import bg17 from "@/assets/price/bg17.png";
import bg18 from "@/assets/price/bg18.png";
import bg19 from "@/assets/price/bg19.png";
import bg20 from "@/assets/price/bg20.png";
import bg21 from "@/assets/price/bg21.png";
import bg22 from "@/assets/price/bg22.png";
import bg23 from "@/assets/price/bg23.png";
import bg24 from "@/assets/price/bg24.png";
import bg25 from "@/assets/price/bg25.png";
import bg26 from "@/assets/price/bg26.png";
import bg27 from "@/assets/price/bg27.png";
import bg28 from "@/assets/price/bg28.png";
import bg29 from "@/assets/price/bg29.png";
import bg30 from "@/assets/price/bg30.png";
import bg31 from "@/assets/price/bg31.png";
import bg32 from "@/assets/price/bg32.png";
import bg33 from "@/assets/price/bg33.png";
import bg34 from "@/assets/price/bg34.png";
import bg35 from "@/assets/price/bg35.png";
import bg36 from "@/assets/price/bg36.png";
import bg37 from "@/assets/price/bg37.png";
import bg38 from "@/assets/price/bg38.png";
import bg39 from "@/assets/price/bg39.png";
import bg40 from "@/assets/price/bg40.png";
import bg41 from "@/assets/price/bg41.png";
import fire from "@/assets/price/fire.png";
import ok from "@/assets/price/ok1.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useState } from "react";
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.price_117}`,
    answer: `${i18nKeys.price_118}`,
  },
  {
    question: `${i18nKeys.price_119}`,
    answer: `${i18nKeys.price_120}`,
  },
  {
    question: `${i18nKeys.price_121}`,
    answer: `${i18nKeys.price_122}`,
  },
  {
    question: `${i18nKeys.price_123}`,
    answer: `${i18nKeys.price_124}`,
  },
  {
    question: `${i18nKeys.price_125}`,
    answer: `${i18nKeys.price_126}`,
  },
  {
    question: `${i18nKeys.price_127}`,
    answer: `${i18nKeys.price_128}`,
  },
];

const mapList3 = (data = []) => {
  return (
    <div className="w-1242 mx-auto flex justify-between pt-55">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-400 h-676 rounded-25 ${item.z50} relative wow animate__animated animate__fadeInUp`}
          >
            <p
              className="pt-15 pl-35 text-[#FCFCFD] text-20 leading-16 font-normal"
              style={{
                display: item.isShow ? "block" : "none",
              }}
            >
              <img src={fire} className="w-32 h-32 mr-10 inline-block" />
              <span className="relative top-5 inline-block">
                {i18nKeys.price_3}
              </span>
            </p>
            <div
              className={`w-full p-25 pt-35 pl-35 h-620 ${item.color} ${item.text} absolute bottom-0 right-0 rounded-25`}
            >
              <p className="text-36 leading-48 font-medium">{item.title}</p>
              <p className="mt-5">
                <span className="text-18 leading-48 font-black">HKD</span>
                <span className="text-48 leading-48 font-bold ml-10 mr-10">
                  {item.num}
                </span>
                <span className="text-18 leading-24 font-normal">
                  {i18nKeys.price_5}
                </span>
              </p>
              <p className="mt-10 text-16 leading-24 font-normal">
                {item.desc}
              </p>
              <Link
                to="/resource/recommended"
                className={`block mt-20 ${
                  localStorage.lang === "en" ? "w-180" : "w-145"
                } h-52 ${item.btnBg} p-18 text-center rounded-25 ${
                  item.btnText
                } text-18 leading-16 hover:opacity-80 hover:cursor-pointer`}
              >
                <span>{item.btnContent}</span>
              </Link>
              <p className="mt-20 mb-10 text-16 leading-24 font-normal line-clamp-2">
                {item.desc1}
              </p>
              {item.sub.map((su, no) => {
                return (
                  <p key={no} className="mt-10">
                    <span className={`inline-block mr-25 ${su.bg}`}>
                      <i
                        className="bi bi-check-lg"
                        style={{
                          fontSize: "26px",
                        }}
                      ></i>
                    </span>
                    <span
                      className={`text-18 leading-24 font-normal relative bottom-4`}
                    >
                      {su.t1}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapList7 = (data = []) => {
  return (
    <div className="w-1240 mx-auto h-98 relative top-50 flex justify-between">
      <div
        className={`w-304 h-98 rounded-25 relative text-center wow animate__animated animate__fadeInUp`}
      >
        <p className="mt-29 text-30 leading-40 font-normal">
          {i18nKeys.price_37}
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-304 h-98 rounded-25 relative text-center wow animate__animated animate__fadeInUp`}
          >
            <p className="text-30 leading-40 font-normal">{item.title}</p>
            <p className="mt-10">
              <span className="text-24 leading-48 font-black">HKD</span>
              <span className="text-48 leading-48 font-black ml-10 mr-10">
                {item.price}
              </span>
              <span className="text-18 leading-24 font-normal">
                {i18nKeys.price_5}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList8 = (img = "", title = "", desc = "", data = []) => {
  return (
    <div className="w-1240 mx-auto h-110 mt-10 flex justify-between text-left border-b-1 border-[#444444] wow animate__animated animate__fadeInUp">
      <div className={`w-304 h-110 relative`}>
        <p className="flex">
          <img src={img} className="w-36 h-36" />
          <span className="ml-15 text-18 leading-22 font-medium relative top-7">
            {title}
          </span>
        </p>
        <p className="w-255 mt-10 text-12 leading-18 font-normal opacity-60">
          {desc}
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-255 h-110 rounded-25 relative text-center wow animate__animated animate__fadeInUp`}
          >
            <div
              className="mt-15 w-244 mx-auto h-70 rounded-50 border-1 border-[#666] flex justify-between"
              style={{
                display: item.isShow ? "block" : "none",
              }}
            >
              <span className="text-46 relative right-35 text-[#fff] hover:cursor-pointer hover:text-white">
                <i className="bi bi-dash"></i>
              </span>
              <span className="text-24 relative bottom-8 font-bold text-[#666]">
                {item.num}
              </span>
              <span className="text-46 relative left-35 text-[#fff] hover:cursor-pointer hover:text-white">
                <i className="bi bi-plus"></i>
              </span>
            </div>
            <p
              className="text-24 font-normal relative top-35"
              style={{
                display: !item.isShow ? "block" : "none",
              }}
            >
              {i18nKeys.price_43}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList9 = (img = "", title = "", desc = "", data = []) => {
  return (
    <div className="w-1240 mx-auto h-110 mt-10 flex justify-between text-left border-b-1 border-[#444444] wow animate__animated animate__fadeInUp">
      <div className={`w-304 h-110 relative`}>
        <p className="flex">
          <img src={img} className="w-36 h-36" />
          <span className="ml-15 text-18 leading-22 font-medium relative top-7">
            {title}
          </span>
        </p>
        <p className="w-255 mt-10 text-12 leading-18 font-normal opacity-60">
          {desc}
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-255 h-110 rounded-25 relative text-center wow animate__animated animate__fadeInUp`}
          >
            <img
              style={{
                display: item.isShow ? "block" : "none",
              }}
              src={ok}
              className="w-40 h-40 mx-auto relative top-30"
            />
          </div>
        );
      })}
    </div>
  );
};

const mapList10 = (img = "", title = "", data = []) => {
  return (
    <div className="w-1240 mx-auto h-110 mt-10 flex justify-between text-left border-b-1 border-[#444444] wow animate__animated animate__fadeInUp">
      <div className={`w-304 h-110 relative`}>
        <p className="flex mt-30">
          <img src={img} className="w-36 h-36" />
          <span className="ml-15 text-18 leading-22 font-medium relative top-7">
            {title}
          </span>
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-255 h-110 rounded-25 relative text-center wow animate__animated animate__fadeInUp`}
          >
            <img
              style={{
                display: item.isShow ? "block" : "none",
              }}
              src={ok}
              className="w-40 h-40 mx-auto relative top-30"
            />
          </div>
        );
      })}
    </div>
  );
};

export default function Price() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isBao, setIsBao] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isZhang, setIsZhang] = useState(false);
  const [isFee, setIsFee] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [isPi, setIsPi] = useState(false);
  const [isAn, setIsAn] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  return (
    <div>
      <div
        className={`w-full h-360 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-117 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.price_1}
        </p>
        <p
          className={`w-678 mx-auto text-24 leading-48 font-normal pt-10 wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.price_2}
        </p>
      </div>

      <div className="w-1320 h-820 mx-auto bg-[#EDEDED] rounded-50 mt-35">
        {mapList3([
          {
            z50: "bg-[#D1D1D1]",
            color: "bg-white",
            text: "text-[#141416]",
            num: 128,
            title: `${i18nKeys.price_4}`,
            btnBg: "bg-[#000000]",
            btnText: "text-[#FCFCFD]",
            btnContent: `${i18nKeys.price_7}`,
            desc: `${i18nKeys.price_6}`,
            desc1: `${i18nKeys.price_8}`,
            sub: [
              { t1: `${i18nKeys.price_9}`, bg: "text-[#000]" },
              { t1: `${i18nKeys.price_10}`, bg: "text-[#000]" },
              { t1: `${i18nKeys.price_11}`, bg: "text-[#000]" },
              { t1: `${i18nKeys.price_12}`, bg: "text-[#000]" },
              { t1: `${i18nKeys.price_13}`, bg: "text-[#000]" },
            ],
          },
          {
            isShow: true,
            z50: "bg-[#FF5C01]",
            color: "bg-white",
            text: "text-[#141416]",
            num: 288,
            title: `${i18nKeys.price_14}`,
            btnBg: "bg-[#FF5C01]",
            btnText: "text-[#FCFCFD]",
            btnContent: `${i18nKeys.price_7}`,
            desc: `${i18nKeys.price_15}`,
            desc1: `${i18nKeys.price_16}`,
            sub: [
              { t1: `${i18nKeys.price_17}`, bg: "text-[#FF5C01]" },
              { t1: `${i18nKeys.price_18}`, bg: "text-[#FF5C01]" },
              { t1: `${i18nKeys.price_19}`, bg: "text-[#FF5C01]" },
              { t1: `${i18nKeys.price_20}`, bg: "text-[#FF5C01]" },
              { t1: `${i18nKeys.price_21}`, bg: "text-[#FF5C01]" },
            ],
          },
          {
            z50: "bg-[#000]",
            color: "bg-[#FF5C01]",
            text: "text-[#fff]",
            num: 1988,
            title: `${i18nKeys.price_22}`,
            btnBg: "bg-[#fff]",
            btnText: "text-[#000]",
            btnContent: `${i18nKeys.price_7}`,
            desc: `${i18nKeys.price_23}`,
            desc1: `${i18nKeys.price_24}`,
            sub: [
              { t1: `${i18nKeys.price_25}`, bg: "text-[#fff]" },
              { t1: `${i18nKeys.price_26}`, bg: "text-[#fff]" },
              { t1: `${i18nKeys.price_27}`, bg: "text-[#fff]" },
              { t1: `${i18nKeys.price_28}`, bg: "text-[#fff]" },
              { t1: `${i18nKeys.price_29}`, bg: "text-[#fff]" },
            ],
          },
        ])}
        <p className="mt-20 text-center text-18 leading-48 font-normal">
          {i18nKeys.price_30}
        </p>
      </div>

      <div
        className="w-1320 h-282 mx-auto text-center mt-80 rounded-30"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-60 text-36 text-white leading-44 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.price_31}
        </div>
        <p className="w-550 mt-10 mx-auto text-white text-18 leading-20 font-normal opacity-80  wow animate__animated animate__fadeInUp line-clamp-2">
          {i18nKeys.price_32}
        </p>
        <Link
          to="/resource/contactsales"
          className="block w-244 h-52 bg-[#fff] p-18 rounded-25 text-20 leading-16 hover:opacity-80 hover:cursor-pointer mt-20 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#000]">{i18nKeys.price_33}</span>
          <img src={arrowRightBlack} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>

      <div
        className="w-1320 h-282 mx-auto text-center mt-40 rounded-30"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-60 text-36 text-white leading-44 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.price_34}
        </div>
        <p className="w-550 mt-10 mx-auto text-white text-18 leading-20 font-normal opacity-80  wow animate__animated animate__fadeInUp line-clamp-2">
          {i18nKeys.price_35}
        </p>
        <Link
          to="/forexcalculator"
          className="block w-244 h-52 bg-[#fff] p-18 rounded-25 text-20 leading-16 hover:opacity-80 hover:cursor-pointer mt-20 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#000]">{i18nKeys.price_36}</span>
          <img src={arrowRightBlack} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>

      {/* *********************表格**************** */}
      <div className="w-1320 mx-auto mt-90 text-white bg-[#2a292a] pb-56 rounded-bl-30 rounded-br-30">
        <div
          className="w-full h-184"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {mapList7([
            {
              title: `${i18nKeys.price_4}`,
              price: 128,
            },
            {
              title: `${i18nKeys.price_14}`,
              price: 288,
            },
            {
              title: `${i18nKeys.price_22}`,
              price: 1988,
            },
          ])}
        </div>
        {/* 定價小算盘 */}
        <div className="w-full p-40">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_38}</span>

              <img
                src={bg6}
                onClick={() => setIsHovered(!isHovered)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isHovered ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isHovered ? "block" : "none",
              }}
            >
              {mapList8(bg4, `${i18nKeys.price_39}`, `${i18nKeys.price_40}`, [
                {
                  isShow: true,
                  num: 5,
                },
                {
                  isShow: true,
                  num: 10,
                },
                {
                  isShow: true,
                  num: 10,
                },
              ])}
              {mapList8(bg5, `${i18nKeys.price_41}`, `${i18nKeys.price_42}`, [
                {
                  isShow: true,
                  num: 10,
                },
                {
                  isShow: true,
                  num: 10,
                },
                {
                  isShow: false,
                  num: 10,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 卡片 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_44}</span>

              <img
                src={bg6}
                onClick={() => setIsCard(!isCard)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isCard ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isCard ? "block" : "none",
              }}
            >
              {mapList9(bg7, `${i18nKeys.price_45}`, `${i18nKeys.price_46}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg8, `${i18nKeys.price_47}`, `${i18nKeys.price_48}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg9, `${i18nKeys.price_49}`, `${i18nKeys.price_50}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg10, `${i18nKeys.price_51}`, `${i18nKeys.price_52}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 报账 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_57}</span>

              <img
                src={bg6}
                onClick={() => setIsBao(!isBao)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isBao ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isBao ? "block" : "none",
              }}
            >
              {mapList9(bg11, `${i18nKeys.price_53}`, `${i18nKeys.price_54}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg12, `${i18nKeys.price_55}`, `${i18nKeys.price_56}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg13, `${i18nKeys.price_507}`, `${i18nKeys.price_58}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg14, `${i18nKeys.price_59}`, `${i18nKeys.price_60}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 创建 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_61}</span>

              <img
                src={bg6}
                onClick={() => setIsCreate(!isCreate)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isCreate ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isCreate ? "block" : "none",
              }}
            >
              {mapList9(bg15, `${i18nKeys.price_62}`, `${i18nKeys.price_63}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg16, `${i18nKeys.price_64}`, `${i18nKeys.price_65}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg17, `${i18nKeys.price_66}`, `${i18nKeys.price_67}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg18, `${i18nKeys.price_68}`, `${i18nKeys.price_69}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 账单 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_70}</span>

              <img
                src={bg6}
                onClick={() => setIsZhang(!isZhang)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isZhang ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isZhang ? "block" : "none",
              }}
            >
              {mapList9(bg19, `${i18nKeys.price_71}`, `${i18nKeys.price_72}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg20, `${i18nKeys.price_73}`, `${i18nKeys.price_74}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg21, `${i18nKeys.price_75}`, `${i18nKeys.price_76}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg22, `${i18nKeys.price_77}`, `${i18nKeys.price_78}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg23, `${i18nKeys.price_79}`, `${i18nKeys.price_80}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg24, `${i18nKeys.price_81}`, `${i18nKeys.price_82}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 费用管理 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_83}</span>

              <img
                src={bg6}
                onClick={() => setIsFee(!isFee)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isFee ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isFee ? "block" : "none",
              }}
            >
              {mapList9(bg25, `${i18nKeys.price_84}`, `${i18nKeys.price_85}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg26, `${i18nKeys.price_86}`, `${i18nKeys.price_87}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg27, `${i18nKeys.price_88}`, `${i18nKeys.price_89}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 报告 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_90}</span>

              <img
                src={bg6}
                onClick={() => setIsReport(!isReport)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isReport ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isReport ? "block" : "none",
              }}
            >
              {mapList9(bg28, `${i18nKeys.price_91}`, `${i18nKeys.price_92}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg29, `${i18nKeys.price_93}`, `${i18nKeys.price_94}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 审批 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_95}</span>

              <img
                src={bg6}
                onClick={() => setIsPi(!isPi)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isPi ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isPi ? "block" : "none",
              }}
            >
              {mapList9(bg30, `${i18nKeys.price_96}`, `${i18nKeys.price_97}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList9(bg31, `${i18nKeys.price_98}`, `${i18nKeys.price_99}`, [
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 安全 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_100}</span>

              <img
                src={bg6}
                onClick={() => setIsAn(!isAn)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isAn ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isAn ? "block" : "none",
              }}
            >
              {mapList10(bg32, `${i18nKeys.price_101}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg33, `${i18nKeys.price_102}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg34, `${i18nKeys.price_103}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg35, `${i18nKeys.price_104}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg36, `${i18nKeys.price_105}`, [
                {
                  isShow: false,
                },
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
        {/* 支持 */}
        <div className="w-full p-10">
          <div className="w-1240 mx-auto">
            <p className="text-24 font-medium flex">
              <span className="mr-10">{i18nKeys.price_106}</span>

              <img
                src={bg6}
                onClick={() => setIsSupport(!isSupport)}
                className={`w-14 h-14 relative top-10 hover:cursor-pointer transition-transform ${
                  isSupport ? "transform rotate-90" : ""
                }`}
              />
            </p>
            <hr className="mt-10 border-t-2 border-[#555555]" />
            <div
              style={{
                display: !isSupport ? "block" : "none",
              }}
            >
              {mapList10(bg37, `${i18nKeys.price_107}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg38, `${i18nKeys.price_108}`, [
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg39, `${i18nKeys.price_109}`, [
                {
                  isShow: false,
                },
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg40, `${i18nKeys.price_110}`, [
                {
                  isShow: false,
                },
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
              ])}
              {mapList10(bg41, `${i18nKeys.price_111}`, [
                {
                  isShow: false,
                },
                {
                  isShow: false,
                },
                {
                  isShow: true,
                },
              ])}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-80 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold">{i18nKeys.price_112}</div>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20 mx-auto"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.price_113}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="mt-30 mx-auto text-16 leading-24 font-normal text-[#666] mb-76">
          {i18nKeys.price_114}
        </p>
      </div>

      <div className="bg-[#F0F0F0] w-full mt-80">
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
