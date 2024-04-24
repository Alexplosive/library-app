import axios from "axios";
import { useState } from "react";

function Book ({ book, setReload }) {
  const [updateForm, setUpdateForm] = useState(undefined);

  function deleteBook(){
    axios.delete(`/api/v1/books/delete/${book.title}`).
      then((response) => { console.log(response.status, response.data.token) }).then(() => setReload(true))
  }

  function updateBook(){
    setUpdateForm(<form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input className="flex-1 w-40 rounded" defaultValue={book.title} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={book.author} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={book.language} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={book.country} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={book.pages} type="number"></input>
    <input className="flex-1 w-40 rounded" defaultValue={book.year} type="number" max="2024"></input>
    <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
  </form>)
  }

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
    axios.put(`/api/v1/books/update/${book.title}`, bookData).
      then((response) => { console.log(response.status, response.data.token)
    }).then(() => setUpdateForm(undefined)).then(() => setReload(true));
  }; 

  if (updateForm){
    return updateForm;
  }
  return(
    <section className="bg-green-400 border border-current flex flex-col items-center w-1/2">
      <p>Book name : {book.title} </p>
      <p>Author : {book.author} </p>
      <p>Origin : {book.country} </p>
      <p>Language : {book.language} </p>
      <p>Pages : {book.pages} </p>
      <p>Publication : {book.year} </p>
      <section className="flex justify-center">
        <p onClick={updateBook} className="text-blue-600 cursor-pointer">UPDATE</p>
        <p onClick={deleteBook} className="text-red-600 cursor-pointer">DELETE</p>
      </section>
    </section>
  )
}

export default Book;