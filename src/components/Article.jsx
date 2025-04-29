import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import { useNavigate } from "react-router-dom";
export default function Article(props = {}) {
  const { column = "3", data = [] } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`w-1320 mx-auto grid grid-cols-${column} justify-items-center gap-50 text-left`}
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              localStorage.setItem("detailData", JSON.stringify(item));
              navigate("/resource/infordetail");
            }}
            className={`w-408 h-543 bg-white rounded-25 overflow-hidden border-1 border-[#ccc] wow animate__animated animate__fadeInUp hover:cursor-pointer hover:border-[#FF5C01]`}
          >
            <div
              className="w-full h-196 rounded-25 hover:scale-110"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <span
              className={`inline-block h-32 rounded-90 mt-30 ml-23 mb-20 ${item.what1Color} text-center pl-21 pr-21 pt-8 text-white text-14 leading-16 font-normal`}
            >
              {`${i18nKeys[item.what1]}`}
            </span>
            <p className="ml-23 mb-20 text-24 leading-24 font-bold line-clamp-1">
              {`${i18nKeys[item.title]}`}
            </p>
            <span
              className={`inline-block h-32 rounded-90 ml-23 mb-20 ${item.what2Color} text-center pl-21 pr-21 pt-8 text-white text-14 leading-16 font-normal`}
            >
              {`${i18nKeys[item.what2]}`}
            </span>
            <div className="w-363 border-b-1 mx-auto mb-20"></div>
            <div className="w-370 mx-auto">
              <p
                className="h-48 mb-10 text-[#000] text-16 leading-24 font-normal line-clamp-2"
                style={{
                  display: item.desc ? "block" : "none",
                }}
              >
                {`${i18nKeys[item.desc]}`}
              </p>
              <p
                className="mb-10 text-14 leading-24"
                style={{
                  display: item.time ? "block" : "none",
                }}
              >
                <span className="font-bold text-[#000]">
                  {i18nKeys.info_18}
                </span>
                <span className="text-[#333]">{`${i18nKeys[item.time]}`}</span>
              </p>
              <p
                className="mb-10 text-14 leading-24 font-bold"
                style={{
                  display: item.author ? "block" : "none",
                }}
              >
                <span className="text-[#000]">{i18nKeys.info_24}</span>
                <span className="text-[#333]">{`${
                  i18nKeys[item.author]
                }`}</span>
              </p>
              <p
                className="mb-10 text-14 leading-24"
                style={{
                  display: item.date ? "block" : "none",
                }}
              >
                <span className="font-bold text-[#000]">
                  {i18nKeys.info_20}
                </span>
                <span className="text-[#333]">{`${i18nKeys[item.date]}`}</span>
              </p>
              <p
                className="mb-10 text-14 leading-24"
                style={{
                  display: item.location ? "block" : "none",
                }}
              >
                <span className="font-bold text-[#000]">
                  {i18nKeys.info_22}
                </span>
                <span className="text-[#333]">{`${
                  i18nKeys[item.location]
                }`}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
