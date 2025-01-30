import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs";
import Bookmarks from "./component/Bookmarks";
import Nav from "./component/Nav";

const App = () => {
  const [books, setBooks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);

    /* remove the read blog from bookmark */
    const remainingBookMarks = books.filter((bookmark) => bookmark.id !== id);
    setBooks(remainingBookMarks);
  };

  const handleBtn = (blog) => {
    /*  console.log(blog) */
    const newBook = [...books, blog];
    setBooks(newBook);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="w-10/12 mx-auto mt-5 md:flex">
        <Blogs
          handleBtn={handleBtn}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks books={books} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
};

export default App;
