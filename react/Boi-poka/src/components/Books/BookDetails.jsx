import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../utility/AddToDb";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    tags,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (id) => {
    addToStoreReadList(id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white border rounded-lg shadow-lg p-8">
      <Helmet>
        <title>Boi pok | Book Detail</title>
      </Helmet>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex justify-center items-start">
          <img
            className="rounded-lg w-full object-cover shadow-md"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">{bookName}</h2>
          <p className="text-lg text-gray-600">
            By: <span className="font-semibold">{author}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">{category}</p>
          <div className="mt-4">
            <p className="font-bold text-gray-800">Review:</p>
            <p className="text-gray-600 mt-1">{review}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 text-[#23BE0A] font-semibold">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 px-3 py-1 rounded-full text-sm text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Number of Pages:</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span>{" "}
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={() => handleRead(id)} className="btn">
              Read
            </button>
            <button className="btn">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
