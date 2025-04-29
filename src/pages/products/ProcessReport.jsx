import bg from "@/assets/processreport/bg.png";
import bg1 from "@/assets/processreport/bg1.png";
import bg2 from "@/assets/processreport/bg2.png";
import bg3 from "@/assets/processreport/bg3.png";
import bg4 from "@/assets/processreport/bg4.png";
import bg5 from "@/assets/processreport/bg5.png";
import arrowRight from "@/assets/arrow-right.png";
import img1 from "@/assets/qiyeka/img1.png";
import img2 from "@/assets/qiyeka/img2.png";
import img3 from "@/assets/qiyeka/img3.png";
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
import Article from "@/components/Article";
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.report_21}`,
    answer: `${i18nKeys.report_22}`,
  },
  {
    question: `${i18nKeys.report_23}`,
    answer: `${i18nKeys.report_24}`,
  },
  {
    question: `${i18nKeys.report_25}`,
    answer: `${i18nKeys.report_26}`,
  },
  {
    question: `${i18nKeys.report_27}`,
    answer: `${i18nKeys.report_28}`,
  },
  {
    question: `${i18nKeys.report_29}`,
    answer: `${i18nKeys.report_30}`,
  },
  {
    question: `${i18nKeys.report_31}`,
    answer: `${i18nKeys.report_32}`,
  },
  {
    question: `${i18nKeys.report_33}`,
    answer: `${i18nKeys.report_34}`,
  },
  {
    question: `${i18nKeys.report_35}`,
    answer: `${i18nKeys.report_36}`,
  },
  {
    question: `${i18nKeys.report_37}`,
    answer: `${i18nKeys.report_38}`,
  },
  {
    question: `${i18nKeys.report_39}`,
    answer: `${i18nKeys.report_40}`,
  },
  {
    question: `${i18nKeys.report_41}`,
    answer: `${i18nKeys.report_42}`,
  },
  {
    question: `${i18nKeys.report_43}`,
    answer: `${i18nKeys.report_44}`,
  },
];

const mapList3 = (data = []) => {
  return (
    <div className="w-1320 mx-auto flex justify-between text-left pt-50 pb-80 text-[#141416]">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-640 h-351 rounded-25 bg-[#fff] relative overflow-hidden pt-37 px-40  wow animate__animated animate__fadeInUp`}
          >
            <div
              className="w-318 h-318 absolute bottom-160 right-[-90px]"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="w-100 h-100 rounded-50 bg-[#EDEDED]">
              <img
                src={item.img}
                className="w-48 h-48 mx-auto relative top-26"
              />
            </div>
            <p className="text-24 leading-36 font-bold mt-20 wow animate__animated animate__jackInTheBox">
              {item.title}
            </p>
            <hr className="w-501 border-t-1 mt-20" />
            <p className="text-14 leading-24 font-normal mt-20 wow animate__animated animate__fadeInLeft">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function ProcessReport() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.report_1}
        desc={i18nKeys.report_2}
        path="/resource/recommended"
        btnText={i18nKeys.report_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full mx-auto h-500 bg-[#FF5C01] flex justify-center">
        <div className="w-700 h-500 text-white rounded-tr-35 rounded-br-35">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-590"
            } h-220 mx-auto mt-134 pl-40  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.report_4}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.report_5}
            </p>
          </div>
        </div>
        <div className="w-650 h-500 ml-115">
          <div
            className="w-550 h-500 mx-auto mr-100  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-512 bg-[#000] text-white rounded-35 flex justifu-between">
        <div className="w-650 h-512 pt-51">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-512 rounded-tr-35 rounded-br-35 ">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700 mt-110" : "w-550 mt-138"
            } h-220 mx-auto  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.report_6}</p>
            <p className="text-16 leading-24 font-normal mt-32">
              {i18nKeys.report_7}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-720 bg-[#F0F0F0] mt-80">
        <div className="text-[#141416] text-center pt-102">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_8}
          </p>
          <p className="mt-20 text-24 leading-32 font-normal  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_9}
          </p>
        </div>
        {mapList3([
          {
            img: bg4,
            title: `${i18nKeys.report_10}`,
            desc: `${i18nKeys.report_11}`,
          },
          {
            img: bg5,
            title: `${i18nKeys.report_12}`,
            desc: `${i18nKeys.report_13}`,
          },
        ])}
      </div>

      <div>
        <div className="mx-auto text-center">
          <p className="text-48 leading-64 font-bold mt-80  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_14}
          </p>
          <p className="text-24 leading-24 font-normal mt-10  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_15}
          </p>
        </div>
        <div className="mt-40 mb-80">
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
      </div>

      <div className="bg-[#F0F0F0] w-full">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_16}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.report_17}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>

      <div className="pt-80 text-center">
        <div className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.report_18}
        </div>
        <p className="text-[#000] text-16 leading-24 font-normal mt-12  wow animate__animated animate__fadeInUp">
          {i18nKeys.report_19}
        </p>
      </div>
      <Link
        to="/about"
        className="block w-244 h-52 bg-[#FF5C01] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#000] hover:cursor-pointer mt-32 mx-auto mb-76  wow animate__animated animate__fadeInUp"
      >
        <span>{i18nKeys.report_20}</span>
        <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
      </Link>
    </div>
  );
}
