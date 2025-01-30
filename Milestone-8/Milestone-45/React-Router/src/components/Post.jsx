import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate()

  const handleShow = () => {
    navigate(`/post/${id}`)
  };

  return (
    <div className="border-2 border-purple-500 p-4 rounded-lg text-center">
      <p>Post of Id:{id}</p>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>
        <button className="btn">Show Details</button>
      </Link>
      <button onClick={handleShow} className="btn">
        Click to see details
      </button>
    </div>
  );
};

export default Post;
