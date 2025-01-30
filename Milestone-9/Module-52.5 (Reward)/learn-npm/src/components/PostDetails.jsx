import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { bookmarksContext } from "../providers/Bookmarks";

const PostDetails = () => {
  // first way data fetch from loader in routes
  /* const data = useLoaderData();
  const { title, body } = data; */

  const { postId } = useParams();
  const [post, setPost] = useState([]);

  // another way data fetch & show using params
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  const { title, body } = post;

  const { setBookmarks } = useContext(bookmarksContext);
  /* bookmarks function */
  const handleBookMarks = ({ post }) => {
    setBookmarks((prev) => [...prev, post]);
  };

  return (
    <div className="mt-10 space-y-5 px-10 border p-10 w-11/12 mx-auto">
      <p className="font-semibold">Post No: {postId}</p>
      <h1 className="text-xl font-bold">{title}</h1>
      <h2>{body}</h2>

      <Link className="btn btn-warning" to="/">
        Go Back
      </Link>
      <button
        onClick={() => handleBookMarks(post)}
        className="btn ml-4 btn-outline"
      >
        Add To Bookmarks
      </button>
    </div>
  );
};

export default PostDetails;
