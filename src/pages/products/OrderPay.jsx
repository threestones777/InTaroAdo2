import bg from "@/assets/orderpay/bg.png";
import bg1 from "@/assets/orderpay/bg1.png";
import bg2 from "@/assets/orderpay/bg2.png";
import bg3 from "@/assets/orderpay/bg3.png";
import bg4 from "@/assets/orderpay/bg4.png";
import bg5 from "@/assets/orderpay/bg5.png";
import bg6 from "@/assets/orderpay/bg6.png";
import bg7 from "@/assets/orderpay/bg7.png";
import bg8 from "@/assets/orderpay/bg8.png";
import bg9 from "@/assets/orderpay/bg9.png";
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
    question: `${i18nKeys.pay_27}`,
    answer: `${i18nKeys.pay_28}`,
  },
  {
    question: `${i18nKeys.pay_29}`,
    answer: `${i18nKeys.pay_30}`,
  },
  {
    question: `${i18nKeys.pay_31}`,
    answer: `${i18nKeys.pay_32}`,
  },
  {
    question: `${i18nKeys.pay_33}`,
    answer: `${i18nKeys.pay_34}`,
  },
  {
    question: `${i18nKeys.pay_35}`,
    answer: `${i18nKeys.pay_36}`,
  },
  {
    question: `${i18nKeys.pay_37}`,
    answer: `${i18nKeys.pay_38}`,
  },
];

const mapList3 = (data = []) => {
  return (
    <div className="w-1120 mx-auto flex justify-between text-center pb-92">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-260 h-300 bg-white pl-20 pr-20 pt-46 rounded-25  wow animate__animated animate__fadeInUp`}
          >
            <div className="w-91 h-91 mx-auto rounded-50 bg-[#EDEDED]">
              <img
                src={item.img}
                className="w-48 h-48 mx-auto relative top-22"
              />
            </div>
            <p className="mt-31 mb-16 text-24 leading-24 font-bold">
              {item.title}
            </p>
            <p className="h-80 text-14 leading-20 font-normal text-[#000]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function OrderPay() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.pay_1}
        desc={i18nKeys.pay_2}
        path="/resource/recommended"
        btnText={i18nKeys.pay_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#FF5C01]">
        <div className="w-1100 mx-auto">
          <div className="w-550 mx-auto pt-80 pb-60 text-48 leading-64 font-normal text-center text-white  wow animate__animated animate__fadeInUp">
            {i18nKeys.pay_4}
          </div>
          {mapList3([
            {
              img: bg1,
              title: `${i18nKeys.pay_5}`,
              desc: `${i18nKeys.pay_6}`,
            },
            {
              img: bg2,
              title: `${i18nKeys.pay_7}`,
              desc: `${i18nKeys.pay_8}`,
            },
            {
              img: bg3,
              title: `${i18nKeys.pay_9}`,
              desc: `${i18nKeys.pay_10}`,
            },
            {
              img: bg4,
              title: `${i18nKeys.pay_11}`,
              desc: `${i18nKeys.pay_12}`,
            },
          ])}
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-512 bg-[#EEEFF1] rounded-35 flex justify-between">
        <div className="w-650 h-512 pt-51">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg5})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-512 bg-[#000] text-white rounded-tr-35 rounded-br-35">
          <div className="w-550 h-220 mx-auto mt-106">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.pay_13}
            </p>
            <p className="text-16 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
              {i18nKeys.pay_14}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.pay_15}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-73 mx-auto h-412 flex justify-between">
        <div className="w-550 h-412">
          <div className="w-550 h-220 mx-auto mt-90">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.pay_16}
            </p>
            <p className="text-16 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.pay_17}
            </p>
          </div>
        </div>
        <div className="w-550 h-412">
          <div
            className="w-550 h-412 mx-auto wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg8})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto h-512 mt-110 bg-[#EEEFF1] rounded-35 flex justifu-between">
        <div className="w-650 h-512 pt-52">
          <div
            className="w-550 h-412 mx-auto wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg6})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-512 text-[#000]">
          <div className="w-550 h-220 mx-auto mt-142 wow animate__animated animate__fadeInUp">
            <p className="text-48 leading-64 font-bold">{i18nKeys.pay_18}</p>
            <p className="text-16 leading-24 font-normal mt-32">
              {i18nKeys.pay_19}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justifu-between">
        <div className="w-700 h-412">
          <div className="w-550 h-220 mx-auto mt-90 wow animate__animated animate__fadeInUp">
            <p className="text-48 leading-64 font-bold">{i18nKeys.pay_20}</p>
            <p className="text-16 leading-24 font-normal mt-20 text-[#000]">
              {i18nKeys.pay_21}
            </p>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg9})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto h-512 bg-[#FF5C01] rounded-35 mt-40 mb-81">
        <div className="w-700 h-512 text-white float-right rounded-tr-35 rounded-br-35">
          <div className="w-550 h-220 mx-auto mt-82 wow animate__animated animate__fadeInUp">
            <p className="text-48 leading-64 font-bold">{i18nKeys.pay_22}</p>
            <p className="opacity-80 text-16 leading-24 font-normal mt-32">
              {i18nKeys.pay_23}
            </p>
            <Link
              to="/products/processreport"
              className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:cursor-pointer mt-30  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.pay_24}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
        <div className="w-650 h-512 flot-left pt-51">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg7})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.pay_25}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.pay_26}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
