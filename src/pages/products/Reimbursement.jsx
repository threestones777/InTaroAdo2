import bg from "@/assets/reimbursement/bg.png";
import bg1 from "@/assets/reimbursement/bg1.png";
import bg2 from "@/assets/reimbursement/bg2.png";
import bg3 from "@/assets/reimbursement/bg3.png";
import bg4 from "@/assets/reimbursement/bg4.png";
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
    question: `${i18nKeys.submit_19}`,
    answer: `${i18nKeys.submit_20}`,
  },
  {
    question: `${i18nKeys.submit_21}`,
    answer: `${i18nKeys.submit_22}`,
  },
  {
    question: `${i18nKeys.submit_23}`,
    answer: `${i18nKeys.submit_24}`,
  },
  {
    question: `${i18nKeys.submit_25}`,
    answer: `${i18nKeys.submit_26}`,
  },
];

export default function Reimbursement() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.submit_1}
        desc={i18nKeys.submit_2}
        path="/resource/recommended"
        btnText={i18nKeys.submit_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full mt-80 mx-auto h-500 bg-[#000] flex justify-center">
        <div className="w-700 h-500 text-white">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-550"
            } h-220 mx-auto mt-134 wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.submit_4}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.submit_5}
            </p>
          </div>
        </div>
        <div className="w-650 h-500 ml-113">
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

      <div className="w-1320 mt-80 mx-auto h-512 bg-[#EEEFF1] rounded-35 flex justifu-between">
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
              localStorage.lang === "en" ? "w-700 mt-70" : "w-550 mt-123"
            } h-220 mx-auto`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.submit_6}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.submit_7}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#141416] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.submit_8}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-81 mx-auto h-412 flex justify-between">
        <div className="w-700 h-412">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-550"
            } h-220 mx-auto mt-91`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.submit_9}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.submit_10}
            </p>
            <Link
              to="/products/realtimeinfor"
              className={`block ${
                localStorage.lang === "en" ? "w-230" : "w-206"
              } h-52 bg-[#141416] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.submit_11}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
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

      <div className="w-1320 mt-80 mx-auto h-412 flex justifu-between">
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
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35 ">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-550"
            } h-180 mx-auto mt-48`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.submit_12}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.submit_13}
            </p>
            <Link
              to="/products/processreport"
              className={`block ${
                localStorage.lang === "en" ? "w-230" : "w-206"
              } h-52 bg-[#141416] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.submit_14}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto text-center">
          <p className="text-48 leading-64 font-bold mt-120  wow animate__animated animate__fadeInUp">
            {i18nKeys.submit_15}
          </p>
          <p className="text-24 leading-24 font-normal mt-10  wow animate__animated animate__fadeInUp">
            {i18nKeys.submit_16}
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
            {i18nKeys.submit_17}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.submit_18}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
