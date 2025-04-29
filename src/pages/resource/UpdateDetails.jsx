import bg from "@/assets/productupdates/bg.png";
import bg01 from "@/assets/helpcenter/bg1.png";
import bg1 from "@/assets/productupdates/bg1.png";
import bg2 from "@/assets/productupdates/bg2.png";
import bg3 from "@/assets/productupdates/bg3.png";
import bg5 from "@/assets/productupdates/bg5.png";
import bg6 from "@/assets/productupdates/bg6.png";
import arrowRight from "@/assets/arrow-right.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const mapList3 = (data) => {
  return (
    <div className="w-1144 h-286 text-white mx-auto wow animate__animated animate__fadeInUp">
      <div className="w-full pl-95 pt-61">
        <p className="text-48 leading-48 font-bold">{data.title}</p>
        <div className="mt-18 flex text-white text-center">
          <div className={`w-98 h-32 ${data.color1} rounded-90 mr-10 pt-5`}>
            {data.text1}
          </div>
          <div className={`w-98 h-32 ${data.color2} rounded-90 pt-5`}>
            {data.text2}
          </div>
        </div>
        <div className="mt-18 text-18 leading-48 font-normal text-[#888]">
          <span>{data.date}</span>
          <span className="ml-20">{i18nKeys.detail_02}</span>
        </div>
      </div>
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
              <p className="mt-10 text-24 leading-24 font-bold">{item.title}</p>
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

export default function UpdateDetails() {
  const updateData = JSON.parse(localStorage.updateData);
  console.log(updateData);
  return (
    <div className="">
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
          className={`w-678 mx-auto text-24 leading-48 font-normal pt-10  wow animate__animated animate__fadeInUp`}
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

      <div className="w-1320 mx-auto mt-32 text-14 leading-24 font-normal text-[#888888]">
        <Link to="/resource/productupdates" className="hover:text-[#FF5C01]">
          {i18nKeys.detail_1}
        </Link>
        <img
          src={bg01}
          className="w-20 h-20 inline-block relative bottom-1 mx-5"
        />
        <span>{`${i18nKeys[updateData.text1]}`}</span>
        <img
          src={bg01}
          className="w-20 h-20 inline-block relative bottom-1 mx-5"
        />
        <span>{`${i18nKeys[updateData.text2]}`}</span>
        <img
          src={bg01}
          className="w-20 h-20 inline-block relative bottom-1 mx-5"
        />
        <span className="text-[#000]">{`${i18nKeys[updateData.title]}`}</span>
      </div>

      <div
        className="w-1320 mx-auto mt-40 rounded-90"
        style={{
          background: `linear-gradient( 180deg, #000000 0%, #595959 100%)`,
        }}
      >
        {mapList3({
          title: `${i18nKeys[updateData.title]}`,
          text1: `${i18nKeys[updateData.text1]}`,
          text2: `${i18nKeys[updateData.text2]}`,
          color1: `${updateData.color1}`,
          color2: `${updateData.color2}`,
          date: `${i18nKeys[updateData.date]}`,
        })}
      </div>

      <div
        className="w-1320 h-353 mx-auto mt-40 rounded-90"
        style={{
          backgroundImage: `url(${bg6})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className={`w-1320 ${
          localStorage.lang === "en" ? "h-950" : "h-819"
        } mx-auto mt-40 rounded-90 bg-[#EDEDED] pt-60 pl-58 pr-80 text-[#3D3D3D] text-18 leading-48`}
      >
        <div className=" font-bold">{i18nKeys.detail_3}</div>
        <div className=" font-normal">{i18nKeys.detail_4}</div>
        <div className=" font-bold">{i18nKeys.detail_5}</div>
        <div className=" font-normal">
          <div dangerouslySetInnerHTML={{ __html: i18nKeys.detail_6 }} />
        </div>
        <div className=" font-bold">{i18nKeys.detail_7}</div>
        <div className=" font-normal">
          <div dangerouslySetInnerHTML={{ __html: i18nKeys.detail_8 }} />
        </div>
        <Link
          to="/resource/productupdates"
          className={`block mt-24 ${
            localStorage.lang === "en" ? "w-220" : "w-206"
          } text-center h-52 bg-[#141416] p-19 rounded-25 text-18 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-20 wow animate__animated animate__fadeInUp`}
        >
          <span className="text-[#FCFCFD]">{i18nKeys.detail_9}</span>
          <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
        </Link>
      </div>

      <div className="w-full mx-auto bg-[#EDEDED] mt-80 pt-80 pb-80">
        <div className="w-700 mx-auto flex justify-between mb-60 wow animate__animated animate__fadeInUp">
          <div className="w-220 h-2 border-t-2 border-[#D8D8D8] relative top-40"></div>
          <div
            className={`${
              localStorage.lang === "en" ? "w-500" : ""
            } text-center text-48 font-bold`}
          >
            {i18nKeys.detail_10}
          </div>
          <div className="w-220 h-2 border-t-2 border-[#D8D8D8] relative top-40"></div>
        </div>
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
    </div>
  );
}
