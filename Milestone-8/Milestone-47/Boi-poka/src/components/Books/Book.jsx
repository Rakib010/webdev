import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, rating, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="border-2 p-4 rounded-lg">
        <div className="flex justify-center bg-[#F3F3F3] p-4 rounded-lg">
          <img
            className="h-[166px] text-center rounded-lg"
            src={image}
          />
        </div>
        <div className="flex items-center gap-8 mt-4 text-semibold text-[#23BE0A]">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <p className="text-2xl font-semibold my-3">{bookName}</p>
        <p className="text-xl">By : {author}</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{category}</p>
          <p className="text-lg font-semibold">{rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
