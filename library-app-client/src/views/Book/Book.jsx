import axios from "axios";
import { useState } from "react";

function Book ({ book, user, setScreen }) {
  const [updateForm, setUpdateForm] = useState(undefined);

  function deleteBook(){
    axios.delete(`/api/v1/books/delete/${book.id}`).
      then((response) => { console.log(response.status, response.data.token) })
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

  function reserveBook(){
    if(user){
      axios.post(`/api/v1/books/reserve/${book.id}`, { username : user.username }).
        then((response) => { console.log(response.status)})
    } else {
      setScreen('LOGIN')
    }
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
    axios.put(`/api/v1/books/update/${book.id}`, bookData).
      then((response) => { console.log(response.status, response.data.token)
    }).then(() => setUpdateForm(undefined));
  }; 

  if (updateForm){
    return updateForm;
  }
  return(
    <section className="bg-white border border-current flex items-center w-1/2">
      <section className="w-60 flex-2">
        <p className="font-bold">{book.title} by {book.author}</p>
      </section>
      <section className="border border-current flex-1 ">
        <p>Origin : {book.country} </p>
        <p>Language : {book.language} </p>
        <p>Pages : {book.pages} </p>
        <p>Publication : {book.year} </p>
      </section>
      <section className="flex justify-center m-7">
        <p onClick={reserveBook} className="text-green-700 cursor-pointer px-2">RESERVE</p>
        <p onClick={updateBook} className="text-blue-600 cursor-pointer px-2">UPDATE</p>
        <p onClick={deleteBook} className="text-red-600 cursor-pointer px-2">DELETE</p>
      </section>
    </section>
  )
}

export default Book;