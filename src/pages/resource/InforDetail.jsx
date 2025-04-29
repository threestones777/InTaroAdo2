import bg4 from "@/assets/information/bg4.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

export default function InforDetail() {
  const detailData = JSON.parse(localStorage.detailData);
  console.log(detailData);
  return (
    <div>
      <div
        className={`w-full h-353 text-white pt-73 pl-104`}
        style={{
          background: `linear-gradient( 180deg, #000000 0%, #272727 100%)`,
        }}
      >
        <p className="text-48 leading-48 font-bold">{`${
          i18nKeys[detailData.title]
        }`}</p>
        <p
          className="text-24 leading-48 font-normal mt-18"
          style={{
            display: detailData.desc ? "block" : "none",
          }}
        >{`${i18nKeys[detailData.desc]}`}</p>
        <div className="mt-18 flex text-white text-center">
          <div
            className={`pl-21 pr-21 h-32 ${detailData.what1Color} rounded-90 mr-10 pt-5`}
          >
            {`${i18nKeys[detailData.what1]}`}
          </div>
          <div
            className={`pl-21 pr-21 h-32 ${detailData.what2Color} rounded-90 pt-5`}
          >
            {`${i18nKeys[detailData.what2]}`}
          </div>
        </div>
        <div className="mt-18 text-18 leading-48 font-normal text-[#888] flex">
          <span>{`${i18nKeys[detailData.date]}`}</span>
          <span
            className="ml-10"
            style={{
              display: detailData.author ? "block" : "none",
            }}
          >
            <span>{i18nKeys.info_24}</span>
            <span>{`${i18nKeys[detailData.author]}`}</span>
          </span>
        </div>
      </div>

      <div
        className="w-1320 h-353 mx-auto rounded-30 mt-30 mb-30"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-1260 h-576 mx-auto text-[#3D3D3D] text-18 leading-48 font-normal">
        <div
          dangerouslySetInnerHTML={{
            __html: `${i18nKeys[detailData.content]}`,
          }}
        />
      </div>

      <div className="mt-117">
        <div className="w-800 mx-auto flex justify-between wow animate__animated animate__fadeInUp">
          <div className="w-220 h-2 border-1 relative top-40"></div>
          <div
            className={`${
              localStorage.lang === "en" ? "w-500" : ""
            } text-center text-48 font-bold`}
          >
            {i18nKeys.info_34}
          </div>
          <div className="w-220 h-2 border-1 relative top-40"></div>
        </div>
        <p className="text-center mt-111 mb-80 text-[#ccc] text-18 leading-24 font-medium">
          {i18nKeys.info_35}
        </p>
      </div>
    </div>
  );
}
