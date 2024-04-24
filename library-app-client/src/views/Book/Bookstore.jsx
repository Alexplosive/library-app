import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

function Bookstore ({ setScreen }) {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(false);

  function getBooks() {
    axios
      .get('/api/v1/books')
      .then((res) => setBooks(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getBooks();
    setReload(false);
  }, [reload]);

  let allBooks = undefined;
  
  if (books.length > 0){
    allBooks = books.map((book) => {
      return <Book book={book} setReload={setReload} key={book.title} />
    })
  } else {
    return (
      <p>Books Loading...</p>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full">
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="bg-blue-600 text-center border border-current cursor-pointer hover:bg-blue-800 sticky w-full">Add Book</h3>
      </nav>
      {allBooks}
    </div>
  )
}

export default Bookstore;