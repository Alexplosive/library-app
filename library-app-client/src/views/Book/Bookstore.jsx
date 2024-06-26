import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

function Bookstore ({ setScreen, user}) {
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

  function searchBook(e){
    e.preventDefault()
    if (e.target[0].value !== ""){
      axios.get(`/api/v1/books/search/${e.target[0].value}`).
        then((response) => setBooks(response.data))
    } else {
      getBooks()
    }
  }

  let allBooks = undefined;
  
  if (books.length > 0){
    allBooks = books.map((book) => {
      if(book){
        return <Book book={book} key={book.id} setScreen={ setScreen } user={ user } getBooks={ getBooks } />
      }
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center text-white text-3xl">No Books</p>
      </section>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={searchBook}>
        <input></input>
        <button className="bg-purple-600" type="submit">Search!</button>
      </form>
      {allBooks}
    </div>
  )
}

export default Bookstore;