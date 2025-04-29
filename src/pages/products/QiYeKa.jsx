import i18n from "@/i18n/i18n.js";
import bg from "@/assets/qiyeka/bg.png";
import bg1 from "@/assets/qiyeka/bg1.png";
import bg2 from "@/assets/qiyeka/bg2.png";
import bg3 from "@/assets/qiyeka/bg3.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import arrowRightRed from "@/assets/arrow-right-red.png";
import bg7 from "@/assets/qiyeka/bg7.png";
import bg8 from "@/assets/qiyeka/bg8.png";
import bg9 from "@/assets/qiyeka/bg9.png";
import bg10 from "@/assets/qiyeka/bg10.png";
import bg11 from "@/assets/qiyeka/bg11.png";
import bg19 from "@/assets/qiyeka/bg19.png";
import img1 from "@/assets/qiyeka/img1.png";
import img2 from "@/assets/qiyeka/img2.png";
import img3 from "@/assets/qiyeka/img3.png";
import { Link } from "react-router-dom";
import Topic from "@/components/Topic";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Partner from "@/components/Partner";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
const images = [partner1, partner2, partner3, partner4, partner5];
import Article from "@/components/Article";
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.qiye_301}`,
    answer: `${i18nKeys.qiye_302}`,
  },
  {
    question: `${i18nKeys.qiye_303}`,
    answer: `${i18nKeys.qiye_304}`,
  },
  {
    question: `${i18nKeys.qiye_305}`,
    answer: `${i18nKeys.qiye_306}`,
  },
  {
    question: `${i18nKeys.qiye_307}`,
    answer: `${i18nKeys.qiye_308}`,
  },
  {
    question: `${i18nKeys.qiye_309}`,
    answer: `${i18nKeys.qiye_310}`,
  },
  {
    question: `${i18nKeys.qiye_311}`,
    answer: `${i18nKeys.qiye_312}`,
  },
  {
    question: `${i18nKeys.qiye_313}`,
    answer: `${i18nKeys.qiye_314}`,
  },
  {
    question: `${i18nKeys.qiye_315}`,
    answer: `${i18nKeys.qiye_316}`,
  },
];

const mapList2 = (data = []) => {
  return (
    <div className="w-full h-800 mt-120 grid grid-cols-2 gap-20">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-312 h-418 border-1 border-[#ccc] rounded-25 px-28 wow animate__animated animate__fadeInUp"
          >
            <div className="w-91 h-91 mt-48 p-22 bg-[#EDEDED] rounded-15">
              <img src={item.img} className="w-48 h-48" />
            </div>
            <div
              className="h-48 text-24 leading-24 font-bold mt-41 line-clamp-2"
              title={item.title}
            >
              {item.title}
            </div>
            <div
              className="h-80 text-14 leading-20 font-normal mt-16 mb-18 line-clamp-4"
              title={item.desc}
            >
              {item.desc}
            </div>
            <Link
              to={item.path}
              className={`block ${
                localStorage.lang === "en" ? "w-180" : "w-145"
              } h-48 bg-[#000] p-16 text-center rounded-90 text-[#FCFCFD] text-16 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mr-20`}
            >
              <span>{item.button}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-15" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapList3 = (data = []) => {
  return (
    <div className="w-1120 mx-auto flex justify-between text-left pt-60 pb-127">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-350 h-336 ${item.color} ${item.text} rounded-25 pt-26 pl-32  wow animate__animated animate__fadeInUp`}
          >
            <p className="mb-24 text-72 leading-72 font-medium">{item.num}</p>
            <p className="mb-16 text-24 leading-24 font-bold">{item.title}</p>
            <p className="h-80 text-14 leading-20 font-normal pr-58 line-clamp-4">
              {item.desc}
            </p>
            <Link
              to={item.path}
              className={`block ${
                localStorage.lang === "en" ? "w-180" : "w-145"
              } h-52 ${item.btnBg} p-18 text-center rounded-25 ${
                item.btnText
              } text-18 leading-16 ${item.btnHover} hover:cursor-pointer mt-10`}
            >
              <span>{item.btnContent}</span>
              <img src={item.btnImg} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default function QiYeKa() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.qiye_1}
        desc={i18nKeys.qiye_2}
        path="/resource/recommended"
        btnText={i18nKeys.qiye_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#F4F5F6] relative">
        <div
          className="w-266 h-320 absolute bg-[-37px_0px] wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg19})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-1118 mx-auto flex justify-between  text-[#000]">
          <div className="w-448">
            <p className="w-full text-48 leading-64 font-bold mt-210  wow animate__animated animate__fadeInUp line-clamp-2">
              {i18nKeys.qiye_4}
            </p>
            <p className="w-full text-16 leading-20 font-normal mt-32  wow animate__animated animate__fadeInUp line-clamp-2">
              {i18nKeys.qiye_5}
            </p>
            <div
              className="w-448 h-508 mt-57 mb-140  wow animate__animated animate__fadeInUp"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="w-644 h-888">
            {mapList2([
              {
                img: bg8,
                title: `${i18nKeys.qiye_6}`,
                desc: `${i18nKeys.qiye_7}`,
                button: `${i18nKeys.qiye_8}`,
                path: "/products/budgetcontrol",
              },
              {
                img: bg9,
                title: `${i18nKeys.qiye_9}`,
                desc: `${i18nKeys.qiye_10}`,
                button: `${i18nKeys.qiye_11}`,
                path: "/products/processreport",
              },
              {
                img: bg10,
                title: `${i18nKeys.qiye_12}`,
                desc: `${i18nKeys.qiye_13}`,
                button: `${i18nKeys.qiye_14}`,
                path: "/resource/recommended",
              },
              {
                img: bg11,
                title: `${i18nKeys.qiye_15}`,
                desc: `${i18nKeys.qiye_16}`,
                button: `${i18nKeys.qiye_17}`,
                path: "/products/realtimeinfor",
              },
            ])}
          </div>
        </div>
      </div>

      <div
        className="w-full h-540 flex justify-between"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[50%] px-40">
          <div className="w-710 pt-126 pl-160 float-right text-white">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.qiye_18}
            </p>
            <p className="opacity-80 text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp">
              {i18nKeys.qiye_19}
            </p>
          </div>
        </div>
        <div
          className="w-690 h-540  wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="w-full">
        <div className="mt-127 text-center text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
          {i18nKeys.qiye_20}
        </div>
        <div className="mt-20 text-center text-24 leading-32 font-normal wow animate__animated animate__fadeInUp">
          {i18nKeys.qiye_201}
        </div>
        <div className="w-1120 mx-auto">
          {mapList3([
            {
              num: "01",
              color: "bg-[#F0F0F0]",
              text: "text-[#000]",
              title: `${i18nKeys.qiye_21}`,
              btnBg: "bg-[#000000]",
              btnText: "text-white",
              btnContent: `${i18nKeys.qiye_23}`,
              btnImg: arrowRight,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.qiye_22}`,
              path: "/products/budgetcontrol",
            },
            {
              num: "02",
              color: "bg-[#FF5C01]",
              text: "text-[#fff]",
              title: `${i18nKeys.qiye_24}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#FF5C01]",
              btnContent: `${i18nKeys.qiye_26}`,
              btnImg: arrowRightRed,
              btnHover: "hover:bg-[#000]",
              desc: `${i18nKeys.qiye_25}`,
              path: "/products/realtimeinfor",
            },
            {
              num: "03",
              color: "bg-[#FF8541]",
              text: "text-[#fff]",
              title: `${i18nKeys.qiye_27}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#666666]",
              btnContent: `${i18nKeys.qiye_29}`,
              btnImg: arrowRightBlack,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.qiye_28}`,
              path: "/products/processreport",
            },
          ])}
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full">
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

      <div
        className="w-1320 mx-auto h-348 text-center mt-80"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-74 text-48 text-white leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.qiye_32}
        </div>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#FFF] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#000]">{i18nKeys.qiye_33}</span>
          <img src={arrowRightBlack} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="text-white text-16 leading-24 font-normal mt-56  wow animate__animated animate__fadeInUp">
          {i18nKeys.qiye_34}
        </p>
      </div>

      <div>
        <div className={`w-800 mx-auto text-center`}>
          <p className="text-48 leading-64 font-bold mt-80  wow animate__animated animate__fadeInUp">
            {i18nKeys.qiye_35}
          </p>
          <p className="text-24 leading-24 font-normal mt-10  wow animate__animated animate__fadeInUp">
            {i18nKeys.qiye_36}
          </p>
        </div>
        <div className="mt-60 mb-40">
          <Article
            data={[
              {
                img: img1,
                what1: `info_10`,
                key1: "nan",
                what1Color: "bg-[#539B7D]",
                what2: `qiye_39`,
                key2: "gong",
                what2Color: "bg-[#8BCBB0]",
                title: `info_15`,
                desc: "",
                content: `info_33`,
                time: `info_19`,
                author: "",
                date: `info_21`,
                location: `info_23`,
              },
              {
                img: img2,
                what1: `info_14`,
                key1: "wen",
                what1Color: "bg-[#FF5C01]",
                what2: `info_4`,
                key2: "zhi",
                what2Color: "bg-[#FFB083]",
                title: `qiye_44`,
                desc: `qiye_56`,
                content: `info_33`,
                author: `info_25`,
                date: `info_21`,
                location: "",
              },
              {
                img: img3,
                what1: `info_14`,
                key1: "wen",
                what1Color: "bg-[#FF5C01]",
                what2: `info_4`,
                key2: "zhi",
                what2Color: "bg-[#FFB083]",
                title: `qiye_57`,
                desc: "",
                content: `info_33`,
                time: `info_19`,
                author: "",
                date: `info_21`,
                location: `info_23`,
              },
            ]}
          />
        </div>
        <div className=" w-244 mx-auto mb-80">
          <Link
            to="/resource/information"
            className="block w-244 h-48 bg-[#000] p-16 text-center rounded-90 text-[#FCFCFD] text-16 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mr-20  wow animate__animated animate__fadeInUp"
          >
            <span>{i18nKeys.qiye_58}</span>
            <img src={arrowRight} className="inline-block w-20 h-20 ml-15" />
          </Link>
        </div>
      </div>
    </div>
  );
}
