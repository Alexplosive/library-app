import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

function Bookstore ({ setScreen }) {
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

  let allBooks = undefined;
  
  if (books.length > 0){
    allBooks = books.map((book) => {
      return <Book book={book} />
    })
  }

  return (
    <div>
      <nav>
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="bg-blue-600 text-center border border-current cursor-pointer hover:bg-blue-800 sticky w-full">Add Book</h3>
      </nav>
      <p>{allBooks}</p>
    </div>
  )
}

export default Bookstore;