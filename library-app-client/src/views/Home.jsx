function Home({ setScreen }) {
  return(
    <section className="height: 60%">
      <h2 className="text-5xl text-center m-10">Welcome to Zacharkiw's library</h2>
      <section className="flex justify-evenly text-4xl h-full">
        <section className="flex-1 m-5 border border-current rounded-xl h-full bg-gray-300">
          <h3 className="pt-2 text-center underline">Books</h3>  
          <h4 className="p-5 text-center">Here is our special collection of books that are available. Our collection holds many different books that can be search through in our database. Find a book you like and reserve it if available! </h4>
          <h6 onClick={() => setScreen('BOOKS')} className="p-10 text-center font-bold underline cursor-pointer">Click here to access the book database</h6>
        </section>
        <section className="flex-1 m-5 border border-current rounded-xl h-full bg-gray-300">
          <h3 className="pt-2 text-center underline">Articles</h3>
          <h4 className="p-5 text-center">Here is our special collection of articles that are available. Our collection holds many different articles that can be search through in our database. Find an article you like and enjoy your reading! </h4>
          <h6 onClick={() => setScreen('ARTICLES')} className="p-10 text-center font-bold underline cursor-pointer">Click here to access the article database</h6>
        </section>
        <section className="flex-1 m-5 border border-current rounded-xl h-full bg-gray-300">
          <h3 className="pt-2 text-center underline">Papers</h3>
          <h4 className="p-5 text-center">Here is our special collection of papers that are available. Our collection holds many different papers that can be search through in our database. Find a paper you like and enjoy your research! </h4>
          <h6 onClick={() => setScreen('PAPERS')} className="p-10 text-center font-bold underline cursor-pointer">Click here to access the article database</h6>
        </section>
      </section>
    </section>
  )
}

export default Home;