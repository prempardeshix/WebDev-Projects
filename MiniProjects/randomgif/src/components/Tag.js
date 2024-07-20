import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <div className="mt-[40px] w-[450px] bg-red-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-3">
      <h1 className="text-2xl underline mt-[15px] uppercase font-bold">
        Random {tag} GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" />}

      <input
        placeholder="Enter Tag"
        type="text"
        onChange={changeHandler}
        value={tag}
        className="text-center text-white text-lg py-1 mb-[5px] rounded-lg w-10/12 bg-black"
      />

      <button
        className="text-lg py-1 mb-[20px] rounded-lg w-10/12 bg-yellow-500"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
