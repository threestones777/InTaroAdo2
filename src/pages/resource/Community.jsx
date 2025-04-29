import bg from "@/assets/community/bg.png";
import bg1 from "@/assets/community/bg1.png";
import bg2 from "@/assets/community/bg2.png";
import bg3 from "@/assets/community/bg3.png";
import arrowRight from "@/assets/arrow-right.png";
import img1 from "@/assets/qiyeka/img1.png";
import img2 from "@/assets/qiyeka/img2.png";
import img3 from "@/assets/qiyeka/img3.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Article from "@/components/Article";

export default function Community() {
  return (
    <div>
      <div
        className={`w-full h-359 text-center text-white wow animate__animated animate__fadeInUp`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className={`pt-118 mx-auto text-48 font-bold`}>
          {i18nKeys.community_1}
        </p>
        <p className={`w-678 mx-auto text-24 leading-48 font-normal pt-10`}>
          {i18nKeys.community_2}
        </p>
      </div>

      <div
        className="w-1320 mt-80 mx-auto h-420 rounded-35 flex justify-between"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-550 h-402">
          <div className="w-373 h-304 mx-auto mr-100 mt-112  wow animate__animated animate__fadeInUp"></div>
        </div>
        <div className="w-700 h-500 text-white">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-70" : "mt-102"
            }  wow animate__animated animate__fadeInUp`}
          >
            <p
              className="text-48 leading-64 font-bold line-clamp-2"
              title={i18nKeys.community_3}
            >
              {i18nKeys.community_3}
            </p>
            <p
              className="opacity-80 text-16 leading-24 font-normal mt-32 line-clamp-2"
              title={i18nKeys.community_4}
            >
              {i18nKeys.community_4}
            </p>
            <Link
              to="/resource/recommended"
              className={`block ${
                localStorage.lang === "en" ? "w-230" : "w-206"
              } h-52 bg-[#141416] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:cursor-pointer hover:bg-[#FF5C01] mt-20  wow animate__animated animate__fadeInUp`}
            >
              <span>{i18nKeys.community_5}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div className="w-550 mx-auto mt-74 wow animate__animated animate__fadeInUp line-clamp-2">
            <p className="text-48 leading-64 font-bold">
              {i18nKeys.community_6}
            </p>
            <p
              title={i18nKeys.community_7}
              className="text-16 leading-24 font-normal mt-32 text-[#000] line-clamp-4"
            >
              {i18nKeys.community_7}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#000] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.community_8}</span>
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

      <div
        className="w-1180 h-215 mt-80 mx-auto text-center wow rounded-25 animate__animated animate__fadeInUp"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={` mx-auto text-36 leading-44 font-bold text-white pt-70`}
        >
          {i18nKeys.community_9}
        </div>
        <div
          className={`mx-auto pt-10 text-16 leading-44 font-normal text-white opacity-80`}
        >
          {i18nKeys.community_10}
        </div>
      </div>

      <div className="w-full mt-120 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="w-1400 mx-auto text-48 leading-64 font-bold">
          {i18nKeys.community_11}
        </div>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.community_12}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="mt-32 mx-auto text-16 leading-24 font-normal text-[#000] mb-93">
          {i18nKeys.community_13}
        </p>
      </div>

      <div className="mb-80">
        <div className="w-900 mx-auto flex justify-between wow animate__animated animate__fadeInUp">
          <div className="w-220 h-2 border-1 relative top-40"></div>
          <div
            className={`${
              localStorage.lang === "en" ? "w-500" : ""
            } text-center text-48 font-bold`}
          >
            {i18nKeys.community_14}
          </div>
          <div className="w-220 h-2 border-1 relative top-40"></div>
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
