import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [screen, setScreen] = useState('home');

  // function getDataFromServer() {
  //   axios
  //     .get('/api/v1/books')
  //     .then((res) => setData(res.data[0].author))
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  
  if (screen === 'home'){
    return (
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen } />
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p1>Home!</p1>  
        </section>
      </div>
    );
  }
  
  if(screen === 'books'){
    return (
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p1>Test!</p1>
        </section>
      </div>  
    )
  }

  if (screen === 'articles') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p1>Aticles not implemented</p1>
        </section>
      </div>  
    )
  }

  if (screen === 'papers') {
    return(
      <div className="m-0 h-full">
        <Navbar setScreen={ setScreen }/>
        <section className="bg-green-400 h-[calc(100vh-126px)]">
          <p1>Papers not implemented!</p1>
        </section>
      </div>  
    )
  }
}

export default App;