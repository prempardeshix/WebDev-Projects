import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="mt-[40px] w-[450px] bg-orange-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-3">
      <h1 className="text-2xl underline mt-[15px] uppercase font-bold">
        A Random GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" />}

      <button
        className="text-lg py-1 mb-[20px] rounded-lg w-10/12 bg-yellow-500"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
