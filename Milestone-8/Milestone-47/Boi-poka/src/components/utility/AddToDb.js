import { json } from "react-router-dom";
import { toast } from "react-toastify";

const getStoredReadList = () => {
  // read list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    alert("Already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    
    // ideally
    toast("This book is added to your list");
  }
};

export { addToStoreReadList, getStoredReadList };
