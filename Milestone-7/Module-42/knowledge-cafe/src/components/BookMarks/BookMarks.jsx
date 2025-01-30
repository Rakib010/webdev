import PropTypes from "prop-types";
import BookMark from "../Header/BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 ">
      <div>
        <h2>Reading Time:{readingTime}</h2>
      </div>
      <h2 className="text-xl text-center font-bold">
        BooksMarked Blogs:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
