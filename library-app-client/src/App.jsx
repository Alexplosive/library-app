import "./App.css";
import { useState } from "react";
import Navbar from "./views/Navbar";
import Bookstore from "./views/Book/Bookstore";
import AddBook from "./views/Book/AddBook";
import Home from "./views/Home";

function App() {
  const [screen, setScreen] = useState('HOME');

  if (screen === 'HOME'){
    return (
      <div className="h-full bg-yellow-500">
        <Home setScreen={setScreen} />
      </div>
    );
  }
  
  if(screen === 'BOOKS'){
    return (
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-yellow-500 h-[calc(100vh-130px)] overflow-y-scroll">
          <Bookstore setScreen={ setScreen }/>
        </section>
      </div>  
    )
  }

  if (screen === 'ARTICLES') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p>Articles not implemented</p>
        </section>
      </div>  
    )
  }

  if (screen === 'PAPERS') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p>Papers not implemented!</p>
        </section>
      </div>  
    )
  }

  if (screen === 'ADD-BOOK'){
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <AddBook />
        </section>
      </div>  
    )
  }
}

export default App;