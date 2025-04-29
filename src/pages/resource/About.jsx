import bg from "@/assets/about/bg.png";
import bg1 from "@/assets/about/bg1.png";
import bg2 from "@/assets/about/bg2.png";
import bg3 from "@/assets/about/bg3.png";
import bg4 from "@/assets/about/bg4.png";
import bg5 from "@/assets/about/bg5.png";
import bg6 from "@/assets/about/bg6.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import { Link } from "react-router-dom";
import img1 from "@/assets/qiyeka/img1.png";
import img2 from "@/assets/qiyeka/img2.png";
import img3 from "@/assets/qiyeka/img3.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Article from "@/components/Article";

const mapList3 = (data = []) => {
  return (
    <div className="w-1186 mx-auto flex justify-between text-center pt-80">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-274 h-385 ${item.color} pl-20 pr-20 pt-46 rounded-25 wow animate__animated animate__fadeInUp`}
          >
            <div className={`w-91 h-91 mx-auto ${item.imgBg} rounded-50`}>
              <img
                src={item.img}
                className="w-64 h-64 mx-auto relative top-14"
              />
            </div>
            <p
              className={`mt-41 mb-16 ${item.text} text-24 leading-24 font-bold line-clamp-1`}
            >
              {item.title}
            </p>
            <p
              className={`${localStorage.lang === "en" ? "h-60" : "h-40"} ${
                item.text1
              } text-14 leading-20 font-normal`}
            >
              {item.desc}
            </p>
            <Link
              to={item.path}
              className={`block mx-auto mt-16 ${
                localStorage.lang === "en" ? "w-180" : "w-145"
              } h-52 ${item.btnBg} p-18 text-center rounded-25 ${
                item.btnText
              } text-18 leading-16 hover:opacity-80 hover:cursor-pointer`}
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

export default function About() {
  return (
    <div>
      <div
        className={`w-full h-359 text-center text-white  wow animate__animated animate__fadeInUp`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className={`pt-99 mx-auto text-48 font-bold`}>{i18nKeys.about_1}</p>
        <p
          className={`${
            localStorage.lang === "en" ? "w-1000" : "w-678"
          } mx-auto text-16 leading-26 font-normal pt-10 opacity-80`}
        >
          {i18nKeys.about_2}
        </p>
      </div>

      <div className="w-full bg-white">
        <div>
          <div className="w-900 mx-auto pt-97 text-center text-[#141416] text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
            {i18nKeys.about_3}
          </div>
          {mapList3([
            {
              img: bg1,
              color: "bg-[#EDEDED]",
              imgBg: "bg-[#fff]",
              text: "text-[#141416]",
              text1: "text-[#000]",
              title: `${i18nKeys.about_4}`,
              btnBg: "bg-[#000000]",
              btnText: "text-white",
              btnContent: `${i18nKeys.about_6}`,
              btnImg: arrowRight,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.about_5}`,
              path: "/solution/largeenterprise",
            },
            {
              img: bg2,
              color: "bg-[#000]",
              imgBg: "bg-[rgba(255,255,255,0.2)]",
              text: "text-[#fff]",
              text1: "text-[#fff] opacity-80",
              title: `${i18nKeys.about_7}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#000]",
              btnContent: `${i18nKeys.about_9}`,
              btnImg: arrowRightBlack,
              btnHover: "hover:bg-[#000]",
              desc: `${i18nKeys.about_8}`,
              path: "/solution/smenterprises",
            },
            {
              img: bg3,
              color: "bg-[#FF5C01]",
              imgBg: "bg-[rgba(255,255,255,0.4)]",
              text: "text-[#fff]",
              text1: "text-[#fff] opacity-80",
              title: `${i18nKeys.about_10}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#000]",
              btnContent: `${i18nKeys.about_12}`,
              btnImg: arrowRightBlack,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.about_11}`,
              path: "/solution/accountantsfnancial",
            },
            {
              img: bg4,
              color: "bg-[#FF8541]",
              imgBg: "bg-[rgba(255,255,255,0.4)]",
              text: "text-[#fff]",
              text1: "text-[#fff]",
              title: `${i18nKeys.about_13}`,
              btnBg: "bg-[#fff]",
              btnText: "text-[#000]",
              btnContent: `${i18nKeys.about_15}`,
              btnImg: arrowRightBlack,
              btnHover: "hover:bg-[#FF5C01]",
              desc: `${i18nKeys.about_14}`,
              path: "/solution/nonprofit",
            },
          ])}
        </div>
      </div>

      <div className="w-full bg-[#000]">
        <div className="w-1320 text-white mt-80 mx-auto h-500q flex justify-between">
          <div className="w-700 h-500">
            <div
              className={`w-550 h-220 mx-auto ${
                localStorage.lang === "en" ? "mt-80" : "mt-110"
              } wow animate__animated animate__fadeInUp`}
            >
              <p className="w-480 text-48 leading-64 font-bold">
                {i18nKeys.about_16}
              </p>
              <p className="text-16 leading-24 font-normal mt-32 opacity-80">
                {i18nKeys.about_17}
              </p>
            </div>
          </div>
          <div className="w-650 h-500">
            <div
              className="w-550 h-500 mx-auto  wow animate__animated animate__fadeInUp"
              style={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg6})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-30" : "mt-74"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.about_18}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.about_19}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#000] p-18 pl-47 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 wow animate__animated animate__fadeInUp"
            >
              <span className="text-[#FCFCFD]">{i18nKeys.about_20}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-160 mb-80">
        <div
          className={`${
            localStorage.lang === "en" ? "w-900" : "w-700"
          } mx-auto flex justify-between wow animate__animated animate__fadeInUp`}
        >
          <div className="w-220 h-2 border-1 relative top-38"></div>
          <div
            className={`${
              localStorage.lang === "en" ? "w-500" : ""
            } text-center text-48 font-bold`}
          >
            {i18nKeys.about_21}
          </div>
          <div className="w-220 h-2 border-1 relative top-38"></div>
        </div>
        <div className="mt-60 mb-80">
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
    </div>
  );
}
