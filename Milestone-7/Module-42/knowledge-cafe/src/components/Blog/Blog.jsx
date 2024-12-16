import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-10">
      <img className="w-full mb-4" src={cover}></img>
      <div className="flex justify-between mb-3">
        <div className="flex ">
          <img className="w-12" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMarks(blog)}
            className="ml-2 text-red-400"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h4 className="text-xl">{title}</h4>
      <p>
        {hashtags.map((has, idx) => (
          <span key={idx}>
            <a href="">#{has}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-700 underline"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
