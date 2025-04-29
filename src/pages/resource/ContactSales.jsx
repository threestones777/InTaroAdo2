import bg from "@/assets/contactsales/bg.png";
import bg1 from "@/assets/contactsales/bg1.png";
import bg2 from "@/assets/contactsales/bg2.png";
import bg3 from "@/assets/contactsales/bg3.png";
import bg4 from "@/assets/contactsales/bg4.png";
import bg5 from "@/assets/contactsales/bg5.png";
import bg6 from "@/assets/contactsales/bg6.png";
import bg7 from "@/assets/contactsales/bg7.png";
import bg8 from "@/assets/contactsales/bg8.png";
import bg9 from "@/assets/contactsales/bg9.png";
import bg10 from "@/assets/contactsales/bg10.png";
import bg11 from "@/assets/contactsales/bg11.png";
import bg12 from "@/assets/contactsales/bg12.png";
import bg13 from "@/assets/contactsales/bg13.png";
import bg14 from "@/assets/contactsales/bg14.png";
import bg15 from "@/assets/contactsales/bg15.png";
import arrowRight from "@/assets/arrow-right.png";
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

const mapList2 = (data = []) => {
  return (
    <div className="w-446 mx-auto flex justify-between relative right-25">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-223 h-44 mb-25 wow animate__animated animate__fadeInUp`}
          >
            <div
              className={`w-44 h-44 inline-block`}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="w-179 inline-block mt-34 mb-17 text-12 leading-14 font-normal relative left-10 line-clamp-1">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapList3 = (data = []) => {
  return (
    <div className="w-446 mx-auto flex justify-between relative right-25">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              background: `rgba(255,255,255,0.08)`,
            }}
            className={`w-133 h-80 rounded-10 wow animate__animated animate__fadeInUp mb-23 relative`}
          >
            <img
              src={item.img}
              className={`w-70 absolute left-32 top-1/2 -translate-y-1/2`}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapList7 = (data = []) => {
  return (
    <div className="w-1186 mx-auto flex justify-between text-center pt-60 pb-40">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-192 h-388 ${item.color} pl-16 pr-16 pt-42 rounded-15 wow animate__animated animate__fadeInUp`}
          >
            <div
              className={`w-120 h-120 mx-auto rounded-90`}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p
              className={`mt-34 mb-17 text-20 leading-23 font-bold ${item.text}`}
            >
              {item.title}
            </p>
            <p className={`h-40 text-16 leading-20 font-normal ${item.text1}`}>
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function ContactSales() {
  function checkName() {
    let name = document.getElementById("name");
    if (name.value) {
      name.setCustomValidity("");
    } else if (name.validity.valueMissing) {
      name.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    if (name.validity.typeMismatch) {
      name.setCustomValidity(`${i18nKeys.invalid_2}`);
      return false;
    }
  }
  function checkEmail() {
    let email = document.getElementById("email");
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
  function checkPhone() {
    let phone = document.getElementById("phone");
    if (phone.value) {
      phone.setCustomValidity("");
    } else if (phone.validity.valueMissing) {
      phone.setCustomValidity(`${i18nKeys.invalid_1}`);
      return false;
    }
    let test = /(^1[3-9]\d{9}$)|(^0\d{2,3}-?\d{7,8}$)/.test(phone.value);
    if (!test) {
      phone.setCustomValidity(`${i18nKeys.invalid_3}`);
      return false;
    }
  }
  function checkAll() {
    checkName();
    checkEmail();
    checkPhone();
  }
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
          className={`pt-83 mx-auto text-48 font-bold wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.sales_01}
        </p>
        <p
          className={`w-678 mx-auto text-24 leading-48 font-normal pt-8  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.sales_02}
        </p>
        <div className="w-960 h-677 mx-auto bg-[#000] mt-52 text-left rounded-tl-50 rounded-tr-50 flex justify-between overflow-hidden wow animate__animated animate__fadeInUp">
          <div className="w-550 h-full text-white pt-88 pl-52">
            <p className="mb-8 text-28 leading-64 font-bold">
              {i18nKeys.sales_1}
            </p>
            {mapList2([
              {
                img: bg6,
                title: `${i18nKeys.sales_2}`,
              },
              {
                img: bg7,
                title: `${i18nKeys.sales_3}`,
              },
            ])}
            {mapList2([
              {
                img: bg8,
                title: `${i18nKeys.sales_4}`,
              },
              {
                img: bg9,
                title: `${i18nKeys.sales_5}`,
              },
            ])}
            <p className="mt-37 text-28 leading-64 font-bold mb-13">
              {i18nKeys.sales_6}
            </p>
            {mapList3([
              {
                img: bg10,
                position: "relative top-25",
              },
              {
                img: bg12,
              },
              {
                img: bg13,
              },
            ])}
            {mapList3([
              {
                img: bg14,
                position: "relative bottom-20",
              },
              {
                img: bg15,
              },
              {
                img: bg11,
              },
            ])}
          </div>
          <div className="w-410 h-full bg-[#fff]">
            <form className="mx-auto text-[#333] text-14 leading-16 font-medium ml-38 mr-38 pt-84">
              <p>{i18nKeys.sales_7}</p>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={i18nKeys.sales_8}
                className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
              />
              <p>{i18nKeys.sales_9}</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={i18nKeys.sales_10}
                className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
                required
              />
              <p>{i18nKeys.sales_11}</p>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={i18nKeys.sales_12}
                className="bg-[#F0F0F0] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
                required
              />
              <p>{i18nKeys.sales_13}</p>
              <textarea
                id="problem"
                name="problem"
                placeholder={i18nKeys.sales_14}
                className="resize-none bg-[#F0F0F0] w-334 h-90 mt-8 mb-25 p-15 rounded-10"
              ></textarea>
              <div className="text-[#3D3D3D] text-14 leading-15 font-normal">
                <div
                  dangerouslySetInnerHTML={{ __html: i18nKeys.recommend_22 }}
                />
              </div>
              <button
                type="submit"
                onClick={checkAll}
                className="block w-334 h-52 bg-[#000] p-18 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto text-center  wow animate__animated animate__fadeInUp"
              >
                <span className="text-[#FCFCFD]">{i18nKeys.sales_16}</span>
                <img
                  src={arrowRight}
                  className="inline-block w-20 h-20 ml-12"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-1320 mx-auto bg-[#FF5C01] mt-80 pt-80 text-center rounded-50 pb-91 wow animate__animated animate__fadeInUp">
        <div className="text-48 leading-64 font-bold text-[#fff]">
          {i18nKeys.sales_17}
        </div>
        <div className="opacity-80 mt-44 text-24 leading-24 font-normal text-[#fff]">
          {i18nKeys.sales_18}
        </div>
        {mapList7([
          {
            img: bg1,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#333]",
            text1: "text-[#000]",
            title: `${i18nKeys.sales_19}`,
            desc: `${i18nKeys.sales_20}`,
            opacity: "",
          },
          {
            img: bg2,
            color: "bg-[#FF8948]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            text1: "text-[#fff] opacity-80",
            title: `${i18nKeys.sales_21}`,
            desc: `${i18nKeys.sales_22}`,
            opacity: "opacity-80",
          },
          {
            img: bg3,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#333]",
            text1: "text-[#000]",
            title: `${i18nKeys.sales_23}`,
            desc: `${i18nKeys.sales_24}`,
            opacity: "",
          },
          {
            img: bg4,
            color: "bg-[#FFA36F]",
            imgBg: "bg-[#fff]",
            text: "text-[#fff]",
            text1: "text-[#fff] opacity-80",
            title: `${i18nKeys.sales_25}`,
            desc: `${i18nKeys.sales_26}`,
            opacity: "opacity-80",
          },
          {
            img: bg5,
            color: "bg-white",
            imgBg: "bg-[#F4F4F4]",
            text: "text-[#333]",
            text1: "text-[#000]",
            title: `${i18nKeys.sales_27}`,
            desc: `${i18nKeys.sales_28}`,
            opacity: "",
          },
        ])}
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
        <p className="text-[#AAAAAA] text-16 leading-24 font-normal mt-32 mb-106 wow animate__animated animate__fadeInUp">
          {i18nKeys.home_50}
        </p>
      </div>
    </div>
  );
}
