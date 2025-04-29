import bg from "@/assets/recommended/bg.png";
import arrowRight from "@/assets/arrow-right.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];

export default function Recommended() {
  function checkEmail() {
    var email = document.getElementById("email");
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
  return (
    <div>
      <div
        className={`w-full h-300 text-center text-white wow animate__animated animate__fadeInUp`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className={`pt-67 mx-auto text-48 font-bold`}>
          {i18nKeys.recommend_1}
        </p>
        <div className={`mx-auto text-18 leading-28 font-normal pt-18`}>
          <div dangerouslySetInnerHTML={{ __html: i18nKeys.recommend_2 }} />
        </div>
      </div>

      <div className="bg-[#EDEDED] pt-32 pb-66">
        <div className="bg-white w-414 h-1168 mx-auto rounded-30 pt-45 pl-40 pr-40 pb-41">
          <form className="mx-auto text-[#333333] text-14 leading-16 font-medium">
            <p>{i18nKeys.recommend_3}</p>
            <input
              type="text"
              id="t1"
              name="t1"
              placeholder={i18nKeys.recommend_4}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />

            <p>{i18nKeys.recommend_5}</p>
            <input
              id="email"
              type="email"
              name="t2"
              placeholder={i18nKeys.recommend_6}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
              required
            />

            <p>{i18nKeys.recommend_7}</p>
            <input
              type="text"
              id="t3"
              name="t3"
              placeholder={i18nKeys.recommend_8}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />

            <p>{i18nKeys.recommend_9}</p>
            <input
              type="text"
              id="t4"
              name="t4"
              placeholder={i18nKeys.recommend_10}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />

            <p>{i18nKeys.recommend_11}</p>
            <input
              type="text"
              id="t5"
              name="t5"
              placeholder={i18nKeys.recommend_12}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />

            <p>{i18nKeys.recommend_13}</p>
            <input
              type="tel"
              id="t6"
              name="t6"
              placeholder={i18nKeys.recommend_14}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />

            <p>{i18nKeys.recommend_15}</p>
            <div className="bg-[#EDEDED] w-334 h-46 relative mt-8 rounded-10 mb-25">
              <select
                className="bg-[#EDEDED] w-304 h-46 mt-8 mb-25 rounded-10 absolute left-15 top-[-8px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70] flex-1"
                defaultValue="1"
              >
                <option value="1">1-10{i18nKeys.recommend_16}</option>
                <option value="2">1-20{i18nKeys.recommend_16}</option>
                <option value="3">1-50{i18nKeys.recommend_16}</option>
              </select>
            </div>

            <p>{i18nKeys.recommend_17}</p>
            <div className="bg-[#EDEDED] w-334 h-46 relative mt-8 rounded-10 mb-25">
              <select
                className="bg-[#EDEDED] w-304 h-46 mt-8 mb-25 rounded-10 absolute left-15 top-[-8px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70] flex-1"
                defaultValue="1"
              >
                <option value="1">1-10{i18nKeys.recommend_16}</option>
                <option value="2">1-20{i18nKeys.recommend_16}</option>
                <option value="3">1-50{i18nKeys.recommend_16}</option>
              </select>
            </div>

            <p>{i18nKeys.recommend_18}</p>
            <div className="bg-[#EDEDED] w-334 h-46 relative mt-8 rounded-10 mb-25">
              <select
                className="bg-[#EDEDED] w-304 h-46 mt-8 mb-25 rounded-10 absolute left-15 top-[-8px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70] flex-1"
                defaultValue="1"
              >
                <option value="1">{i18nKeys.recommend_19}</option>
              </select>
            </div>

            <p>{i18nKeys.recommend_20}</p>
            <input
              type="text"
              id="t8"
              name="t8"
              placeholder={i18nKeys.recommend_21}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-10 pl-15 rounded-10"
            />
            <div className="text-[#3D3D3D] text-14 leading-15 font-normal">
              <div
                dangerouslySetInnerHTML={{ __html: i18nKeys.recommend_22 }}
              />
            </div>
            <button
              type="submit"
              onClick={checkEmail}
              className="block w-334 h-52 bg-[#000] p-18 rounded-25 text-16 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto text-center  wow animate__animated animate__fadeInUp"
            >
              <span className="text-[#FCFCFD]">{i18nKeys.recommend_23}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
