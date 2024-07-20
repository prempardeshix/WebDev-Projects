import React from "react";
import Appbar from "./Appbar";
import { Link } from "react-router-dom";

type BlogCardInput = {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number
};

function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardInput) {
  return (
    <Link to={`../blog/${id}`}>
      <div className="border-b cursor-pointer border-slate-200 p-4">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar authorName={authorName}></Avatar>
          </div>
          <div className="flex justify-center flex-col">
            <div className="font-normal pl-2">{authorName}</div>
          </div>
          <div className="flex justify-center flex-col pl-2">
            <div>
              <Circle></Circle>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <div className="font-thin pl-2 text-slate-500 ">
              {" "}
              {publishedDate}
            </div>
          </div>
        </div>
        <div className="text-xl pt-1 font-bold">{title}</div>
        <div className="text-md font-thin">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div className="text-slate-500 pt-2 text-sm font-light pb-2">{`${Math.floor(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
}

export function Avatar({ authorName }: { authorName: string }) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-xs text-gray-600 dark:text-gray-300">
          {authorName[0]}
        </span>
      </div>
    </div>
  );
}

function Circle() {
  return <div className="h-0.5 w-0.5 bg-black font-bold rounded-full"></div>;
}

export default BlogCard;
