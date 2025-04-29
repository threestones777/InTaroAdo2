import logo from "@/assets/navbar/logo.png";
import language1 from "@/assets/navbar/language1.png";
import language2 from "@/assets/navbar/language2.png";
import link1 from "@/assets/navbar/link1.png";
import link2 from "@/assets/navbar/link2.png";
import EN from "@/assets/navbar/EN.png";
import CN from "@/assets/navbar/CN.png";
import arrowRight from "@/assets/arrow-right.png";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [ownUrl, setOwnUrl] = useState(null);
  const [dropUrl, setDropUrl] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.lang || "cn"
  );

  const menuRef = useRef(null);
  const languageRef = useRef(null);

  // 导航菜单数据

  const mapList = (data = []) => {
    return (
      <div className="flex justify-center">
        {data.map((item) => {
          return (
            <div key={item.id} className="relative">
              <button
                onMouseEnter={() => toggleMenu(item.id)}
                className={`w-${item.width} text-[#333] hover:text-[#000] hover:font-medium  text-16 font-normal flex justify-center mr-32 relative top-29`}
              >
                <span
                  className={`${
                    activeMenu === item.id || ownUrl === item.id
                      ? "text-[#FF5C01]"
                      : ""
                  }`}
                >
                  {item.label}
                </span>
                <svg
                  className={`ml-2 h-15 w-15 relative top-5 transition-transform ${
                    activeMenu === item.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={`${
                    activeMenu === item.id || ownUrl === item.id
                      ? "#FF5C01"
                      : "#333"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* 下拉菜单内容 */}
              {activeMenu === item.id && (
                <div
                  onMouseLeave={() => setActiveMenu(null)}
                  className={`z-50 absolute left-1/2 transform -translate-x-1/2 top-74 mt-6 bg-white rounded-16 shadow-lg`}
                >
                  <div className={`flex justify-between p-40 pl-65`}>
                    {item.content.map((subItem, index) => (
                      <div key={index} className="w-[406px]">
                        <div className="h-38">
                          <p className="text-18 leading-16 font-bold mb-6">
                            {subItem.name}
                          </p>
                          <p className="text-14 text-[#888888] leading-16 font-normal">
                            {subItem.desc}
                          </p>
                        </div>
                        {subItem.links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.path}
                            className="block text-gray-700 hover:text-[#FF5C01] flex justify-between mt-40 hover:underline"
                            onMouseEnter={() => setHoverMenu(link.title)}
                            onClick={() => setActiveMenu(null)}
                          >
                            <div
                              className="w-16 h-16 mr-16"
                              style={{
                                backgroundImage: `url(${
                                  link.title === hoverMenu ||
                                  link.path === dropUrl
                                    ? link2
                                    : link1
                                })`,
                                backgroundSize: "100% 100%",
                              }}
                            ></div>
                            <div
                              className={`w-374 mr-40 text-14 leading-16 ${
                                link.path === dropUrl ? "text-[#FF5C01]" : ""
                              }`}
                            >
                              <p className="font-bold mb-6">{link.title}</p>
                              <p className="font-normal">{link.subTitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // 语言选项数据
  const languages = [
    { code: "en", img: CN, name: "English" },
    { code: "cn", img: EN, name: "繁体中文" },
  ];

  const location = useLocation();
  useEffect(() => {
    // 监控浏览器路径变化
    document.documentElement.scrollTop = 0;
    setDropUrl(location.pathname);
    setOwnUrl(location.pathname.split("/")[1]);
    console.log("路径变化:", ownUrl);
    console.log("路径变化:", dropUrl);
    // 点击外部关闭下拉菜单
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location.pathname]);

  const toggleMenu = (menuId) => {
    // setActiveMenu(activeMenu === menuId ? null : menuId);
    setActiveMenu(menuId);
    setHoverMenu(null);
    setLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setLanguageOpen(true);
    setActiveMenu(null);
  };
  const toggleLanguage2 = () => {
    setLanguageOpen(false);
    setActiveMenu(null);
  };

  const handleLanguageSelect = (lang) => {
    setCurrentLanguage(lang.code);
    localStorage.lang = lang.code;
    window.location.reload();
    setLanguageOpen(false);
  };

  return (
    <nav className="min-w-page z-50 bg-white shadow-md h-74 top-0 ">
      <div className="">
        <div className="flex justify-between">
          {/* 左侧 Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-32 relative left-60 top-21" src={logo} />
            </Link>
          </div>

          {/* 中间导航菜单 (点击显示) */}
          <div
            className="flex justify-center"
            style={{
              display: dropUrl === "/resource/helpcenter" ? "none" : "",
            }}
            ref={menuRef}
          >
            <div className="text-[#333] hover:text-[#000] hover:font-medium  text-16 font-normal mr-32 relative top-29">
              <Link
                to="/"
                className={`${ownUrl === "" ? "text-[#FF5C01]" : ""}`}
              >
                {i18nKeys.nav_1}
              </Link>
            </div>
            {mapList([
              {
                id: "products",
                label: `${i18nKeys.nav_2}`,
                width: "60",
                content: [
                  {
                    name: `${i18nKeys.nav_3}`,
                    desc: `${i18nKeys.nav_4}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_5}`,
                        subTitle: `${i18nKeys.nav_6}`,
                        path: "/products/qiCard",
                      },
                      {
                        title: `${i18nKeys.nav_7}`,
                        subTitle: `${i18nKeys.nav_8}`,
                        path: "/products/orderPay",
                      },
                      {
                        title: `${i18nKeys.nav_9}`,
                        subTitle: `${i18nKeys.nav_10}`,
                        path: "/products/createManage",
                      },
                      {
                        title: `${i18nKeys.nav_11}`,
                        subTitle: `${i18nKeys.nav_12}`,
                        path: "/products/reimbursement",
                      },
                    ],
                  },
                  {
                    name: `${i18nKeys.nav_13}`,
                    desc: `${i18nKeys.nav_14}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_15}`,
                        subTitle: `${i18nKeys.nav_16}`,
                        path: "/products/budgetcontrol",
                      },
                      {
                        title: `${i18nKeys.nav_17}`,
                        subTitle: `${i18nKeys.nav_18}`,
                        path: "/products/processreport",
                      },
                      {
                        title: `${i18nKeys.nav_19}`,
                        subTitle: `${i18nKeys.nav_20}`,
                        path: "/products/realtimeinfor",
                      },
                    ],
                  },
                ],
              },
            ])}
            {mapList([
              {
                id: "solution",
                label: `${i18nKeys.nav_21}`,
                width: "86",
                content: [
                  {
                    name: `${i18nKeys.nav_22}`,
                    desc: `${i18nKeys.nav_23}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_24}`,
                        subTitle: `${i18nKeys.nav_25}`,
                        path: "/solution/smenterprises",
                      },
                      {
                        title: `${i18nKeys.nav_26}`,
                        subTitle: `${i18nKeys.nav_27}`,
                        path: "/solution/largeenterprise",
                      },
                    ],
                  },
                  {
                    name: `${i18nKeys.nav_28}`,
                    desc: `${i18nKeys.nav_29}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_30}`,
                        subTitle: `${i18nKeys.nav_31}`,
                        path: "/solution/nonprofit",
                      },
                      {
                        title: `${i18nKeys.nav_32}`,
                        subTitle: `${i18nKeys.nav_33}`,
                        path: "/solution/startupteam",
                      },
                    ],
                  },
                  {
                    name: "",
                    desc: "",
                    links: [
                      {
                        title: `${i18nKeys.nav_34}`,
                        subTitle: `${i18nKeys.nav_35}`,
                        path: "/solution/educationindustry",
                      },
                      {
                        title: `${i18nKeys.nav_36}`,
                        subTitle: `${i18nKeys.nav_37}`,
                        path: "/solution/accountantsfnancial",
                      },
                    ],
                  },
                ],
              },
            ])}
            <div className="text-[#333] hover:text-[#000] hover:font-medium  text-16 font-normal mr-32 relative top-29">
              <Link
                to="/cooperationoffers"
                className={`${
                  ownUrl === "cooperationoffers" ? "text-[#FF5C01]" : ""
                }`}
              >
                {i18nKeys.nav_38}
              </Link>
            </div>
            {mapList([
              {
                id: "resource",
                label: `${i18nKeys.nav_39}`,
                width: "60",
                content: [
                  {
                    name: `${i18nKeys.nav_40}`,
                    desc: `${i18nKeys.nav_41}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_42}`,
                        subTitle: `${i18nKeys.nav_43}`,
                        path: "/resource/information",
                      },
                      {
                        title: `${i18nKeys.nav_44}`,
                        subTitle: `${i18nKeys.nav_45}`,
                        path: "/resource/customercases",
                      },
                      {
                        title: `${i18nKeys.nav_46}`,
                        subTitle: `${i18nKeys.nav_47}`,
                        path: "/resource/helpcenter",
                      },
                      {
                        title: `${i18nKeys.nav_48}`,
                        subTitle: `${i18nKeys.nav_49}`,
                        path: "/resource/about",
                      },
                      {
                        title: `${i18nKeys.nav_50}`,
                        subTitle: `${i18nKeys.nav_51}`,
                        path: "/resource/productupdates",
                      },
                    ],
                  },
                  {
                    name: `${i18nKeys.nav_52}`,
                    desc: `${i18nKeys.nav_53}`,
                    links: [
                      {
                        title: `${i18nKeys.nav_54}`,
                        subTitle: `${i18nKeys.nav_55}`,
                        path: "/resource/recruitment",
                      },
                      {
                        title: `${i18nKeys.nav_56}`,
                        subTitle: `${i18nKeys.nav_57}`,
                        path: "/resource/contactsales",
                      },
                      {
                        title: `${i18nKeys.nav_58}`,
                        subTitle: `${i18nKeys.nav_59}`,
                        path: "/resource/recommended",
                      },
                      {
                        title: `${i18nKeys.nav_60}`,
                        subTitle: `${i18nKeys.nav_61}`,
                        path: "/resource/submitfeedback",
                      },
                      {
                        title: `${i18nKeys.nav_62}`,
                        subTitle: `${i18nKeys.nav_63}`,
                        path: "/resource/community",
                      },
                    ],
                  },
                ],
              },
            ])}
            <div className="text-[#333] hover:text-[#000] hover:font-medium  text-16 font-normal mr-32 relative top-29">
              <Link
                to="/price"
                className={`${
                  ownUrl === "price" || ownUrl === "forexcalculator"
                    ? "text-[#FF5C01]"
                    : ""
                }`}
              >
                {i18nKeys.nav_64}
              </Link>
            </div>
          </div>

          {/* 右侧语言切换和登录按钮 */}
          <div className="flex items-center space-x-32 relative top-23 right-60">
            {/* 语言切换下拉菜单 */}
            <div className="relative" ref={languageRef}>
              <button
                onMouseEnter={toggleLanguage}
                className="flex justify-center"
              >
                <div
                  style={{
                    "--bg-image": `url(${language1})`,
                    "--hover-image": `url(${language2})`,
                  }}
                  className={`w-22 h-22 bg-[image:var(--bg-image)] hover:bg-[image:var(--hover-image)] bg-cover bg-center`}
                ></div>
              </button>

              {languageOpen && (
                <div
                  onMouseLeave={toggleLanguage2}
                  className="w-135 text-center p-17 pb-0 absolute z-10 left-[-60px] mt-29 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 rounded-16"
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className={`block rounded-16 px-4 py-2 text-14 leading-16 hover:text-[#FF5C01] ${
                          currentLanguage === lang.code
                            ? "text-[#000]"
                            : "text-[#999]"
                        } flex justify-center mb-20 hover:cursor-pointer`}
                        onClick={() => handleLanguageSelect(lang)}
                      >
                        <img src={lang.img} className="h-16 w-16 mr-16" />
                        <p>{lang.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 登录按钮 */}
            <div
              style={{
                display:
                  location.pathname !== "/resource/helpcenter"
                    ? "inline-block"
                    : "none",
              }}
              className="bg-[#F4F5F6] text-14 text-[#AAAAAA]  rounded-25 font-normal pt-9 pb-9 pl-34 pr-34 hover:cursor-not-allowed"
            >
              {i18nKeys.login_1}
            </div>
            <Link
              to="/resource/helpcenter?form"
              style={{
                display:
                  location.pathname === "/resource/helpcenter"
                    ? "inline-block"
                    : "none",
              }}
              className="bg-[#000] hover:bg-[#FF5C01] text-12 leading-16 text-[#fff] rounded-25 font-normal pt-10 pb-9 px-19"
            >
              {i18nKeys.help_12}
              <img src={arrowRight} className="inline-block w-16 h-16 ml-8" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
