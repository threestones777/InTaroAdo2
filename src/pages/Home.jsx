import Footer from "@/components/Footer";
import i18n from "@/i18n/i18n.js";
import bg from "@/assets/home/bg.png";
import bg2 from "@/assets/home/bg2.png";
import bg3 from "@/assets/home/bg3.png";
import bg4 from "@/assets/home/bg4.png";
import bg5 from "@/assets/home/bg5.png";
import bg6 from "@/assets/home/bg6.png";
import bg7 from "@/assets/home/bg7.png";
import bg8 from "@/assets/home/bg8.png";
import bg9 from "@/assets/home/bg9.png";
import bg10 from "@/assets/home/bg10.png";
import bg11 from "@/assets/home/bg11.png";
import bg12 from "@/assets/home/bg12.png";
import bg13 from "@/assets/home/bg13.png";
import bg14 from "@/assets/home/bg14.png";
import bg15 from "@/assets/home/bg15.png";
import bg16 from "@/assets/home/bg16.png";
import bg17 from "@/assets/home/bg17.png";
import bg18 from "@/assets/home/bg18.png";
import bg19 from "@/assets/home/bg19.png";
import bg20 from "@/assets/home/bg20.png";
import arrowRight from "@/assets/arrow-right.png";
import button1 from "@/assets/button1.png";
import button2 from "@/assets/button2.png";
import { Link } from "react-router-dom";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Partner from "@/components/Partner";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
const images = [partner1, partner2, partner3, partner4, partner5];

const mapList = (data = []) => {
  return (
    <div className="w-1138 mx-auto grid grid-cols-2 justify-items-center">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-540 ${item.bgColor} mb-39 wow animate__animated animate__fadeInUp`}
          >
            <div
              className={`w-full h-314 ${item.position1}`}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: `${item.position2}`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="w-full pb-22 bg-white flex">
              <div className="w-450 mt-22 ml-20">
                <p className="text-24 leading-24 font-bold">{item.title}</p>
                <p
                  className="w-435 mt-16 text-14 text-[#000] line-clamp-1"
                  title={item.desc}
                >
                  {item.desc}
                </p>
              </div>
              <Link
                to={item.path}
                className="w-72 h-72 bg-[image:var(--bg-image)] hover:bg-[image:var(--hover-image)] bg-cover bg-center hover:cursor-pointer relative top-20 right-15"
                style={{
                  "--bg-image": `url(${button1})`,
                  "--hover-image": `url(${button2})`,
                }}
              ></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapList2 = (data = []) => {
  return (
    <div className="w-full h-800 mt-120 grid grid-cols-2 gap-20">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-312 h-418 border-1 border-[#ccc] rounded-25 px-28  wow animate__animated animate__fadeInUp"
          >
            <div className="w-91 h-91 mt-48 p-22 bg-[#EDEDED] rounded-15">
              <img src={item.img} className="w-48 h-48" />
            </div>
            <div className="h-48 text-24 leading-24 font-bold mt-41">
              {item.title}
            </div>
            <div
              className="h-60 text-14 leading-20 font-normal mt-16 mb-18 line-clamp-3"
              title={item.desc}
            >
              {item.desc}
            </div>
            <Link
              to={item.path}
              className={`block ${
                localStorage.lang === "en" ? "w-200" : "w-145"
              } h-48 bg-[#000] p-16 text-center rounded-90 text-[#FCFCFD] text-16 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mr-20`}
            >
              <span>{item.button}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-15" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapList3 = (data = []) => {
  return (
    <div className="w-1120 flex justify-between text-center pb-122">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-192 h-388 ${item.color} rounded-15  wow animate__animated animate__fadeInUp`}
          >
            <img src={item.img} className="w-120 h-120 mx-auto mt-57 mb-46" />
            <p className={`mb-17 text-20 leading-23 font-bold ${item.text}`}>
              {item.title}
            </p>
            <p
              className={`pl-12 pr-12 text-16 leading-20 font-normal ${item.text1}`}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="bg-[#EDEDED] w-full h-586 flex justify-center">
        <div className="text-[#000]  relative left-5">
          <div
            className={`${
              localStorage.lang === "en" ? "pt-110" : "pt-158"
            } pl-161`}
          >
            <p
              className={`${
                localStorage.lang === "en" ? "w-700" : "w-548"
              } text-72 leading-96 font-bold mb-32  wow animate__animated animate__fadeInUp`}
            >
              {i18nKeys.home_1}
            </p>
            <p
              className={`${
                localStorage.lang === "en" ? "w-700" : "w-550"
              } text-16 leading-24 font-normal wow animate__animated animate__fadeInUp`}
            >
              {i18nKeys.home_2}
            </p>
            <div className="h-52 mt-52 flex  wow animate__animated animate__fadeInUp">
              <Link
                to="/resource/recommended"
                className={`block ${
                  localStorage.lang === "en" ? "w-180" : "w-160"
                } h-52 bg-[#000] p-18 text-center rounded-25 text-white text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mr-20`}
              >
                <span>{i18nKeys.home_3}</span>
                <img
                  src={arrowRight}
                  className="inline-block w-20 h-20 ml-12"
                />
              </Link>
              <Link
                to="/resource/customercases"
                className={`block ${
                  localStorage.lang === "en" ? "w-180" : "w-160"
                } h-52 bg-[#000] p-18 text-center rounded-25 text-white text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer`}
              >
                <span>{i18nKeys.home_4}</span>
                <img
                  src={arrowRight}
                  className="inline-block w-20 h-20 ml-12"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-740 h-660 bg-[0px_-70px]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="mt-75">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full bg-[#FF5C01] h-540 flex justify-center">
        <div
          className="w-460 h-540 ml-161  wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-[#fff]">
          <div className="mt-198 ml-109 w-555 wow animate__animated animate__fadeInUp">
            <p className="text-48 leading-64 font-bold mb-32">
              {i18nKeys.home_5}
            </p>
            <p className="text-16 leading-24 font-normal opacity-80">
              {i18nKeys.home_6}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EDEDED] text-[#141416] pb-110">
        <div
          className={`${
            localStorage.lang === "en" ? "w-800" : "w-652"
          } mx-auto text-48 leading-64 font-bold text-center pt-69 wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.home_7}
        </div>
        <div className="text-24 leading-32 font-normal text-center mt-20 mb-87  wow animate__animated animate__fadeInUp">
          {i18nKeys.home_8}
        </div>
        {mapList([
          {
            bg: bg3,
            bgColor: "bg-[#FF8541]",
            title: `${i18nKeys.home_9}`,
            position1: "bg-[-80px_-80px]",
            position2: "130% 190%",
            desc: `${i18nKeys.home_10}`,
            path: "/products/qiCard",
          },
          {
            bg: bg4,
            bgColor: "bg-[#FF8541]",
            title: `${i18nKeys.home_11}`,
            position1: "bg-[0px_0px]",
            position2: "100% 100%",
            desc: `${i18nKeys.home_12}`,
            path: "/products/createManage",
          },
          {
            bg: bg5,
            bgColor: "bg-[#EDEDED]",
            title: `${i18nKeys.home_13}`,
            position1: "bg-[0px_0px]",
            position2: "100% 100%",
            desc: `${i18nKeys.home_14}`,
            path: "/products/orderPay",
          },
          {
            bg: bg6,
            bgColor: "bg-[#FF8541]",
            title: `${i18nKeys.home_15}`,
            position1: "bg-[0px_0px]",
            position2: "100% 100%",
            desc: `${i18nKeys.home_16}`,
            path: "/products/reimbursement",
          },
        ])}
      </div>

      <div className="w-full relative">
        <div
          className="w-266 h-320 absolute"
          style={{
            backgroundImage: `url(${bg19})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-1118 mx-auto flex justify-between  text-[#000]">
          <div className="w-448">
            <p className="text-48 leading-64 font-bold mt-210  wow animate__animated animate__fadeInUp">
              {i18nKeys.home_17}
            </p>
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.home_017}
            </p>
            <p className="w-full text-16 leading-20 font-normal mt-32  wow animate__animated animate__fadeInUp">
              {i18nKeys.home_18}
            </p>
            <div
              className="w-448 h-508 mt-39 mb-140  wow animate__animated animate__fadeInUp"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="w-644 h-888">
            {mapList2([
              {
                img: bg8,
                title: `${i18nKeys.home_19}`,
                desc: `${i18nKeys.home_20}`,
                button: `${i18nKeys.home_21}`,
                path: "/products/budgetcontrol",
              },
              {
                img: bg9,
                title: `${i18nKeys.home_22}`,
                desc: `${i18nKeys.home_23}`,
                button: `${i18nKeys.home_24}`,
                path: "/products/processreport",
              },
              {
                img: bg10,
                title: `${i18nKeys.home_25}`,
                desc: `${i18nKeys.home_26}`,
                button: `${i18nKeys.home_27}`,
                path: "/resource/recommended",
              },
              {
                img: bg11,
                title: `${i18nKeys.home_28}`,
                desc: `${i18nKeys.home_29}`,
                button: `${i18nKeys.home_30}`,
                path: "/products/realtimeinfor",
              },
            ])}
          </div>
        </div>
        <div
          className="w-266 h-320 absolute right-0 bottom-0"
          style={{
            backgroundImage: `url(${bg20})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="w-full bg-[#EDEDED]">
        <div className="w-1120 mx-auto">
          <div className="text-[#141416] pt-124 pb-58 text-center">
            <p className="text-48 leading-64 font-bold">{i18nKeys.home_31}</p>
            <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
              {i18nKeys.home_32}
            </p>
          </div>
          <div className="w-400 mx-auto flex justify-center pb-69  wow animate__animated animate__fadeInUp">
            <Link
              to="/resource/contactsales"
              className={`block ${
                localStorage.lang === "en" ? "w-250" : "w-170"
              } h-52 bg-[#000] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mr-20`}
            >
              <span>{i18nKeys.home_33}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
            <Link
              to="/resource/recommended"
              className={`block ${
                localStorage.lang === "en" ? "w-200" : "w-170"
              } h-52 bg-[#000] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer`}
            >
              <span>{i18nKeys.home_34}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </Link>
          </div>
          {mapList3([
            {
              img: bg12,
              color: "bg-[#fff]",
              text: "text-[#333]",
              text1: "text-[#000]",
              title: `${i18nKeys.home_35}`,
              desc: `${i18nKeys.home_36}`,
            },
            {
              img: bg13,
              color: "bg-[#FF8948]",
              text: "text-[#fff]",
              text1: "text-[#fff] opacity-80",
              title: `${i18nKeys.home_37}`,
              desc: `${i18nKeys.home_38}`,
            },
            {
              img: bg14,
              color: "bg-[#fff]",
              text: "text-[#333]",
              text1: "text-[#000]",
              title: `${i18nKeys.home_39}`,
              desc: `${i18nKeys.home_40}`,
            },
            {
              img: bg15,
              color: "bg-[#FF5C01]",
              text: "text-[#fff]",
              text1: "text-[#fff] opacity-80",
              title: `${i18nKeys.home_41}`,
              desc: `${i18nKeys.home_42}`,
            },
            {
              img: bg16,
              color: "bg-[#fff]",
              text: "text-[#333]",
              text1: "text-[#000]",
              title: `${i18nKeys.home_43}`,
              desc: `${i18nKeys.home_44}`,
            },
          ])}
        </div>
      </div>

      <div
        className="w-full h-452 flex justify-between overflow-hidden"
        style={{
          backgroundImage: `url(${bg17})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[50%] px-40">
          <div className="text-[#fff] float-right">
            <div className="pt-110 pl-139">
              <p className="w-548 text-48 leading-64 font-bold mb-32  wow animate__animated animate__fadeInUp">
                {i18nKeys.home_45}
              </p>
              <p className="w-548 text-16 leading-24 font-normal opacity-80">
                {i18nKeys.home_46}
              </p>
              <div className="w-340 h-52 mt-37 flex">
                <Link
                  to="/resource/recommended"
                  className={`block ${
                    localStorage.lang === "en" ? "w-200" : "w-160"
                  } h-52 bg-[#FF5C01] p-18 text-center rounded-25 text-white text-18 leading-16 hover:bg-[#000] hover:cursor-pointer mr-20  wow animate__animated animate__fadeInUp`}
                >
                  <span>{i18nKeys.home_47}</span>
                  <img
                    src={arrowRight}
                    className="inline-block w-20 h-20 ml-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-690 h-452 wow animate__animated animate__fadeInUp"
          style={{
            backgroundImage: `url(${bg18})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="pt-80 text-center">
        <div className="w-1200 mx-auto text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
          {i18nKeys.home_48}
        </div>
        <Link
          to="/resource/recommended"
          className="block w-244 h-52 bg-[#FF5C01] p-18 text-center rounded-25 text-[#FCFCFD] text-18 leading-16 hover:bg-[#000] hover:cursor-pointer mt-32 mx-auto  wow animate__animated animate__fadeInUp"
        >
          <span>{i18nKeys.home_49}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
        <p className="text-[#AAAAAA] text-16 leading-24 font-normal mt-32 mb-72  wow animate__animated animate__fadeInUp">
          {i18nKeys.home_50}
        </p>
      </div>
    </div>
  );
}
