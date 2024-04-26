import axios from "axios";
import { useState } from "react";

function AddBook ({setScreen}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      author: e.target[1].value,
      country: e.target[3].value,
      language: e.target[2].value,
      pages: e.target[4].value,
      title: e.target[0].value,
      year: e.target[5].value
    };
    axios.post('/api/v1/books/add', bookData).
      then((response) => { console.log(response.status, response.data.token) }).then(() => { setScreen('BOOKS')
    });
  };

  return(
    <form onSubmit={handleSubmit} id="add-book" className="flex flex-col items-center">
      <input className="flex-1 w-40 rounded" placeholder="Title" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Author" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Language" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Country" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Pages" type="number"></input>
      <input className="flex-1 w-40 rounded" placeholder="year" type="number" max="2024"></input>
      <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
    </form>
  )
}

export default AddBook;