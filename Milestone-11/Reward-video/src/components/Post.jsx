import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import LazyLoad from "react-lazyload";

const Post = () => {
  const data = useLoaderData();
  /* console.log(data); */

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 w-11/12 mx-auto">
        {data.map((post, i) => (
          <LazyLoad debounce={300} once height={200}>
            <Card key={i} post={post}></Card>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Post;
