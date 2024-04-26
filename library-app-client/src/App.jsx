import "./App.css";
import { useState } from "react";
import Navbar from "./views/Navbar";
import Bookstore from "./views/Book/Bookstore";
import AddBook from "./views/Book/AddBook";
import Home from "./views/Home";
import Articlestore from "./views/Article/Articlestore";
import AddArticle from "./views/Article/AddArticle";
import Paperstore from "./views/Papers/Paperstore";
import AddPaper from "./views/Papers/AddPaper";
import Login from "./views/User/Login";
import Signup from "./views/User/Signup";

function App() {
  const [screen, setScreen] = useState('HOME');
  const [user, setUser] = useState(undefined)

  if (screen === 'HOME'){
    return (
      <div className="h-full bg-black-500">
        <Home setScreen={ setScreen } />
      </div>
    );
  }
  
  if(screen === 'BOOKS'){
    return (
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="rounded-3xl bg-purple-600 m-5 text-2xl text-center border border-current cursor-pointer hover:bg-purple-800 sticky w-7/8">Add Book</h3>
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <Bookstore setScreen={ setScreen } user={ user } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'ARTICLES') {
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user }  setUser={ setUser } />
        <h3 onClick={() => { setScreen('ADD-ARTICLE') }} className="rounded-3xl bg-purple-600 m-5 text-2xl text-center border border-current cursor-pointer hover:bg-purple-800 sticky w-7/8">Add Article</h3>
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <Articlestore setScreen={ setScreen } user={ user }/>
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'PAPERS') {
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="rounded-3xl bg-purple-600 m-5 text-2xl text-center border border-current cursor-pointer hover:bg-purple-800 sticky w-7/8">Add Paper</h3>
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <Paperstore setScreen={ setScreen } user={ user }/>
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'ADD-BOOK'){
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <AddBook setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'ADD-ARTICLE'){
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <AddArticle setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>   
    )
  }

  if (screen === 'ADD-PAPER'){
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <AddPaper setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'SIGNUP'){
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <Signup setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>   
    )
  }

  if (screen === 'LOGIN'){
    return(
      <div className="m-0 overflow-hidden">
        <Navbar setScreen={ setScreen } user={ user } setUser={ setUser } />
        <section className="bg-current h-[calc(100vh-320px)] overflow-y-scroll">
          <Login setScreen={ setScreen } setUser={ setUser }/>
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold m-5 rounded-3xl hover:bg-purple-800 bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>    
    )
  }
}

export default App;