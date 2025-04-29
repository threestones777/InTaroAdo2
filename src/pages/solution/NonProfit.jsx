import bg from "@/assets/nonprofit/bg.png";
import bg1 from "@/assets/nonprofit/bg1.png";
import bg2 from "@/assets/nonprofit/bg2.png";
import bg3 from "@/assets/nonprofit/bg3.png";
import bg4 from "@/assets/nonprofit/bg4.png";
import bg5 from "@/assets/nonprofit/bg5.png";
import bg6 from "@/assets/nonprofit/bg6.png";
import bg7 from "@/assets/nonprofit/bg7.png";
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
    <div className="w-1120 mx-auto flex justify-between text-left pt-45 pb-113">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-350 h-300 ${item.color} ${item.text} rounded-25 pt-50 pl-20 pr-20  wow animate__animated animate__fadeInUp`}
          >
            <p className="mb-40 text-72 leading-72 font-medium">{item.num}</p>
            <p className="mb-16 text-24 leading-24 font-bold">{item.title}</p>
            <p className="h-80 text-14 leading-20 font-normal opacity-80">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function NonProfit() {
  return (
    <div>
      <Topic
        p_t="pt-163"
        text_color="text-white"
        d_w="w-680"
        bg={bg}
        title={i18nKeys.no_1}
        desc={i18nKeys.no_2}
        path="/resource/recommended"
        btnText={i18nKeys.no_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#F0F0F0]">
        <div className="w-820 mx-auto pt-80 text-center">
          <p className="text-48 leading-64 font-boid  wow animate__animated animate__fadeInUp">
            {i18nKeys.no_4}
          </p>
        </div>
        {mapList3([
          {
            num: "01",
            color: "bg-[#fff]",
            text: "text-[#000]",
            title: `${i18nKeys.no_5}`,
            desc: `${i18nKeys.no_6}`,
          },
          {
            num: "02",
            color: "bg-[#FF5C01]",
            text: "text-[#fff]",
            title: `${i18nKeys.no_7}`,
            desc: `${i18nKeys.no_8}`,
          },
          {
            num: "03",
            color: "bg-[#FF8541]",
            text: "text-[#fff]",
            title: `${i18nKeys.no_9}`,
            desc: `${i18nKeys.no_10}`,
          },
        ])}
      </div>

      <div className="w-full mx-auto h-500 bg-[#FF5C01] flex justify-center">
        <div className="w-700 h-500 text-white rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-100" : "mt-142"
            }  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.no_11}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.no_12}
            </p>
            <Link
              to="/resource/recommended"
              className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:opacity-80 hover:cursor-pointer mt-20  wow animate__animated animate__fadeInUp"
            >
              <span>{i18nKeys.no_13}</span>
              <img
                src={arrowRightBlack}
                className="inline-block w-20 h-20 ml-12"
              />
            </Link>
          </div>
        </div>
        <div className="w-650 h-500 ml-113">
          <div
            className="w-550 h-500 mx-auto mr-100  wow animate__animated animate__fadeInUp"
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
              localStorage.lang === "en" ? "mt-80" : "mt-134"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.no_14}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.no_15}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-700 h-412 rounded-tr-35 rounded-br-35">
          <div
            className={`w-550 h-220 mx-auto ${
              localStorage.lang === "en" ? "mt-30" : "mt-78"
            }`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.no_16}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.no_17}
            </p>
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

      <div className="w-full mt-80 mb-88 text-white">
        {mapList2([
          {
            bg: bg4,
            pic: bg6,
            title: `${i18nKeys.no_18}`,
            name: `${i18nKeys.no_19}`,
          },
          {
            bg: bg5,
            pic: bg7,
            title: `${i18nKeys.no_20}`,
            name: `${i18nKeys.no_21}`,
          },
        ])}
      </div>

      <div>
        <div className="w-800 mx-auto text-center">
          <p className="text-48 leading-64 font-bold mt-80 wow animate__animated animate__fadeInUp">
            {i18nKeys.no_22}
          </p>
          <p className="text-24 leading-24 font-normal mt-10 wow animate__animated animate__fadeInUp">
            {i18nKeys.no_23}
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

      <div className="w-full mx-auto text-[#141416] text-center wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold">{i18nKeys.no_24}</div>
        <p className="mt-10 mx-auto text-16 leading-24 font-normal text-[#000]">
          {i18nKeys.no_25}
        </p>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto"
        >
          <span className="text-[#FCFCFD]">{i18nKeys.no_26}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="mt-32 mx-auto text-16 leading-24 font-normal text-[#000] mb-93">
          {i18nKeys.no_27}
        </p>
      </div>
    </div>
  );
}
