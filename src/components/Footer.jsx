import logo from "@/assets/footer/logo.png";
import AppStore from "@/assets/footer/AppStore.png";
import GooglePlay from "@/assets/footer/GooglePlay.png";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const mapList = (data = []) => {
  return (
    <div className="">
      {data.map((item, index) => {
        return (
          <div key={index} className="">
            <Link
              to={item.path}
              className="block font-normal text-14 leading-22 mb-12 text-[rgba(255,255,255,0.7)] hover:text-[#FF5C01] hover:underline"
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default function Footer() {
  const location = useLocation();
  useEffect(() => {
    // 监控浏览器路径变化
    console.log("---**路径变化:", location.pathname);
  }, [location.pathname]);
  return (
    <div className="z-10 text-white wow animate__animated animate__fadeInUp">
      <div
        className="bg-[#000] pt-56 pb-65"
        style={{
          display:
            location.pathname !== "/resource/recommended" &&
            location.pathname !== "/resource/helpcenter"
              ? "block"
              : "none",
        }}
      >
        <div className="w-1068 h-340 mx-auto flex justify-between">
          <div className="w-120 h-340">
            <img src={logo} className="w-100 h-32" />
            <p className="mt-40 mb-20 font-bold text-14 leading-24">
              {i18nKeys.footer_1}
            </p>
            <div className="w-120 h-32  mb-16 rounded-5 relative">
              <div className="w-full h-full bg-[#fff] opacity-10"></div>
              <div
                className="z-50 w-74 h-18 mx-auto bg-[#000] absolute bottom-7 left-22"
                style={{
                  backgroundImage: `url(${AppStore})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </div>
            <div className="w-120 h-32 relative">
              <div className="w-full h-full bg-[#fff] rounded-5 opacity-10"></div>
              <div
                className="z-50 w-74 h-18 mx-auto bg-[#000] absolute bottom-7 left-22"
                style={{
                  backgroundImage: `url(${GooglePlay})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </div>
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_2}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_3}`,
                path: "/resource/community",
              },
              // {
              //   title: "Telegram",
              //   path: "/",
              // },
              // {
              //   title: "Linkdln",
              //   path: "/",
              // },
              // {
              //   title: "Twitter",
              //   path: "/",
              // },
              // {
              //   title: "Instagram",
              //   path: "/",
              // },
              // {
              //   title: "Facebook",
              //   path: "/",
              // },
            ])}
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_4}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_5}`,
                path: "/price",
              },
              {
                title: `${i18nKeys.footer_6}`,
                path: "/resource/recommended",
              },
              {
                title: `${i18nKeys.footer_7}`,
                path: "/resource/recommended",
              },
              {
                title: `${i18nKeys.footer_8}`,
                path: "/resource/contactsales",
              },
              {
                title: `${i18nKeys.footer_9}`,
                path: "/resource/recommended",
              },
            ])}
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_10}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_11}`,
                path: "/products/qiCard",
              },
              {
                title: `${i18nKeys.footer_12}`,
                path: "/products/orderPay",
              },
              {
                title: `${i18nKeys.footer_13}`,
                path: "/products/createManage",
              },
              {
                title: `${i18nKeys.footer_14}`,
                path: "/products/reimbursement",
              },
              {
                title: `${i18nKeys.footer_15}`,
                path: "/products/processreport",
              },
              {
                title: `${i18nKeys.footer_16}`,
                path: "/products/realtimeinfor",
              },
              {
                title: `${i18nKeys.footer_17}`,
                path: "/products/budgetcontrol",
              },
              {
                title: `${i18nKeys.footer_18}`,
                path: "/products/applegooglepay",
              },
              {
                title: `${i18nKeys.footer_19}`,
                path: "/products/debitcard",
              },
            ])}
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_20}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_21}`,
                path: "/solution/smenterprises",
              },
              {
                title: `${i18nKeys.footer_22}`,
                path: "/solution/largeenterprise",
              },
            ])}
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_23}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_24}`,
                path: "/resource/helpcenter",
              },
              {
                title: `${i18nKeys.footer_25}`,
                path: "/resource/helpcenter?desc",
              },
              // {
              //   title: `${i18nKeys.footer_26}`,
              //   path: "/resource/helpcenter?form",
              // },
              {
                title: `${i18nKeys.footer_27}`,
                path: "/privacypolicy",
              },
              {
                title: `${i18nKeys.footer_28}`,
                path: "/privacycondition",
              },
            ])}
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_29}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_30}`,
                path: "/solution/nonprofit",
              },
              {
                title: `${i18nKeys.footer_31}`,
                path: "/solution/educationindustry",
              },
              {
                title: `${i18nKeys.footer_32}`,
                path: "/solution/startupteam",
              },
              {
                title: `${i18nKeys.footer_33}`,
                path: "/solution/accountantsfnancial",
              },
            ])}
          </div>
          <div className="w-113 h-340">
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_34}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_35}`,
                path: "/resource/information",
              },
              {
                title: `${i18nKeys.footer_36}`,
                path: "/resource/customercases",
              },
              // {
              //   title: `${i18nKeys.footer_37}`,
              //   path: "/resource/productupdates",
              // },
            ])}
            <div className="font-bold text-14 leading-24 mb-21">
              {i18nKeys.footer_38}
            </div>
            {mapList([
              {
                title: `${i18nKeys.footer_39}`,
                path: "/resource/about",
              },
              {
                title: `${i18nKeys.footer_40}`,
                path: "/resource/recruitment",
              },
              {
                title: `${i18nKeys.footer_41}`,
                path: "/cooperationoffers",
              },
            ])}
          </div>
        </div>
      </div>
      <div className="w-full h-64 bg-[#1E1E1E] text-center">
        <p className="text-12 leading-22 font-normal pt-21">
          Copyright © 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
}
