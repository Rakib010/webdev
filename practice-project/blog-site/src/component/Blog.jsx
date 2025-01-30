import PropTypes from "prop-types";
const Blog = ({ blog, handleBtn, handleReadingTime }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <div className="border-2 p-4 rounded-lg mt-4">
        <img className="w-full rounded-lg mb-2" src={cover} alt="" />
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <img className="w-10" src={author_img} alt="" />
            <div>
              <p>{author}</p>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>{reading_time} min read</p>
            <button onClick={() => handleBtn(blog)} className="btn">
              BookMarks
            </button>
          </div>
        </div>
        <h2 className="my-2 font-bold">{title}</h2>
        {hashtags.map((hash, index) => (
          <span key={index}>#{hash}</span>
        ))}
        <div className="mt-3">
          <button
            onClick={() => handleReadingTime(reading_time, id)}
            className="btn"
          >
            Marks as read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBtn: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blog;
