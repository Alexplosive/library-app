function Book ({ book }) {
  if (book){
    return(
      <section className="border border-current">
        <p>Book name : {book.title} </p>
        <p>Author : {book.author} </p>
        <p>Origin : {book.country} </p>
        <p>Language : {book.language} </p>
        <p>Pages : {book.pages} </p>
        <p>Publication : {book.year} </p>
      </section>
    )
  }
}

export default Book;