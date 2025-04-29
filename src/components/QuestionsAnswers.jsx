import { useState } from "react";
import what from "@/assets/what.png";
import toOpen from "@/assets/toOpen.png";
import toClose from "@/assets/toClose.png";

const QACard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`w-648 h-100 bg-white pl-20 pr-20 flex justify-between items-center rounded-tl-25 rounded-tr-25 wow animate__animated animate__fadeInUp ${
          isOpen ? "" : "rounded-bl-25 rounded-br-25"
        }`}
      >
        <h3 className="text-20 leading-24 font-medium">
          <img src={what} className="w-32 h-32 inline-block mr-20 align-top" />
          <div className="w-500 inline-block relative top-4 text-[#222]">
            {question}
          </div>
        </h3>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? toClose : toOpen}
          className="w-32 h-32 inline-block hover:cursor-pointer"
        />
      </div>
      <div
        className={`overflow-hidden relative bottom-10 pt-0 p-20 rounded-bl-25 rounded-br-25 bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <hr className="border-t-2 mb-20" />
        <div className="text-[#666] text-16 leading-24 font-normal">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

const QuestionsAnswers = ({ faqs }) => {
  return (
    <div className="w-1320 mx-auto pt-50 pb-80">
      <div className="grid grid-cols-2 gap-24">
        {faqs.map((faq, index) => (
          <QACard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
