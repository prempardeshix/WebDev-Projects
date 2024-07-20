import React from "react";
import BlogCard from "../components/BlogCard";
import App from "../App";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import Skeleton from "../components/Skeleton";

function Bulk() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
        <div>
          <Skeleton></Skeleton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "X"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd August 2003"}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bulk;
