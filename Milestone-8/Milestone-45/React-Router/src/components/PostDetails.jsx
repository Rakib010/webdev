import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;

  const params = useParams();
  console.log(params);

  // onClick navigate use korte hoi 
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Post Details About:{id}</h2>
      <p>Title:{title}</p>
      <p>{body}</p>
      <button className="btn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default PostDetails;
