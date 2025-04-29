import bg from "@/assets/contactsales/bg.png";
import bg1 from "@/assets/forexcalculator/bg1.png";
import bg2 from "@/assets/forexcalculator/bg2.png";
import bg3 from "@/assets/forexcalculator/bg3.png";
import hk from "@/assets/forexcalculator/hk.png";
import am from "@/assets/forexcalculator/am.png";
import arrowRight from "@/assets/arrow-right.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useState } from "react";

export default function ForexCalculator() {
  const [inputValue, setInputValue] = useState(500);
  const [inputValue2, setInputValue2] = useState(311.71);
  const handleChange = (event) => {
    setInputValue(event.target.value);
    let num1 = event.target.value * 0.629401;
    let num2 = num1 * 0.0095;
    setInputValue2(num1 - num2);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
    let num1 = event.target.value / (0.629401 * (1 - 0.0095));
    setInputValue(Number(num1));
  };
  return (
    <div>
      <div
        className={`w-full h-940 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-83 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.cal_1}
        </p>
        <p
          className={`${
            localStorage.lang === "en" ? "w-800" : "w-560"
          } mx-auto text-24 leading-30 font-normal pt-18  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.cal_2}
        </p>
        <div className="w-960 h-648 mx-auto bg-[#000] mt-59 text-left rounded-tl-50 rounded-tr-50 flex justify-between overflow-hidden wow animate__animated animate__fadeInUp">
          <div className="w-550 h-full text-white pt-154 pl-76">
            <p className="text-36 leading-48 font-bold wow animate__animated animate__fadeInUp">
              {i18nKeys.cal_3}
            </p>
            <img
              src={bg1}
              className={`w-417 h-319 ${
                localStorage.lang === "en" ? "mt-30" : "mt-60"
              } wow animate__animated animate__fadeInUp`}
            />
          </div>
          <div className="w-410 h-full bg-[#fff] relative">
            <form className="w-334 h-390 text-[#333] text-14 leading-16 font-medium ml-40 mr-40 mt-82 relative">
              <span className="absolute top-40 left-18 text-[#000] text-18 leading-15 font-bold">
                HKD
              </span>
              <p className="flex absolute top-40 right-20">
                <img src={hk} className="w-24 h-24 mr-10 relative bottom-3" />
                <span className="font-medium">{i18nKeys.cal_5}</span>
              </p>
              <p>{i18nKeys.cal_4}</p>
              <input
                type="number"
                min="0"
                id="name"
                name="name"
                value={Math.round(inputValue * 100) / 100}
                onChange={handleChange}
                step="0.01"
                required
                className="bg-[#F0F0F0] w-334 h-46 mt-8 p-15 pl-60 pr-94 rounded-15 text-[#000] text-18 leading-15 font-bold"
              />
              <div
                className={`${
                  localStorage.lang === "en" ? "w-365" : "w-311"
                } h-200 border-l-2 border-[#EDEDED]  relative left-23 mt-15 mb-15`}
              >
                <div className="relative right-25 pt-50 flex">
                  <div className="w-48 h-48 bg-[#EDEDED] rounded-50">
                    <img
                      src={bg2}
                      className="w-18 h-18 mx-auto relative top-15"
                    />
                  </div>
                  <p className="relative top-10">
                    <span className="ml-20 text-[#888] text-14 leading-30 font-normal">
                      {i18nKeys.cal_6}
                    </span>
                    <span className="ml-12 text-[#333] text-14 leading-30 font-bold">
                      {i18nKeys.cal_7}
                    </span>
                  </p>
                </div>
                <div className="relative right-25 pt-10 flex">
                  <div className="w-48 h-48 bg-[#EDEDED] rounded-50">
                    <img
                      src={bg3}
                      className="w-18 h-18 mx-auto relative top-15"
                    />
                  </div>
                  <p className="relative top-10">
                    <span className="ml-20 text-[#888] text-14 leading-30 font-normal">
                      {i18nKeys.cal_8}
                    </span>
                    <span className="ml-12 text-[#333] text-14 leading-30 font-bold">
                      {i18nKeys.cal_9}
                    </span>
                  </p>
                </div>
              </div>
              <p>{i18nKeys.cal_11}</p>
              <input
                type="number"
                min="0"
                id="name2"
                name="name2"
                value={Math.round(inputValue2 * 100) / 100}
                onChange={handleChange2}
                step="0.01"
                required
                className="bg-[#F0F0F0] w-334 h-46 mt-8 p-15 pl-30 pr-94 rounded-15 text-[#000] text-18 leading-15 font-bold"
              />
              <span className="absolute bottom-35 left-18 text-[#000] text-18 leading-15 font-bold">
                $
              </span>
              <p className="flex absolute bottom-25 right-20">
                <img src={am} className="w-24 h-24 mr-10 relative bottom-3" />
                <span className="font-medium">{i18nKeys.cal_11}</span>
              </p>
            </form>
            <div className="w-410 h-145 bg-[#EDEDED] absolute bottom-0 rounded-tr-30 text-left pl-40 wow animate__animated animate__fadeInUp">
              <p
                className={`text-[#888] ${
                  localStorage.lang === "en" ? "mt-20" : "mt-46"
                } text-24 leading-30 font-normal`}
              >
                <span>{i18nKeys.cal_12}</span>
                <span className="text-[#000] font-bold ml-5 mr-5">
                  {i18nKeys.cal_13}
                </span>
                <span>{i18nKeys.cal_14}</span>
              </p>
              <p className="text-[#666] mt-5 text-16 leading-18 font-normal">
                {i18nKeys.cal_15}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-80 text-center">
        <div className="w-1200 mx-auto text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.cal_16}
        </div>
        <Link
          to="/resource/recommended"
          className={`block ${
            localStorage.lang === "en" ? "w-180" : "w-145"
          } h-52 bg-[#000] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp`}
        >
          <span>{i18nKeys.cal_17}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="text-[#000] text-16 leading-24 font-normal mt-32 mb-72 wow animate__animated animate__fadeInUp">
          {i18nKeys.cal_18}
        </p>
      </div>
    </div>
  );
}
