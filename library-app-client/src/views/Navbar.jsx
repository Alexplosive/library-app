import { useAtom } from "jotai"
import * as state from '../state'
import { Link } from "react-router-dom"

function Navbar() {
  const [user, setUser] = useAtom(state.user)

  if(user){
    return(
      <div className="h-max m-10">
        <header className="">
          <h1 onClick={ () => setUser(undefined) } className="text-2xl hover:bg-purple-800 bg-purple-600 cursor-pointer font-bold border border-current p-3 m-0 text-center rounded-3xl">Current User: {user.username} ({user.role}) / Logout</h1>
        </header>
        <nav className="flex justify-items-center gap-0 m-10">
          <h2 onClick={() => {setScreen('BOOKS') }} className="text-2xl font-bold bg-purple-600 rounded-3xl hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Books</h2>
          <h2 onClick={() => {setScreen('ARTICLES') }} className="text-2xl font-bold bg-purple-600 rounded-3xl hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Articles</h2>
          <h2 onClick={() => {setScreen('PAPERS') }} className="text-2xl font-bold bg-purple-600 rounded-3xl hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Papers</h2>
        </nav>
      </div>
    )
  }
  return (
    <div className="h-max m-5">
      <header className="flex justify-items-center gap-0">
        <Link to={'signup'} className="text-2xl font-bold rounded-3xl bg-purple-600 hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer"><h1>Signup</h1></Link>
        <Link to={'/login'} className="text-2xl font-bold rounded-3xl bg-purple-600 hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer"><h1>Login</h1></Link>
      </header>
      <nav className="flex justify-items-center gap-0 m-5">
        <h2 onClick={() => {setScreen('BOOKS') }} className="text-2xl font-bold rounded-3xl bg-purple-600 hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Books</h2>
        <h2 onClick={() => {setScreen('ARTICLES') }} className="text-2xl font-bold rounded-3xl bg-purple-600 hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Articles</h2>
        <h2 onClick={() => {setScreen('PAPERS') }} className="text-2xl font-bold rounded-3xl bg-purple-600 hover:bg-purple-800 flex-1 border border-current p-3 m-0 text-center cursor-pointer">Papers</h2>
      </nav>
    </div>  
  )
}

export default Navbar;