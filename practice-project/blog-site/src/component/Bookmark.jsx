const Bookmark = ({ book }) => {
  const { title } = book;
  return (
    <div className="bg-slate-200 p-4 m-4 border rounded-lg">
      <h2>{title}</h2>
    </div>
  );
};

export default Bookmark;
