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

function App() {
  const [screen, setScreen] = useState('HOME');

  if (screen === 'HOME'){
    return (
      <div className="h-full bg-yellow-500">
        <Home setScreen={ setScreen } />
      </div>
    );
  }
  
  if(screen === 'BOOKS'){
    return (
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="bg-purple-600 text-2xl text-center border border-current cursor-pointer hover:bg-purple-800 sticky w-full">Add Book</h3>
        <section className="bg-current h-[calc(100vh-148.5px)] overflow-y-scroll">
          <Bookstore setScreen={ setScreen }/>
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'ARTICLES') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-current h-[calc(100vh-130px)] overflow-y-scroll">
          <Articlestore setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'PAPERS') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-current-400 h-[calc(100vh-130px)] overflow-y-scroll">
          <Paperstore setScreen={ setScreen } />
        </section>
        <footer>
          <h1 onClick={() => {setScreen('HOME')}} className="font-bold bg-purple-600 border border-current text-5xl text-center cursor-pointer">Back to home</h1>
        </footer>
      </div>  
    )
  }

  if (screen === 'ADD-BOOK'){
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-130px)]">
          <AddBook />
        </section>
      </div>  
    )
  }

  if (screen === 'ADD-ARTICLE'){
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-130px)]">
          <AddArticle setScreen={ setScreen } />
        </section>
      </div>  
    )
  }

  if (screen === 'ADD-PAPER'){
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-130px)]">
          <AddPaper setScreen={ setScreen } />
        </section>
      </div>  
    )
  }
}

export default App;