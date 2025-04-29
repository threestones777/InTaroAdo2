import bg from "@/assets/smenterprises/bg.png";
import bg1 from "@/assets/smenterprises/bg1.png";
import bg2 from "@/assets/smenterprises/bg2.png";
import bg3 from "@/assets/smenterprises/bg3.png";
import bg4 from "@/assets/smenterprises/bg4.png";
import bg5 from "@/assets/smenterprises/bg5.png";
import bg6 from "@/assets/smenterprises/bg6.png";
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
            className={`w-580 h-322 rounded-30 pt-34 px-35  wow animate__animated animate__fadeInUp`}
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
            <hr className="w-full border-t-1 mt-20 border-[#D8D8D8] opacity-30" />
            <p className="text-14 leading-24 font-normal mt-20">
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
    <div className="w-1120 mx-auto flex justify-between text-left pt-72 pb-127">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-350 h-300 ${item.color} ${item.text} rounded-25 pt-50 pl-20 pr-20 wow animate__animated animate__fadeInUp`}
          >
            <p className="mb-40 text-72 leading-72 font-medium">{item.num}</p>
            <p className="mb-16 text-24 leading-24 font-bold">{item.title}</p>
            <p
              className={`h-80 text-14 leading-20 font-normal ${item.opacity}`}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function SMEnterprises() {
  return (
    <div>
      <Topic
        p_t="pt-165"
        text_color="text-white"
        d_w="w-700"
        bg={bg}
        title={i18nKeys.sm_1}
        desc={i18nKeys.sm_2}
        path="/resource/recommended"
        btnText={i18nKeys.sm_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#F0F0F0]">
        <div
          className={`${
            localStorage.lang === "en" ? "w-1120" : "w-820"
          } mx-auto pt-80 text-center`}
        >
          <p className="text-48 leading-64 font-bold wow animate__animated animate__fadeInUp">
            {i18nKeys.sm_4}
          </p>
          <p className="text-24 leading-32 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.sm_5}
          </p>
        </div>
        {mapList3([
          {
            num: "01",
            color: "bg-[#fff]",
            text: "text-[#000]",
            title: `${i18nKeys.sm_6}`,
            desc: `${i18nKeys.sm_7}`,
            opacity: "",
          },
          {
            num: "02",
            color: "bg-[#FF5C01]",
            text: "text-[#fff]",
            title: `${i18nKeys.sm_8}`,
            desc: `${i18nKeys.sm_9}`,
            opacity: "opacity-80",
          },
          {
            num: "03",
            color: "bg-[#FF8541]",
            text: "text-[#fff]",
            title: `${i18nKeys.sm_10}`,
            desc: `${i18nKeys.sm_11}`,
            opacity: "opacity-80",
          },
        ])}
      </div>

      <div className="w-full h-429 bg-[#000] flex justify-end">
        <div
          className={`${
            localStorage.lang === "en" ? "pt-70" : "pt-111"
          } pr-5 text-white wow animate__animated animate__fadeInUp`}
        >
          <p className="w-560 text-48 leading-64 font-bold">{i18nKeys.sm_12}</p>
          <p className="w-560 opacity-80 text-16 leading-24 font-normal mt-32">
            {i18nKeys.sm_13}
          </p>
        </div>
        <div
          className="w-[50%] h-429 wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
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
              localStorage.lang === "en" ? "mt-70" : "mt-102"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.sm_14}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.sm_15}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-80 mb-88 text-white">
        {mapList2([
          {
            bg: bg3,
            pic: bg5,
            title: `${i18nKeys.sm_16}`,
            name: `${i18nKeys.sm_17}`,
          },
          {
            bg: bg4,
            pic: bg6,
            title: `${i18nKeys.sm_18}`,
            name: `${i18nKeys.sm_19}`,
          },
        ])}
      </div>

      <div className="w-full h-258 mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.sm_20}
        </div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]  wow animate__animated animate__fadeInUp">
          {i18nKeys.sm_21}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.sm_22}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>
    </div>
  );
}
