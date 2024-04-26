import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import Navbar from "../Navbar";
import { useAtom } from "jotai";
import * as state from "../../state"

function Bookstore () {
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
      return <Book book={book} key={book.title} />
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center text-white">No Books</p>
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="font-bold underline cursor-pointer text-xl text-center">Add the first book</h3>
      </section>
    )
  }

  return (
    <div className="m-0 overflow-hidden">
      <Navbar />
      <h3 onClick={() => { setScreen('ADD-BOOK') }} className="rounded-3xl bg-purple-600 m-5 text-2xl text-center border border-current cursor-pointer hover:bg-purple-800 sticky w-7/8">Add Book</h3>
      <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll w-full items-center">
        <div className="w-full flex flex-col items-center">
          {allBooks}
        </div>
      </section>
      <footer>
        <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
      </footer>
    </div>  
  )
}

export default Bookstore;