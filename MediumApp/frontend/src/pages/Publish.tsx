import React, { useState } from "react";
import App from "../App";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setDescription] = useState("");

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full">
          <textarea
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="block mt-4 p-2.5 w-full text-sm font-semibold text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Title Here"
          ></textarea>
          <div className="pt-4 flex flex-col items-center justify-center">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block text-white p-2.5 h-full w-full text-sm font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Content Here"
            ></textarea>
            <button
              onClick={() => {
                axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
              }}
              type="button"
              className="text-white mt-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish;
