import bg from "@/assets/privacy/bg.png";
import bg1 from "@/assets/helpcenter/bg1.png";
import { Link } from "react-router-dom";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

const teamDownload = () => {
  const pdfUrl = "/TeamConditions_coma.pdf";
  window.open(pdfUrl, "_blank");
};

const handleDownload = () => {
  const pdfUrl = "/PrivacyPolicy_coma.pdf";
  window.open(pdfUrl, "_blank");
};

export default function PrivacyCondition() {
  return (
    <div className="">
      <div
        className={`w-full h-360 text-center text-white`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className={`pt-112 mx-auto text-48 font-bold  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.condition_1}
        </p>
        <p
          className={`w-678 mx-auto text-24 leading-48 font-normal pt-10  wow animate__animated animate__fadeInUp`}
        >
          {i18nKeys.condition_2}
        </p>
      </div>

      <div className="w-1320 mx-auto mt-32 text-14 leading-24 font-normal text-[#888888]">
        <Link to="/resource/helpcenter" className="hover:text-[#FF5C01]">
          {i18nKeys.policy_3}
        </Link>
        <img
          src={bg1}
          className="w-20 h-20 inline-block relative bottom-1 mx-5"
        />
        <span>{i18nKeys.policy_4}</span>
        <img
          src={bg1}
          className="w-20 h-20 inline-block relative bottom-1 mx-5"
        />
        <span className="text-[#000]">{i18nKeys.condition_3}</span>
        <p className="text-[#000] text-18 leading-48 font-bold mt-40">
          {i18nKeys.condition_3}
        </p>
        <p className="mt-20 text-18 leading-28 font-normal">
          <span
            className="inline-block text-[#004BFF] hover:cursor-pointer hover:underline"
            onClick={teamDownload}
          >
            {i18nKeys.condition_4}
          </span>
          <span className="inline-block text-[#000]">
            {i18nKeys.condition_5}
          </span>
        </p>
        <p className="mt-10 mb-65 text-18 leading-28 font-normal">
          <span
            className="inline-block text-[#004BFF] hover:cursor-pointer hover:underline"
            onClick={handleDownload}
          >
            {i18nKeys.condition_6}
          </span>
          <span className="inline-block text-[#000]">
            {i18nKeys.condition_7}
          </span>
        </p>
        {/* <p className="mt-10 mb-65 text-18 leading-28 font-normal">
          <span className="inline-block text-[#004BFF] hover:cursor-pointer hover:underline">
            {i18nKeys.condition_8}
          </span>
          <span className="inline-block text-[#000]">
            {i18nKeys.condition_9}
          </span>
        </p> */}
      </div>
    </div>
  );
}
