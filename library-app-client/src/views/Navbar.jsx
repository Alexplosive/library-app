function Navbar({ setScreen }) {
  return (
    <div className="m-0 h-fit">
      <header className="bg-yellow-500 p-5">
        <h1 onClick={() => {setScreen('HOME')}} className="font-bold underline text-3xl text-center  cursor-pointer">Zacharkiw Library</h1>
      </header>
      <nav className="flex justify-items-center gap-0 bg-red-700">
        <h2 onClick={() => {setScreen('BOOKS') }} className="flex-1 border border-current p-3 m-0 text-center cursor-pointer">Books</h2>
        <h2 onClick={() => {setScreen('ARTICLES') }} className="flex-1 border border-current p-3 m-0 text-center cursor-pointer">Articles</h2>
        <h2 onClick={() => {setScreen('PAPERS') }} className="flex-1 border border-current p-3 m-0 text-center cursor-pointer">Papers</h2>
      </nav>
    </div>  
  )
}

export default Navbar;