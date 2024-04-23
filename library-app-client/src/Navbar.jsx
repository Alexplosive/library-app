import "./App.css";
import axios from "axios";
import { useState } from "react";

function Navbar({ setScreen }) {
  // function getDataFromServer() {
  //   axios
  //     .get('/api/v1/books')
  //     .then((res) => setData(res.data[0].author))
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  return (
    <div className="m-0 h-fit">
      <header className="bg-yellow-500 p-5">
        <h1 onClick={() => {setScreen('home')}} className="font-bold underline text-3xl text-center">Zacharkiw Library</h1>
      </header>
      <nav className="flex justify-items-center gap-0 bg-red-700">
        <h2 onClick={() => {setScreen('books') }} className="flex-1 border border-current p-3 m-0 text-center">Books</h2>
        <h2 onClick={() => {setScreen('articles') }} className="flex-1 border border-current p-3 m-0 text-center">Articles</h2>
        <h2 onClick={() => {setScreen('papers') }} className="flex-1 border border-current p-3 m-0 text-center">Papers</h2>
      </nav>
    </div>  
  )
}

export default Navbar;