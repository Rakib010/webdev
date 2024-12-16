import Book from "./Book";
export default function Bookstore({ books }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      // eslint-disable-next-line react/prop-types
      <h3>Books:{books.length}</h3>
      {books.map((book) => (
        // eslint-disable-next-line react/jsx-key
        <Book book={book}></Book>
      ))}
    </div>
  );
}
