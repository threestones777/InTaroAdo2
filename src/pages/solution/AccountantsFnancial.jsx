import bg from "@/assets/accountantsfnancial/bg.png";
import bg1 from "@/assets/accountantsfnancial/bg1.png";
import bg2 from "@/assets/accountantsfnancial/bg2.png";
import bg8 from "@/assets/accountantsfnancial/bg8.png";
import bg3 from "@/assets/accountantsfnancial/bg3.png";
import bg4 from "@/assets/accountantsfnancial/bg4.png";
import bg5 from "@/assets/accountantsfnancial/bg5.png";
import bg6 from "@/assets/accountantsfnancial/bg6.png";
import bg9 from "@/assets/largeenterprise/bg9.png";
import bg10 from "@/assets/largeenterprise/bg10.png";
import bg11 from "@/assets/largeenterprise/bg11.png";
import bg12 from "@/assets/largeenterprise/bg12.png";
import bg13 from "@/assets/largeenterprise/bg13.png";
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
            <hr className="w-full border-1 mt-20 border-[#D8D8D8] opacity-30" />
            <p className="text-14 leading-24 font-normal mt-20 opacity-80">
              <span>{item.name}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList4 = (data = []) => {
  return (
    <div className="w-1120 mx-auto rounded-20 flex justify-between wow animate__animated animate__fadeInUp">
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

export default function AccountantsFnancial() {
  return (
    <div>
      <Topic
        p_t="pt-165"
        text_color="text-white"
        bg={bg}
        title={i18nKeys.money_1}
        desc={i18nKeys.money_2}
        path="/resource/recommended"
        btnText={i18nKeys.money_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-1320 mx-auto text-center bg-[#EDEDED] rounded-35 mt-80 pb-90">
        <div className="text-48 leading-64 font-bold text-[#000] pt-80 pb-45 wow animate__animated animate__fadeInUp">
          {i18nKeys.money_4}
        </div>
        {mapList4([
          {
            img: bg9,
            title: `${i18nKeys.money_5}`,
          },
          {
            img: bg10,
            title: `${i18nKeys.money_6}`,
          },
          {
            img: bg11,
            title: `${i18nKeys.money_7}`,
          },
          {
            img: bg12,
            title: `${i18nKeys.money_8}`,
          },
          {
            img: bg13,
            title: `${i18nKeys.money_9}`,
          },
        ])}
      </div>

      <div className="w-full mt-80 mx-auto h-500 bg-[#E1641F] flex justify-center">
        <div className="w-750 h-500">
          <div
            className="w-550 h-500 mx-auto  wow animate__animated animate__fadeInUp"
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
              localStorage.lang === "en" ? "mt-130" : "mt-178"
            } ml-20  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.money_10}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.money_11}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-80 mb-40 text-white">
        {mapList2([
          {
            bgColor: "",
            bg: bg3,
            pic: bg5,
            title: `${i18nKeys.money_12}`,
            name: `${i18nKeys.money_13}`,
          },
          {
            bgColor: "",
            bg: bg4,
            pic: bg6,
            title: `${i18nKeys.money_15}`,
            name: `${i18nKeys.money_16}`,
          },
        ])}
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div className="w-550 h-220 mx-auto mt-102">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.money_17}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.money_18}
            </p>
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
        className="w-1180 h-178 mt-80 mx-auto wow animate__animated animate__fadeInUp"
        style={{
          backgroundImage: `url(${bg8})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-full mt-120 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold">{i18nKeys.money_19}</div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]">
          {i18nKeys.money_20}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.money_21}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="mt-32 mx-auto text-16 leading-24 font-normal text-[#000] mb-93">
          {i18nKeys.money_22}
        </p>
      </div>
    </div>
  );
}
