import { useLoaderData } from "react-router-dom";
import Post from "./post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">Post:{posts.length}</h2>
      <div className="grid grid-cols-5 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
