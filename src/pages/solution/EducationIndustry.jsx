import bg from "@/assets/educationindustry/bg.png";
import bg1 from "@/assets/educationindustry/bg1.png";
import bg2 from "@/assets/educationindustry/bg2.png";
import bg3 from "@/assets/educationindustry/bg3.png";
import bg4 from "@/assets/educationindustry/bg4.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
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

export default function EducationIndustry() {
  return (
    <div>
      <Topic
        p_t="pt-165"
        text_color="text-white"
        d_w="w-690"
        bg={bg}
        title={i18nKeys.edu_1}
        desc={i18nKeys.edu_2}
        path="/resource/recommended"
        btnText={i18nKeys.edu_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-1320 mt-80 mx-auto h-502 rounded-35 bg-[#000] flex justify-between">
        <div className="w-700 h-500 text-white">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-100" : "mt-127"
            }  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.edu_4}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.edu_5}
            </p>
            <Link
              to="/products/debitcard"
              className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-20 wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.edu_6}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
        <div className="w-550 h-412">
          <div
            className="w-550 h-412 mx-auto mr-100 mt-36  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
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
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-90" : "mt-134"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.edu_7}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.edu_8}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-50" : "mt-98"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.edu_9}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.edu_10}
            </p>
            <Link
              to="/products/realtimeinfor"
              className="block w-206 h-52 bg-[#000] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.edu_11}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
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
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-80" : "mt-134"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.edu_12}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.edu_13}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-800 mx-auto text-center">
          <p className="text-48 leading-64 font-bold mt-80 wow animate__animated animate__fadeInUp">
            {i18nKeys.edu_14}
          </p>
          <p className="text-24 leading-24 font-normal mt-10 wow animate__animated animate__fadeInUp">
            {i18nKeys.edu_15}
          </p>
        </div>
        <div className="mt-40 mb-120">
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

      <div className="w-full mt-120 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold">{i18nKeys.edu_16}</div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]">
          {i18nKeys.edu_17}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.edu_18}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="mt-32 mx-auto text-16 leading-24 font-normal text-[#000] mb-93">
          {i18nKeys.edu_19}
        </p>
      </div>
    </div>
  );
}
