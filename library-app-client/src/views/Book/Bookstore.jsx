import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

function Bookstore ({ setScreen }) {
  const [books, setBooks] = useState([]);

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
  }, []);

  let allBooks = undefined;
  
  if (books.length > 0){
    allBooks = books.map((book) => {
      return <Book book={book} key={book.title} setScreen={ setScreen } />
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center">No Books</p>
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="font-bold underline cursor-pointer text-xl text-center">Add the first book</h3>
      </section>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      {allBooks}
    </div>
  )
}

export default Bookstore;