import bg from "@/assets/submitfeedback/bg.png";
import arrowRight from "@/assets/arrow-right.png";
import i18n from "@/i18n/i18n.js";
const i18nKeys = i18n[localStorage.lang || "cn"];
import Topic from "@/components/Topic";
import Select from "react-select";
import "bootstrap-icons/font/bootstrap-icons.css";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected
      ? "#f97316"
      : state.isFocused
      ? "#f97316"
      : "#6b7280",
    backgroundColor: state.isSelected
      ? "white"
      : state.isFocused
      ? "white"
      : "white",
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000", // 选中后的显示文本颜色
  }),
  control: (provided) => ({
    ...provided,
    borderColor: "#EDEDED",
    "&:hover": {
      borderColor: "#0055c1",
    },
    backgroundColor: "#EDEDED",
    padding: 0,
    boxShadow: "none",
    width: "334px",
    position: "relative",
    bottom: "15px",
    right: "15px",
    minHeight: "46px",
    borderRadius: "10px",
    borderWidth: "2px",
  }),
};

export default function SubmitFeedback() {
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
  const options = [
    {
      value: "1",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_12}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_13}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "3",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_14}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "4",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_15}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "5",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_16}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "6",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_17}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "7",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_18}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "8",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_19}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "9",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_20}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "10",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_21}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "11",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_22}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "12",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_23}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "13",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_24}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "14",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_25}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "15",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_26}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
    {
      value: "16",
      label: (
        <div className="flex justufy-between">
          <span className="w-250">{i18nKeys.feed_27}</span>
          <i className="bi bi-arrow-right w-16 h-16 relative left-30"></i>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Topic
        p_t="pt-92"
        text_color="text-white"
        text="text-24 leading-48"
        bg={bg}
        title={i18nKeys.feed_1}
        desc={i18nKeys.feed_2}
        path="/resource/recommended"
        btnText={i18nKeys.feed_3}
      />

      <div className="bg-[#EDEDED] h-721">
        <div className="bg-white w-414 h-729 mx-auto rounded-30 pt-45 pl-40 pr-40 pb-41 relative bottom-150">
          <form className="mx-auto text-[#333333] text-14 leading-16 font-medium">
            <p>{i18nKeys.feed_4}</p>
            <input
              type="text"
              id="t1"
              name="t1"
              placeholder={i18nKeys.feed_5}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />

            <div>
              <div dangerouslySetInnerHTML={{ __html: i18nKeys.feed_6 }} />
            </div>
            <input
              type="email"
              id="email"
              name="t2"
              placeholder={i18nKeys.feed_7}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
              required
            />

            <p>{i18nKeys.feed_8}</p>
            <input
              type="text"
              id="t3"
              name="t3"
              placeholder={i18nKeys.feed_9}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
            />

            <p>{i18nKeys.feed_10}</p>
            <Select
              id="tt"
              placeholder={i18nKeys.feed_11}
              defaultValue={options[0]}
              options={options}
              styles={customStyles}
              className="bg-[#EDEDED] w-334 h-46 mt-8 mb-25 p-15 rounded-10"
              classNamePrefix="react-select"
            />

            <p>{i18nKeys.feed_28}</p>
            <textarea
              id="problem"
              name="problem"
              placeholder={i18nKeys.feed_29}
              className="resize-none bg-[#EDEDED] w-334 h-90 mt-8 mb-25 p-15 rounded-10"
            ></textarea>
            <button
              type="submit"
              onClick={checkEmail}
              className="block w-334 h-52 bg-[#000] p-18 rounded-25 text-16 leading-16 hover:bg-[#FF5C01] hover:cursor-pointer mt-32 mx-auto text-center  wow animate__animated animate__fadeInUp"
            >
              <span className="text-[#fff]">{i18nKeys.feed_30}</span>
              <img src={arrowRight} className="inline-block w-20 h-20 ml-12" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
