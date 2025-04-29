import bg from "@/assets/largeenterprise/bg.png";
import bg1 from "@/assets/largeenterprise/bg1.png";
import bg2 from "@/assets/largeenterprise/bg2.png";
import bg7 from "@/assets/largeenterprise/bg7.png";
import bg8 from "@/assets/largeenterprise/bg8.png";
import bg3 from "@/assets/smenterprises/bg3.png";
import bg4 from "@/assets/smenterprises/bg4.png";
import bg5 from "@/assets/smenterprises/bg5.png";
import bg6 from "@/assets/smenterprises/bg6.png";
import bg9 from "@/assets/largeenterprise/bg9.png";
import bg10 from "@/assets/largeenterprise/bg10.png";
import bg11 from "@/assets/largeenterprise/bg11.png";
import bg12 from "@/assets/largeenterprise/bg12.png";
import bg13 from "@/assets/largeenterprise/bg13.png";
import bg01 from "@/assets/partners/bg01.png";
import bg02 from "@/assets/partners/bg02.png";
import bg03 from "@/assets/partners/bg03.png";
import bg04 from "@/assets/partners/bg04.png";
import bg05 from "@/assets/partners/bg05.png";
import bg06 from "@/assets/partners/bg06.png";
import arrowRight from "@/assets/arrow-right.png";
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
    question: `${i18nKeys.big_26}`,
    answer: `${i18nKeys.big_27}`,
  },
  {
    question: `${i18nKeys.big_28}`,
    answer: `${i18nKeys.big_29}`,
  },
  {
    question: `${i18nKeys.big_30}`,
    answer: `${i18nKeys.big_31}`,
  },
  {
    question: `${i18nKeys.big_32}`,
    answer: `${i18nKeys.big_33}`,
  },
  {
    question: `${i18nKeys.big_34}`,
    answer: `${i18nKeys.big_35}`,
  },
  {
    question: `${i18nKeys.big_36}`,
    answer: `${i18nKeys.big_37}`,
  },
  {
    question: `${i18nKeys.big_38}`,
    answer: `${i18nKeys.big_39}`,
  },
  {
    question: `${i18nKeys.big_40}`,
    answer: `${i18nKeys.big_41}`,
  },
];

const mapList2 = (data = []) => {
  return (
    <div className="w-1210 mx-auto flex justify-between text-left">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-580 h-322 ${item.bgColor} rounded-30 pt-34 pl-40 pr-40 wow animate__animated animate__fadeInUp`}
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="w-100 h-100 rounded-50"
              style={{
                backgroundImage: `url(${item.pic})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="mt-20 text-24 leading-36 font-bold line-clamp-2">
              {item.title}
            </p>
            <hr
              className={`w-full border-t-1 mt-20 border-[#D8D8D8] ${item.opacity}`}
            />
            <p className="text-14 leading-24 font-normal mt-20 opacity-80">
              <span>{item.name}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList3 = (data = []) => {
  return (
    <div className="w-1120 mx-auto bg-[#fff] rounded-20 flex justify-between pl-32 pr-32 wow animate__animated animate__fadeInUp">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-159 h-96`}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        );
      })}
    </div>
  );
};

const mapList4 = (data = []) => {
  return (
    <div className="w-1120 mt-40 mx-auto rounded-20 flex justify-between wow animate__animated animate__fadeInUp">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-192 h-225 bg-[#fff] rounded-16 pl-25 pr-25`}
          >
            <div
              className="w-91 h-91 mx-auto mt-29"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="mt-30 text-20 leading-23 font-medium line-clamp-2 text-[#000]">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function LargeEnterprise() {
  return (
    <div>
      <Topic
        p_t="pt-181"
        text_color="text-[#000]"
        bg={bg}
        title={i18nKeys.big_1}
        desc={i18nKeys.big_2}
        path="/resource/recommended"
        btnText={i18nKeys.big_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-1320 mx-auto text-center bg-[#000] rounded-35 mt-80 pb-90">
        <div className="text-48 leading-64 font-bold text-white pt-80 pb-45 wow animate__animated animate__fadeInUp">
          {i18nKeys.big_4}
        </div>
        {mapList3([
          {
            img: bg01,
          },
          {
            img: bg02,
          },
          {
            img: bg03,
          },
          {
            img: bg04,
          },
          {
            img: bg05,
          },
          {
            img: bg06,
          },
        ])}
        {mapList4([
          {
            img: bg9,
            title: `${i18nKeys.big_5}`,
          },
          {
            img: bg10,
            title: `${i18nKeys.big_6}`,
          },
          {
            img: bg11,
            title: `${i18nKeys.big_7}`,
          },
          {
            img: bg12,
            title: `${i18nKeys.big_8}`,
          },
          {
            img: bg13,
            title: `${i18nKeys.big_9}`,
          },
        ])}
      </div>

      <div className="w-full mt-80 mb-40 text-white">
        {mapList2([
          {
            bgColor: "bg-[#FF5C01]",
            bg: "",
            pic: bg1,
            title: `${i18nKeys.big_10}`,
            name: `${i18nKeys.big_11}`,
            opacity: "opacity-100",
          },
          {
            bgColor: "",
            bg: bg4,
            pic: bg6,
            title: `${i18nKeys.big_12}`,
            name: `${i18nKeys.big_13}`,
            opacity: "opacity-30",
          },
        ])}
        <div className="mt-21">
          {mapList2([
            {
              bgColor: "",
              bg: bg3,
              pic: bg5,
              title: `${i18nKeys.big_14}`,
              name: `${i18nKeys.big_15}`,
              opacity: "opacity-30",
            },
            {
              bgColor: "bg-[#FF8541]",
              bg: "",
              pic: bg2,
              title: `${i18nKeys.big_16}`,
              name: `${i18nKeys.big_17}`,
              opacity: "opacity-100",
            },
          ])}
        </div>
      </div>

      <div
        className="w-1180 h-178 mx-auto wow animate__animated animate__fadeInUp"
        style={{
          backgroundImage: `url(${bg8})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-1320 mt-80 mx-auto h-412 rounded-35 flex justifu-between">
        <div className="w-650 h-412 ">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg7})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-10" : "mt-66"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.big_18}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.big_19}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#141416] text-[#FCFCFD] p-18 text-center rounded-90 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.big_20}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full mt-80">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.big_21}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.big_22}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>

      <div className="w-full mt-76 h-258 mx-auto text-[#141416] text-center">
        <div className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.big_23}
        </div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]  wow animate__animated animate__fadeInUp">
          {i18nKeys.big_24}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.big_25}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>
    </div>
  );
}
