/* eslint-disable react/prop-types */
import Bookmark from "./Bookmark";
const Bookmarks = ({ books, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-10 pt-4 rounded-lg ">
      <h2 className="text-3xl bg-purple-400 rounded-lg p-4">
        Reading Time: {readingTime}{" "}
      </h2>
      <h1 className="text-2xl text-center mt-5">Bookmarks:{books.length}</h1>
      {books.map((book) => (
        <Bookmark key={book.id} book={book}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
