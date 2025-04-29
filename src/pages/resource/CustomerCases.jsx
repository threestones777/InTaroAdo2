import bg from "@/assets/customercases/bg.png";
import bg1 from "@/assets/customercases/bg1.png";
import bg2 from "@/assets/customercases/bg2.png";
import bg3 from "@/assets/customercases/bg3.png";
import bg4 from "@/assets/customercases/bg4.png";
import bg5 from "@/assets/customercases/bg5.png";
import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Partner from "@/components/Partner";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
const images = [partner1, partner2, partner3, partner4, partner5];

export default function CustomerCases() {
  return (
    <div>
      <div
        className={`w-full h-300 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-93 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.case_1}
        </p>
        <p
          className={`mx-auto text-24 leading-48 font-normal pt-10  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.case_2}
        </p>
      </div>

      <div className="mt-80">
        <div className="mb-43 text-[#141416] text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full mt-80 mx-auto h-500 bg-[#000] flex justify-center">
        <div className="w-750 h-500">
          <div
            className="w-550 h-500 mx-auto wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-500 text-white rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-110" : "mt-166"
            } ml-20  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.case_3}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.case_4}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justify-between">
        <div className="w-700 h-412">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en"
                ? "mt-100"
                : "mt-122  wow animate__animated animate__fadeInUp"
            }`}
          >
            <p className="w-550 text-48 leading-64 font-bold">
              {i18nKeys.case_5}
            </p>
            <p className="text-16 leading-24 font-normal mt-32 text-[#000]">
              {i18nKeys.case_6}
            </p>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-513 flex justifu-between">
        <div className="w-660 h-513 bg-[#F1F1F1]">
          <div
            className="w-550 h-412 mx-auto mt-50 wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-660 h-513 bg-[#FF5C01] text-white">
          <div
            className={`w-550 h-220 ml-68 ${
              localStorage.lang === "en" ? "mt-110" : "mt-146"
            }  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.case_7}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.case_8}
            </p>
            <Link
              to="/resource/recommended"
              className={`block w-206 h-52 bg-[#FFF] p-18 rounded-25 text-center text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-30 wow animate__animated animate__fadeInUp`}
            >
              <span className="text-[#000]">{i18nKeys.case_9}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justifu-between">
        <div className="w-660 h-412 bg-[#fff]">
          <div className="w-550 h-220 ml-68 mt-94">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.case_10}
            </p>
            <p className="text-16 leading-24 font-normal mt-32 wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.case_11}
            </p>
            <Link
              to="/products/debitcard"
              className={`block ${
                localStorage.lang === "en" ? "w-250" : "w-206"
              } h-52 bg-[#141416] p-18 rounded-25 text-center text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-30 wow animate__animated animate__fadeInUp`}
            >
              <span className="text-[#FCFCFD]">{i18nKeys.case_12}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
        </div>
        <div className="w-660 h-412">
          <div
            className="w-550 h-412 mx-auto wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg4})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div
        className="w-1320 h-334 mx-auto text-center mt-80"
        style={{
          backgroundImage: `url(${bg5})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-63 text-48 text-white leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.case_13}
        </div>
        <p
          className={`${
            localStorage.lang === "en" ? "w-800" : "w-550"
          } mt-16 mx-auto text-white text-16 leading-24 font-normal wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.case_14}
        </p>
        <Link
          to="/products/realtimeinfor"
          className="block w-244 h-52 bg-[#fff] p-18 rounded-25 text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#000]">{i18nKeys.case_15}</span>
          <img src={arrowRightBlack} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>

      <div className="w-full h-338 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="pt-80 text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.case_16}
        </div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]  wow animate__animated animate__fadeInUp">
          {i18nKeys.case_17}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.case_18}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>
    </div>
  );
}
