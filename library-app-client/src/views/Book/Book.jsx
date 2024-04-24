import axios from "axios";

function Book ({ book }) {
  function deleteBook(){
    axios.delete(`/api/v1/books/delete/${book.title}`).
      then((response) => { console.log(response.status, response.data.token) 
    })
  }

  if (book){
    return(
      <section className="border border-current">
        <p>Book name : {book.title} </p>
        <p>Author : {book.author} </p>
        <p>Origin : {book.country} </p>
        <p>Language : {book.language} </p>
        <p>Pages : {book.pages} </p>
        <p>Publication : {book.year} </p>
        <p onClick={deleteBook} className="text-red-600 cursor-pointer">DELETE</p>
      </section>
    )
  }
}

export default Book;