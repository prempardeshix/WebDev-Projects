import React from "react";
import Appbar from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full py-20 px-10 max-w-screen-xl">
          <div className="grid-cols-8 col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 2nd August 2003</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="text-xl font-bold">
              {blog.author.name || "Anonymous"}{" "}
            </div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar authorName={blog.author.name || "Anonymous"}></Avatar>
              </div>{" "}
              <div>
                <div>
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
