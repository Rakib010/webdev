import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useState(
    () => [
      fetch("booksData.json")
        .then((res) => res.json())
        .then((data) => setBooks(data)),
    ],
    []
  );

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Books :{books.length}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

/*
  


*/
