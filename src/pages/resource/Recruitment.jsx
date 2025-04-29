import bg from "@/assets/recruitment/bg.png";
import bg1 from "@/assets/recruitment/bg1.png";
import bg2 from "@/assets/recruitment/bg2.png";
import bg3 from "@/assets/recruitment/bg3.png";
import bg4 from "@/assets/recruitment/bg4.png";
import bg5 from "@/assets/recruitment/bg5.png";
import bg6 from "@/assets/recruitment/bg6.png";
import bg7 from "@/assets/recruitment/bg7.png";
import bg8 from "@/assets/recruitment/bg8.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useState } from "react";

const mapList4 = (data = []) => {
  return (
    <div className="w-1134 mx-auto flex justify-between mt-45">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-225 h-450  wow animate__animated animate__fadeInUp`}
          >
            <div
              className="w-225 h-130"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="text-[#000] text-24 font-bold mt-113">{item.title}</p>
            <p className="text-[#000] text-16 leading-24 font-normal mt-15">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function Recruitment() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div
        className={`w-full h-540 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-173 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.zhao_1}
        </p>
        <p
          className={`mx-auto text-24 leading-48 font-normal pt-10 wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.zhao_2}
        </p>
        <Link
          to="/resource/recommended"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:text-white hover:cursor-pointer mt-20 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span>{i18nKeys.zhao_3}</span>
          <img
            src={isHover ? arrowRight : arrowRightBlack}
            className="inline-block w-20 h-20 ml-12"
          />
        </Link>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justify-between">
        <div className="w-700 h-42">
          <div className="w-550 h-220 mx-auto mt-99">
            <p className="w-550 text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.zhao_4}
            </p>
            <p className="text-16 leading-24 font-normal mt-32 wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.zhao_5}
            </p>
          </div>
        </div>
        <div className="w-550 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div
        className="w-full h-644 bg-[#F1F1F1] mt-80 text-center"
        style={{
          backgroundImage: `url(${bg8})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-48 leading-64 font-bold pt-80 wow animate__animated animate__fadeInUp">
          {i18nKeys.zhao_6}
        </div>
        <div className="relative wow animate__animated animate__fadeInUp">
          {mapList4([
            {
              img: bg3,
              title: `${i18nKeys.zhao_7}`,
              desc: `${i18nKeys.zhao_8}`,
            },
            {
              img: bg4,
              title: `${i18nKeys.zhao_9}`,
              desc: `${i18nKeys.zhao_10}`,
            },
            {
              img: bg5,
              title: `${i18nKeys.zhao_11}`,
              desc: `${i18nKeys.zhao_12}`,
            },
            {
              img: bg6,
              title: `${i18nKeys.zhao_13}`,
              desc: `${i18nKeys.zhao_14}`,
            },
          ])}
          <div
            className="w-980 h-65 mx-auto absolute inset-0 bottom-0 top-135"
            style={{
              backgroundImage: `url(${bg7})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div
        className="w-1320 h-215 mx-auto text-center mt-80 rounded-30 mb-80"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-36 text-44 text-white leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.zhao_15}
        </div>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#fff] p-18 rounded-25 text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#000]">{i18nKeys.zhao_16}</span>
          <img src={arrowRightBlack} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>
    </div>
  );
}
