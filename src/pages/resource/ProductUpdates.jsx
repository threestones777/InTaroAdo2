import bg from "@/assets/productupdates/bg.png";
import bg1 from "@/assets/productupdates/bg1.png";
import bg2 from "@/assets/productupdates/bg2.png";
import bg3 from "@/assets/productupdates/bg3.png";
import bg4 from "@/assets/productupdates/bg4.png";
import bg5 from "@/assets/productupdates/bg5.png";
import arrowRight from "@/assets/arrow-right.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const mapList3 = (data) => {
  return (
    <div className="w-1144 h-372 bg-white rounded-25 overflow-hidden mx-auto flex justify-between wow animate__animated animate__fadeInUp">
      <div className="w-456 pl-23 pt-22">
        <p className="text-14 leading-24 font-normal">{`${
          i18nKeys[data.date]
        }`}</p>
        <p className="mt-20 text-24 leading-24 font-bold">{`${
          i18nKeys[data.title]
        }`}</p>
        <div className="mt-20 flex text-white text-center">
          <div className={`w-98 h-32 ${data.color1} rounded-90 mr-10 pt-5`}>
            {`${i18nKeys[data.text1]}`}
          </div>
          <div className={`w-98 h-32 ${data.color2} rounded-90 pt-5`}>
            {`${i18nKeys[data.text2]}`}
          </div>
        </div>
        <div className="w-380 mt-20 h-250 border-[#D8D8D8] border-t-1">
          <p className="mt-20 text-14 leading-24 font-normal line-clamp-3">
            {data.desc}
          </p>
          <Link
            onClick={() => {
              localStorage.setItem("updateData", JSON.stringify(data));
            }}
            to="/resource/updatedetails"
            className={`block ${
              localStorage.lang === "en" ? "w-180" : "w-154"
            } text-center h-52 bg-[#141416] p-18 rounded-25 text-18 leading-16 font-normal hover:bg-[#FF5C01] hover:cursor-pointer mt-20 wow animate__animated animate__fadeInUp`}
          >
            <span className="text-[#FCFCFD]">{i18nKeys.update_13}</span>
            <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
          </Link>
        </div>
      </div>
      <div
        className="w-688 h-372"
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

const mapList7 = (data = []) => {
  return (
    <div className="w-1138 mx-auto flex justify-between">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-368 h-372 bg-white overflow-hidden rounded-25 wow animate__animated animate__fadeInUp`}
          >
            <div
              className={`w-full h-212 mx-auto`}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="pl-20 pt-20">
              <p className="text-14 leading-24 font-normal">{item.date}</p>
              <p className="mt-10 text-24 leading-26 font-bold line-clamp-1">
                {item.title}
              </p>
              <div className="mt-20 flex text-white text-center">
                <div
                  className={`w-98 h-32 ${item.color1} rounded-90 mr-10 pt-5`}
                >
                  {item.text1}
                </div>
                <div className={`w-98 h-32 ${item.color2} rounded-90 pt-5`}>
                  {item.text2}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function ProductUpdates() {
  return (
    <div className="bg-[#EDEDED] pb-120">
      <div
        className={`w-full h-359 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-62 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.update_1}
        </p>
        <p
          className={`mx-auto text-24 leading-48 font-normal pt-10  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.update_2}
        </p>
        <div className="relative w-1000 mx-auto">
          <div
            className="w-24 h-24 absolute top-58 left-66"
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
            placeholder={i18nKeys.update_3}
            className="bg-[#fff] text-[#000] rounded-50 text-18 leading-24 font-normal w-912 h-60 mt-38 pl-54"
          />
          <div className="w-141 h-60 bg-[#000] rounded-50 text-24 font-bold pt-13 absolute right-44 bottom-0 hover:cursor-pointer hover:bg-[#FF5C01]">
            {i18nKeys.update_4}
          </div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-52">
        {mapList7([
          {
            img: bg1,
            date: `${i18nKeys.update_5}`,
            title: `${i18nKeys.update_6}`,
            text1: `${i18nKeys.update_7}`,
            text2: `${i18nKeys.update_8}`,
            color1: "bg-[#428BA4]",
            color2: "bg-[#579073]",
          },
          {
            img: bg2,
            date: `${i18nKeys.update_5}`,
            title: `${i18nKeys.update_9}`,
            text1: `${i18nKeys.update_10}`,
            text2: `${i18nKeys.update_8}`,
            color1: "bg-[#FF5C01]",
            color2: "bg-[#579073]",
          },
          {
            img: bg3,
            date: `${i18nKeys.update_5}`,
            title: `${i18nKeys.update_11}`,
            text1: `${i18nKeys.update_10}`,
            text2: `${i18nKeys.update_8}`,
            color1: "bg-[#FF5C01]",
            color2: "bg-[#579073]",
          },
        ])}
      </div>

      <div className="w-1320 mx-auto mt-40">
        {mapList3({
          img: bg1,
          date: `update_5`,
          title: `update_6`,
          text1: `update_7`,
          text2: `update_8`,
          color1: "bg-[#428BA4]",
          color2: "bg-[#579073]",
          desc: `${i18nKeys.update_12}`,
        })}
      </div>

      <div className="w-1320 mx-auto mt-40">
        {mapList3({
          img: bg2,
          date: `update_5`,
          title: `update_9`,
          text1: `update_10`,
          text2: `update_8`,
          color1: "bg-[#FF5C01]",
          color2: "bg-[#579073]",
          desc: `${i18nKeys.update_12}`,
        })}
      </div>

      <div className="w-1320 mx-auto mt-40">
        {mapList3({
          img: bg3,
          date: `update_5`,
          title: `update_11`,
          text1: `update_10`,
          text2: `update_8`,
          color1: "bg-[#FF5C01]",
          color2: "bg-[#579073]",
          desc: `${i18nKeys.update_12}`,
        })}
      </div>

      <div className="w-1320 mx-auto mt-40">
        {mapList3({
          img: bg4,
          date: `update_5`,
          title: `update_14`,
          text1: `update_10`,
          text2: `update_8`,
          color1: "bg-[#FF5C01]",
          color2: "bg-[#579073]",
          desc: `${i18nKeys.update_12}`,
        })}
      </div>

      {/* <div>
        <Link
          to="/resource/productupdates"
          className={`block mx-auto mt-75 w-184 text-center h-55 bg-[#141416] p-19 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20 wow animate__animated animate__fadeInUp`}
        >
          <span className="text-white">{i18nKeys.update_15}</span>
        </Link>
      </div> */}
    </div>
  );
}
