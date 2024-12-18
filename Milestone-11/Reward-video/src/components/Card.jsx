import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const { id, title, body } = post;

  // state diye data pass kora jay
  const data = "Hello world";

  return (
    <div className="border p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h2>{body}</h2>
      <Link state={data} to={`/post/${id}`} className="btn btn-success my-4">
        View Post
      </Link>
    </div>
  );
};

export default Card;
