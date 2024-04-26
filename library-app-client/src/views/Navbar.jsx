function Navbar({ setScreen }) {
  return (
    <div className="h-max">
      <header className="flex justify-items-center gap-0 bg-purple-600">
        <h1 onClick={() => setScreen('SIGNUP')} className="text-2xl font-bold hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Signup</h1>
        <h1 onClick={() => setScreen('LOGIN')} className="text-2xl font-bold hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Login</h1>
      </header>
      <nav className="flex justify-items-center gap-0 bg-purple-600">
        <h2 onClick={() => {setScreen('BOOKS') }} className="text-2xl font-bold hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Books</h2>
        <h2 onClick={() => {setScreen('ARTICLES') }} className="text-2xl font-bold hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Articles</h2>
        <h2 onClick={() => {setScreen('PAPERS') }} className="text-2xl font-bold hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Papers</h2>
      </nav>
    </div>  
  )
}

export default Navbar;