import "./Book.css";
export default function Book({ book }) {
  const { name, price } = book;
  return (
    <div className="book">
      <h3>Book :{(name, price)}</h3>
    </div>
  );
}
