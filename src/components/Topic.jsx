import arrowRight from "@/assets/arrow-right.png";
import arrowRightBlack from "@/assets/arrow-right-black.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Topic(props = {}) {
  const [isHover, setIsHover] = useState(false);
  const {
    p_t = "pt-173",
    t_w = "",
    d_w = "",
    text_color = "",
    bg = "",
    title = "",
    desc = "",
    path = "",
    btnText = "",
    text = "text-16 leading-32 opacity-80",
  } = props;
  return (
    <div
      className={`w-full h-540 text-center ${text_color}  wow animate__animated animate__fadeInUp`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${t_w} mx-auto text-48 font-bold ${p_t}`}>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <p className={`${d_w} mx-auto ${text} font-normal pt-10`}>{desc}</p>
      <Link
        to={path}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="block w-206 h-52 bg-[#FFF] p-18 text-center rounded-25 text-[#000] text-18 leading-16 hover:bg-[#FF5C01] hover:text-white hover:cursor-pointer mt-20 mx-auto wow animate__animated animate__fadeInUp"
      >
        <span>{btnText}</span>
        <img
          src={isHover ? arrowRight : arrowRightBlack}
          className="inline-block w-20 h-20 ml-12"
        />
      </Link>
    </div>
  );
}
