import bg from "@/assets/customercases/bg.png";
import bg1 from "@/assets/information/bg1.png";
import bg2 from "@/assets/information/bg2.png";
import bg3 from "@/assets/information/bg3.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useState, useRef, useEffect } from "react";
import img1 from "@/assets/qiyeka/img1.png";
import img2 from "@/assets/qiyeka/img2.png";
import img3 from "@/assets/qiyeka/img3.png";
import Article from "@/components/Article";

const DropdownButton = ({ label, select, items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState("");
  const dropdownRef = useRef(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHover("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsHover("");
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`inline-flex justify-start w-200 h-56 pl-16 rounded-50 bg-white text-sm font-medium text-[#222] text-14 leading-16 pt-20 ${
            isOpen
              ? "rounded-tl-16 rounded-tr-16 rounded-bl-0 rounded-br-0"
              : ""
          }`}
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <span className={`w-95 ${isOpen ? "" : ""}`}>{label}</span>

          {/* 下拉箭头图标 */}
          <svg
            className={`ml-35 h-15 w-15 relative top-2 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke={`#333`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* 下拉菜单 */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 top-0 w-200 rounded-16 bg-white z-10 pt-20"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="" role="none">
            {items.map((item, index) => (
              <button
                key={index}
                className={`block w-full text-sm ${item.color} hover:text-[#FF5C01]`}
                role="menuitem"
                onClick={() => {
                  onItemClick(item);
                  setIsOpen(false);
                  setIsHover("");
                }}
                onMouseEnter={() => {
                  setIsHover(item.value);
                }}
              >
                <div
                  className={`pl-36 text-left flex ${
                    select === item.value ? "text-[#FF5C01]" : ""
                  }`}
                >
                  <span className="inline-block w-95 mb-40">{item.label}</span>
                  <i
                    className={`bi ${item.icon} w-16 h-16 ml-17`}
                    style={{
                      display: item.value !== "suo" ? "block" : "none",
                    }}
                  ></i>
                  <svg
                    className={`ml-35 h-15 w-15 relative right-20 top-5`}
                    style={{
                      display: item.value === "suo" ? "block" : "none",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={`${
                      select === item.value || isHover === item.value
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
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Information() {
  const [activeId, setActiveId] = useState("all");
  const [xxx, setxxx] = useState("suo");
  const dropdownItems = [
    {
      label: `${i18nKeys.info_3}`,
      value: "suo",
      icon: "bi-chevron-down",
      color: "text-[#222] font-medium",
    },
    {
      label: `${i18nKeys.info_4}`,
      value: "zhi",
      icon: "bi-arrow-right",
      color: "text-[#888]",
    },
    {
      label: `${i18nKeys.info_5}`,
      value: "qi",
      icon: "bi-arrow-right",
      color: "text-[#888]",
    },
    {
      label: `${i18nKeys.info_6}`,
      value: "bao",
      icon: "bi-arrow-right",
      color: "text-[#888]",
    },
    {
      label: `${i18nKeys.info_7}`,
      value: "gong",
      icon: "bi-arrow-right",
      color: "text-[#888]",
    },
    {
      label: `${i18nKeys.info_8}`,
      value: "kuai",
      icon: "bi-arrow-right",
      color: "text-[#888]",
    },
  ];
  const articles = [
    {
      img: img1,
      what1: `info_10`,
      key1: "nan",
      what1Color: "bg-[#539B7D]",
      what2: `info_7`,
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
      title: `info_16`,
      desc: `info_17`,
      content: `info_33`,
      author: `info_25`,
      date: `info_21`,
      location: "",
    },
    {
      img: bg1,
      what1: `info_13`,
      key1: "hui",
      what1Color: "bg-[#929BEA]",
      what2: `info_5`,
      key2: "qi",
      what2Color: "bg-[#3C3C72]",
      title: `info_26`,
      desc: "",
      content: `info_33`,
      time: `info_19`,
      author: "",
      date: `info_21`,
      location: `info_23`,
    },
    {
      img: bg2,
      what1: `info_10`,
      key1: "nan",
      what1Color: "bg-[#539B7D]",
      what2: `info_7`,
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
      img: bg3,
      what1: `info_11`,
      key1: "huo",
      what1Color: "bg-[#000]",
      what2: `info_6`,
      key2: "bao",
      what2Color: "bg-[#5A964C]",
      title: `qiye_44`,
      desc: `qiye_56`,
      content: `info_33`,
      author: `info_25`,
      date: `info_31`,
      location: "",
    },
    {
      img: img3,
      what1: `info_12`,
      key1: "yan",
      what1Color: "bg-[#CEAD27]",
      what2: `info_8`,
      key2: "kuai",
      what2Color: "bg-[#B9B9B9]",
      title: `qiye_57`,
      desc: "",
      content: `info_33`,
      time: `info_19`,
      author: "",
      date: `info_21`,
      location: `info_23`,
    },
  ];

  function findItemsByTwoKeys(array, key1, value1, key2, value2) {
    let A1 = JSON.parse(JSON.stringify(array));
    let arr1 = [];
    let arr2 = [];
    A1.filter((item) => {
      if (value1 === "all" || item[key1] === value1) {
        // console.log(item);
        arr1.push(item);
      }
    });
    arr1.filter((item) => {
      if (value2 === "suo" || item[key2] === value2) {
        // console.log(item);
        arr2.push(item);
      }
    });
    return arr2;
  }

  const handleItemClick = (item) => {
    console.log("Selected:", item.value);
    setxxx(item.value);
    // 在这里处理点击事件
  };
  const mapList = (data = []) => {
    return (
      <div className="w-728 h-68 bg-white rounded-50 flex justify-between py-16 px-14">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveId(item.id)}
              className={`w-100 h-36 ${
                activeId === item.id
                  ? "bg-[#000] text-white"
                  : "bg-[#fff] text-[#888]"
              } rounded-25 text-14 leading-16 font-medium text-center pt-10 hover:cursor-pointer`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    );
  };

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
          {i18nKeys.info_1}
        </p>
        <p
          className={`mx-auto text-24 leading-48 font-normal pt-8 wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.info_2}
        </p>
      </div>

      <div className="bg-[#F0F0F0] w-full pt-46  pb-80">
        <div className="w-1320 mx-auto">
          <div className="flex justify-between">
            <div className="">
              <DropdownButton
                label={i18nKeys.info_3}
                select={xxx}
                items={dropdownItems}
                onItemClick={handleItemClick}
              />
            </div>
            {mapList([
              {
                id: "all",
                title: `${i18nKeys.info_9}`,
              },
              {
                id: "nan",
                title: `${i18nKeys.info_10}`,
              },
              {
                id: "huo",
                title: `${i18nKeys.info_11}`,
              },
              {
                id: "yan",
                title: `${i18nKeys.info_12}`,
              },
              {
                id: "hui",
                title: `${i18nKeys.info_13}`,
              },
              {
                id: "wen",
                title: `${i18nKeys.info_14}`,
              },
            ])}
          </div>
          <div className="mt-60">
            <Article
              data={findItemsByTwoKeys(articles, "key1", activeId, "key2", xxx)}
            />
          </div>
        </div>
        {/* <div className="w-573 h-55 flex justify-between text-18 leading-21 font-bold text-center mx-auto mt-60">
          <div className="w-184 h-55 rounded-25 text-white bg-[#000] pt-17 hover:cursor-pointer hover:bg-[#FF5C01]">
            {i18nKeys.info_27}
          </div>
          <div className="w-184 h-55 text-[#3D3D3D] pt-17">1/25</div>
          <div className="w-184 h-55 rounded-25 text-white bg-[#000] pt-17 hover:cursor-pointer hover:bg-[#FF5C01]">
            {i18nKeys.info_28}
          </div>
        </div> */}
      </div>
    </div>
  );
}
