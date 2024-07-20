import React from "react";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Skeleton from "../components/Skeleton";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

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
      <FullBlog blog={blog}></FullBlog>
    </div>
  );
}

export default Blog;
