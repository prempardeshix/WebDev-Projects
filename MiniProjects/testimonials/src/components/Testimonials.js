import "./Testimonials.css";
import Card from "./Card.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";

function Testimonials(props) {
  let review = props.reviews;

  const [index, setIndex] = useState(0);

  function leftClickHandler() {
    if (index - 1 < 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightClickHandler() {
    if (review.length <= index + 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let random = Math.floor(Math.random() * review.length);
    setIndex(random);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700">
      <Card review={review[index]}></Card>

      <div className="text-3xl mt-5 gap-3 flex justify-center font-bold text-violet-400">
        <button
          onClick={leftClickHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightClickHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className="text-white bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg mt-5"
        >
          Surprise Me!
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
