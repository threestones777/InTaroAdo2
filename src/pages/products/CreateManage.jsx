import bg from "@/assets/createmanage/bg.png";
import bg1 from "@/assets/createmanage/bg1.png";
import bg2 from "@/assets/createmanage/bg2.png";
import bg3 from "@/assets/createmanage/bg3.png";
import bg4 from "@/assets/createmanage/bg4.png";
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
    question: `${i18nKeys.create_18}`,
    answer: `${i18nKeys.create_19}`,
  },
  {
    question: `${i18nKeys.create_20}`,
    answer: `${i18nKeys.create_21}`,
  },
  {
    question: `${i18nKeys.create_22}`,
    answer: `${i18nKeys.create_23}`,
  },
  {
    question: `${i18nKeys.create_24}`,
    answer: `${i18nKeys.create_25}`,
  },
  {
    question: `${i18nKeys.create_26}`,
    answer: `${i18nKeys.create_27}`,
  },
  {
    question: `${i18nKeys.create_28}`,
    answer: `${i18nKeys.create_29}`,
  },
];

export default function CreateManage() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.create_1}
        desc={i18nKeys.create_2}
        path="/resource/recommended"
        btnText={i18nKeys.create_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full mt-80 mx-auto h-500 bg-[#FF5C01] flex justify-center">
        <div className="w-750 h-500">
          <div
            className="w-550 h-502 mx-auto relative bottom-2  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-500 text-white rounded-tr-35 rounded-br-35">
          <div className="w-550 h-220 mx-auto mt-166 ml-20 wow animate__animated animate__fadeInUp">
            <p className="text-48 leading-64 font-bold">{i18nKeys.create_4}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.create_5}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justify-between">
        <div className="w-700 h-412">
          <div className="w-550 h-220 mx-auto mt-90">
            <p
              className={`${
                localStorage.lang === "en" ? "w-650" : "w-350"
              } text-48 leading-64 font-bold wow animate__animated animate__fadeInUp`}
            >
              {i18nKeys.create_6}
            </p>
            <p className="text-16 leading-24 font-normal mt-32 wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.create_7}
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

      <div className="w-1320 mx-auto h-512 bg-[#F0F0F0] rounded-35 flex justifu-between mt-80">
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
          <div className="w-550 h-220 mx-auto mt-145">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.create_8}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.create_9}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#141416] p-18 text-center rounded-25 text-[#fff] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.create_10}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-81 mx-auto h-412 flex justifu-between">
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35 ">
          <div className="w-550 h-220 mx-auto mt-62">
            <p
              className={`${
                localStorage.lang === "en" ? "w-550" : "w-350"
              } text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp`}
            >
              {i18nKeys.create_11}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.create_12}
            </p>
            <Link
              to="/products/debitcard"
              className={`block ${
                localStorage.lang === "en" ? "w-240" : "w-206"
              } h-52 bg-[#141416] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.create_13}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg4})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="mt-120">
        <div className="mx-auto text-center">
          <p className="text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
            {i18nKeys.create_14}
          </p>
          <p className="text-24 leading-24 font-normal mt-10  wow animate__animated animate__fadeInUp">
            {i18nKeys.create_15}
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
            {i18nKeys.create_16}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.create_17}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
