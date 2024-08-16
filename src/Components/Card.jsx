import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-4 md:p-6">
      <div className="relative mt-[-7rem] md:mt-0">
        <div className="relative z-10">
          <img
            className="rounded-full w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
            src={review.image}
            alt={`${review.name}'s picture`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-violet-400 rounded-full z-[-1] transform translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"></div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="font-bold text-2xl text-black capitalize leading-3 md:text-3xl">
          {review.name}
        </p>
        <p className="text-violet-600 text-base uppercase mt-4 md:mt-6 md:text-lg">
          {review.job}
        </p>
        <div className="text-violet-400 mx-auto mt-5 md:mt-8">
          <FaQuoteLeft size={30} />
        </div>
        <p className="text-center mt-4 text-slate-500 md:text-lg">
          {review.text}
        </p>
        <div className="text-violet-400 mx-auto mt-5 md:mt-8">
          <FaQuoteRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Card;