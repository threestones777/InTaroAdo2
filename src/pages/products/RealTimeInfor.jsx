import bg from "@/assets/realtimeinfor/bg.png";
import bg1 from "@/assets/realtimeinfor/bg1.png";
import bg2 from "@/assets/realtimeinfor/bg2.png";
import bg3 from "@/assets/realtimeinfor/bg3.png";
import bg4 from "@/assets/realtimeinfor/bg4.png";
import Topic from "@/components/Topic";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Partner from "@/components/Partner";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
const images = [partner1, partner2, partner3, partner4, partner5];
import QuestionsAnswers from "@/components/QuestionsAnswers";
const faqs = [
  {
    question: `${i18nKeys.real_14}`,
    answer: `${i18nKeys.real_15}`,
  },
  {
    question: `${i18nKeys.real_16}`,
    answer: `${i18nKeys.real_17}`,
  },
  {
    question: `${i18nKeys.real_18}`,
    answer: `${i18nKeys.real_19}`,
  },
  {
    question: `${i18nKeys.real_20}`,
    answer: `${i18nKeys.real_21}`,
  },
];

export default function RealTimeInfor() {
  return (
    <div>
      <Topic
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.real_1}
        desc={i18nKeys.real_2}
        path="/resource/recommended"
        btnText={i18nKeys.real_3}
      />

      <div className="mt-80">
        <div className="mb-43 text-[#141416]  text-30 font-bold text-center">
          {i18nKeys.partner_1}
        </div>
        <Partner images={images} />
      </div>

      <div className="w-full mt-80 mx-auto h-500 bg-[#FF5C01] flex justify-center">
        <div className="w-750 h-500">
          <div
            className="w-550 h-502 mx-auto relative bottom-2  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-500 text-white rounded-tr-35 rounded-br-35">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-550"
            } h-220 mx-auto mt-131 ml-20  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.real_4}</p>
            <p className="text-16 leading-24 font-normal mt-32 opacity-80">
              {i18nKeys.real_5}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 mx-auto h-412 flex justify-between">
        <div className="w-700 h-412">
          <div
            className={`${
              localStorage.lang === "en" ? "w-700" : "w-550"
            } h-220 mt-90`}
          >
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.real_6}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.real_7}
            </p>
          </div>
        </div>
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="w-1320 mx-auto mt-80 h-412 rounded-35 flex justifu-between">
        <div className="w-650 h-412">
          <div
            className="w-550 h-412 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-700 h-412">
          <div className="w-550 h-220 mx-auto mt-121">
            <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
              {i18nKeys.real_8}
            </p>
            <p className="text-16 leading-24 font-normal mt-32  wow animate__animated animate__fadeInUp text-[#000]">
              {i18nKeys.real_9}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1320 mt-80 bg-[#000] text-white rounded-35 mx-auto h-512 flex justifu-between">
        <div className="w-700 h-512 rounded-tr-35 rounded-br-35 ">
          <div
            className={`${
              localStorage.lang === "en" ? "w-600 mt-100" : "w-550 mt-141"
            } h-220 mx-auto  wow animate__animated animate__fadeInUp`}
          >
            <p className="text-48 leading-64 font-bold">{i18nKeys.real_10}</p>
            <p className="text-16 leading-24 font-normal mt-32">
              {i18nKeys.real_11}
            </p>
          </div>
        </div>
        <div className="w-650 h-512 pt-51">
          <div
            className="w-550 h-410 mx-auto  wow animate__animated animate__fadeInUp"
            style={{
              backgroundImage: `url(${bg4})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full mt-80">
        <div className="mx-auto text-center pt-103">
          <p className="text-48 leading-64 font-bold  wow animate__animated animate__fadeInUp">
            {i18nKeys.real_12}
          </p>
          <p className="text-24 leading-24 font-normal mt-20  wow animate__animated animate__fadeInUp">
            {i18nKeys.real_13}
          </p>
          <div className="text-left">
            <QuestionsAnswers faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
