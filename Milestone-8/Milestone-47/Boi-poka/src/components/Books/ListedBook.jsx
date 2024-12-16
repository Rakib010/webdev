import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/AddToDb";
import Book from "./Book";
import { Helmet } from "react-helmet-async";

const ListedBook = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  // ideally we will directly get the read book list from the database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    // worst way

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    // const sortedReadList = [...readList.sort()];

    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Boi Poka | Listed Book</title>
      </Helmet>

      <h3 className="text-3xl font-bold text-center p-4 my-8 bg-[#1313130D] rounded-lg">
        Books
      </h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort} ` : "Sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Ratings")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("No of pages")}>
            <a>Number of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl my-6">Books I read : {readList.length} </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {readList.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">WishList Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
