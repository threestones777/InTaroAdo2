import bg from "@/assets/debitcard/bg.png";
import bg1 from "@/assets/debitcard/bg1.png";
import bg2 from "@/assets/debitcard/bg2.png";
import bg3 from "@/assets/debitcard/bg3.png";
import bg4 from "@/assets/debitcard/bg4.png";
import bg5 from "@/assets/debitcard/bg5.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
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
    question: `${i18nKeys.card_24}`,
    answer: `${i18nKeys.card_25}`,
  },
  {
    question: `${i18nKeys.card_26}`,
    answer: `${i18nKeys.card_27}`,
  },
  {
    question: `${i18nKeys.card_28}`,
    answer: `${i18nKeys.card_29}`,
  },
  {
    question: `${i18nKeys.card_30}`,
    answer: `${i18nKeys.card_31}`,
  },
];

export default function DebitCard() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.card_1}
        desc={i18nKeys.card_2}
        path="/resource/recommended"
        btnText={i18nKeys.card_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-1320 mt-80 mx-auto bg-[#F0F0F0] rounded-35 h-512 flex justify-between">
        <div className="w-700 h-512">
          <div className="w-550 h-220 mx-auto mt-143">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.card_4}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.card_5}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#141416] text-[#FCFCFD] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.card_6}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
        <div className="w-650 h-512">
          <div
            className="w-550 h-410 mx-auto mt-50  wow animate__animated animate__fadeInUp"
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
            className="w-550 h-412 mx-auto mt-20  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-60" : "mt-91"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.card_7}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.card_8}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#141416] text-[#FCFCFD] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.card_9}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 bg-[#000] text-white rounded-35 mx-auto h-512 flex justifu-between">
        <div className="w-700 h-512 rounded-tr-35 rounded-br-35 ">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-115" : "mt-145"
            }  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.card_10}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.card_11}
            </p>
            <Link
              to="/products/qiCard"
              className={`block ${
                localStorage.lang === "en" ? "w-220" : "w-206"
              } h-52 bg-[#fff] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.card_12}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
        <div className="w-650 h-512 pt-51">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg4})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg5})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-48" : "mt-108"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.card_13}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.card_14}
            </p>
            <Link
              to="/products/realtimeinfor"
              className={`block ${
                localStorage.lang === "en" ? "w-220" : "w-206"
              } h-52 bg-[#141416] text-[#FCFCFD] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.card_15}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 h-348 mx-auto relative rounded-35">
        <div
          className="w-1320 h-348 mx-auto text-center mt-80"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-1320 h-348 bg-[#000] bg-opacity-40 rounded-35 mx-auto text-center mt-80 absolute bottom-0">
          <div className="pt-63 text-48 text-white leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.card_16}
          </div>
          <p
            className={`${
              localStorage.lang === "en" ? "w-800" : "w-550"
            } mt-16 mx-auto text-white text-16 leading-24 font-normal opacity-80  wow animate__animated animate__fadeInUp`}
          >
            {i18nKeys.card_17}
          </p>
          <Link
            to="/products/processreport"
            className="block w-244 h-52 bg-[#FF5C01] p-18 rounded-25 text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
          >
            <span className="text-[#FCFCFD]">{i18nKeys.card_18}</span>
            <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
          </Link>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full mt-80">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.card_19}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.card_20}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>

      <div className="w-full h-338 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="pt-80 text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.card_21}
        </div>
        <p className="w-550 mt-10 mx-auto text-16 leading-24 font-normal text-[#000]  wow animate__animated animate__fadeInUp">
          {i18nKeys.card_22}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.card_23}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>
    </div>
  );
}
