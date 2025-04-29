import bg from "@/assets/helpcenter/bg.png";
import bg1 from "@/assets/helpcenter/bg1.png";
import bg2 from "@/assets/helpcenter/bg2.png";
import bg5 from "@/assets/productupdates/bg5.png";
import arrowRight from "@/assets/arrow-right.png";
import { Link, useLocation } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useState } from "react";

const mapList = (data = []) => {
  return (
    <div className="w-full grid grid-cols-3 gap-20 text-center">
      {data.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            className="w-350 h-122 border-1 rounded-25 border-[#ccc] hover:text-[#FF5C01] hover:border-[#FF5C01]"
          >
            <div className="block text-24 font-bold mt-49">{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default function HelpCenter() {
  const location = useLocation();
  console.log(89898, location.search);
  const [activeId, setActiveId] = useState("one");
  const mapList2 = (data = []) => {
    return (
      <div className="w-full mt-20">
        {data.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setActiveId(item.id)}
              className={`w-210 rounded-10 ${
                activeId === item.id
                  ? "bg-[#000] text-white"
                  : "bg-white text-[#333]"
              } mb-15 p-10 pl-20 text-14 leading-24 font-normal hover:cursor-pointer`}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    );
  };
  const problems = [
    {
      id: `one`,
      title: `${i18nKeys.help_15}`,
      desc: `${i18nKeys.help_21}`,
    },
    {
      id: `two`,
      title: `${i18nKeys.help_16}`,
      desc: `${i18nKeys.price_120}`,
    },
    {
      id: `three`,
      title: `${i18nKeys.help_17}`,
      desc: `${i18nKeys.apple_24}`,
    },
    {
      id: `four`,
      title: `${i18nKeys.help_18}`,
      desc: `${i18nKeys.qiye_302}`,
    },
  ];

  const findId = (id) => {
    let arr = problems.find((item) => item.id === id);
    return arr;
  };

  function checkEmail() {
    var email = document.getElementById("eject_email");
    if (email.value) {
      email.setCustomValidity("");
    } else if (email.validity.valueMissing) {
      email.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    if (email.validity.typeMismatch) {
      email.setCustomValidity(`${i18nKeys.invalid_2}`);
      return false;
    }
  }
  return (
    <div
      className={`${
        location.search !== "?desc" && location.search !== "?form"
          ? "bg-[#fff]"
          : "bg-[#EDEDED]"
      }`}
    >
      <div
        className={`w-full h-300 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-72 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.help_1}
        </p>
        <div className="relative w-1000 mx-auto">
          <div
            className="w-24 h-24 absolute top-55 left-66"
            style={{
              backgroundImage: `url(${bg5})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={i18nKeys.help_2}
            className="bg-[#fff] text-[#000] rounded-50 text-18 leading-24 font-normal w-912 h-60 mt-36 pl-54"
          />
          <div className="w-141 h-60 bg-[#000] rounded-50 text-24 font-bold pt-13 absolute right-44 bottom-0 hover:cursor-pointer hover:bg-[#FF5C01]">
            {i18nKeys.help_3}
          </div>
        </div>
      </div>

      <div
        style={{
          display:
            location.search !== "?desc" && location.search !== "?form"
              ? "block"
              : "none",
        }}
        className="w-1090 h-518 mx-auto pt-34 pb-78"
      >
        {mapList([
          // {
          //   title: `${i18nKeys.help_4}`,
          //   path: "/",
          // },
          // {
          //   title: `${i18nKeys.help_5}`,
          //   path: "/",
          // },
          // {
          //   title: `${i18nKeys.help_6}`,
          //   path: "/",
          // },
          // {
          //   title: `${i18nKeys.help_7}`,
          //   path: "/",
          // },
          // {
          //   title: `${i18nKeys.help_8}`,
          //   path: "/",
          // },
          {
            title: `${i18nKeys.help_9}`,
            path: "/resource/helpcenter?desc",
          },
          // {
          //   title: `${i18nKeys.help_10}`,
          //   path: "/",
          // },
          // {
          //   title: `${i18nKeys.help_11}`,
          //   path: "/",
          // },
        ])}
      </div>

      <div
        style={{
          display: location.search === "?desc" ? "block" : "none",
        }}
        className="w-1200 mx-auto h-823 bg-[#EDEDED] pt-40"
      >
        <p className="text-14 leading-24 font-normal text-[#888888]">
          <Link to="/resource/helpcenter" className="hover:text-[#FF5C01]">
            {i18nKeys.policy_3}
          </Link>
          <img
            src={bg1}
            className="w-20 h-20 inline-block relative bottom-1 mx-5"
          />
          <span>{i18nKeys.policy_4}</span>
          <img
            src={bg2}
            className="w-20 h-20 inline-block relative bottom-1 mx-5"
          />
          <span className="text-[#000]">{findId(activeId).title}</span>
        </p>
        <div className="w-1320 mt-45 flex justify-between">
          <div className="w-210">
            <div className="text-[##3D3D3D] text-14 leading-24 font-bold">
              {i18nKeys.help_14}
              {mapList2(problems)}
            </div>
          </div>
          <div className="w-1060 h-300 relative bottom-10">
            <p className="text-[#3D3D3D] text-24 font-bold">
              {findId(activeId).title}
            </p>
            <p className="text-[#aaa] text-14 leading-24 font-normal mt-20">
              {i18nKeys.help_20}
            </p>
            <div className="w-990 h-180 text-[#3D3D3D] text-14 leading-30 font-normal mt-40">
              <div
                dangerouslySetInnerHTML={{ __html: findId(activeId).desc }}
              />
            </div>
            <div className="text-18 leading-32 font-bold text-center mt-70">
              <p>{i18nKeys.help_22}</p>
              <div className="w-284 mt-10 mx-auto flex justify-between">
                <p className="w-132 h-48 border-1 border-[#ccc] rounded-90 pt-16 text-14 leading-16 font-normal text-[#ccc] hover:cursor-pointer hover:border-[#FF5C01] hover:text-[#FF5C01]">
                  {i18nKeys.help_23}
                </p>
                <p className="w-132 h-48 border-1 border-[#ccc] rounded-90 pt-16 text-14 leading-16 font-normal text-[#ccc] hover:cursor-pointer hover:border-[#FF5C01] hover:text-[#FF5C01]">
                  {i18nKeys.help_24}
                </p>
              </div>
              <p className="text-center mt-10 text-14 leading-24 text-[#AAA] font-normal">
                {i18nKeys.help_25}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: location.search === "?form" ? "block" : "none",
        }}
        className="w-full h-823 bg-[#EDEDED] pt-40 pl-120"
      >
        <p className="text-14 leading-24 font-normal text-[#888888]">
          <Link to="/resource/helpcenter" className="hover:text-[#FF5C01]">
            {i18nKeys.policy_3}
          </Link>
          <img
            src={bg2}
            className="w-20 h-20 inline-block relative bottom-1 mx-5"
          />
          <span className="text-[#000]">{i18nKeys.help_12}</span>
        </p>
        <p className="text-24 text-[#000] font-bold relative top-42">
          {i18nKeys.help_12}
        </p>
        <div className="mt-7 mx-auto w-414 h-662 rounded-30 bg-white">
          <form className="mx-auto text-[#333333] text-14 leading-16 font-medium ml-38 mr-38 pt-44">
            <p>{i18nKeys.help_26}</p>
            <input
              type="email"
              id="eject_email"
              name="email"
              required
              placeholder={i18nKeys.help_27}
              className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />
            <p>{i18nKeys.help_28}</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={i18nKeys.help_29}
              className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />
            <p>{i18nKeys.help_30}</p>
            <input
              type="text"
              id="theme"
              name="theme"
              placeholder={i18nKeys.help_30}
              className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />
            <p>{i18nKeys.help_31}</p>
            <input
              type="text"
              id="desc"
              name="desc"
              placeholder={i18nKeys.help_32}
              className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />
            <p>{i18nKeys.help_33}</p>
            <div className="relative">
              <div className="w-334 h-46 border-1 border-[##E0E0E0] mx-auto text-center rounded-10 mt-8 text-[#ccc] text-12 leading-15 font-medium pt-16">
                {i18nKeys.help_34}
              </div>
              <input
                type="file"
                id="file"
                name="file"
                placeholder={i18nKeys.help_34}
                className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10 absolute top-[-8px] left-2 opacity-0 hover:cursor-pointer"
              />
            </div>
            <div className="text-[#3D3D3D] mt-30 text-14 leading-15 font-normal">
              <div
                dangerouslySetInnerHTML={{ __html: i18nKeys.recommend_22 }}
              />
            </div>
            <button
              id="eject_btn"
              type="submit"
              onClick={checkEmail}
              className="block w-334 h-52 bg-[#000] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-26 mx-auto text-center  wow animate__animated animate__fadeInUp"
            >
              <span className="text-[#fff]">{i18nKeys.help_12}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
