import "./Card.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[1] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[10]"
          src={review.image}
          alt=""
        />
        <div className="bg-violet-400 top-[-6px] absolute rounded-full w-[140px] h-[140px] z-[-5] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <h2 className="font-bold text-2xl capitalize">{review.name}</h2>
      </div>
      <div className="text-center mt-7">
        <p className="text-violet-400 uppercase text-sm">{review.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">
        <p>{review.text}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
