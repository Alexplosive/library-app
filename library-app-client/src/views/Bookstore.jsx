import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

function Bookstore () {
  const [books, setBooks] = useState([]);

  function getDataFromServer() {
    axios
      .get('/api/v1/books')
      .then((res) => setBooks(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getDataFromServer();
  }, []);

  let allBooks = undefined
  
  if (books.length > 0){
    allBooks = books.map((book) => {
      return <Book book={book} />
    })
  }

  return (
    <div>
      <p>{allBooks}</p>
    </div>
  )
}

export default Bookstore;