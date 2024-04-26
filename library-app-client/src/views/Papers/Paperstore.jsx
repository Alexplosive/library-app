import Paper from "./Paper";
import { useState, useEffect } from "react";
import axios from "axios";

function Paperstore({ setScreen }){
  const [papers, setPapers] = useState([]);

  function getPapers() {
    axios
      .get('/api/v1/papers')
      .then((res) => setPapers(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getPapers();
  }, []);

  let allPapers = undefined;
  
  if (papers.length > 0){
    allPapers = papers.map((paper) => {
      return <Paper paper={paper} key={paper.id} />
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center">No Papers</p>
        <h3 onClick={() => { setScreen('ADD-PAPER') }} className="font-bold underline cursor-pointer text-xl text-center">Add the first paper</h3>
      </section>
    )
  }

  return (
    <div className="w-full items-center h-full overflow-y-scroll">
      <nav className="w-full">
        <h3 onClick={() => { setScreen('ADD-PAPER') }} className="bg-blue-600 text-center border border-current cursor-pointer hover:bg-blue-800 sticky w-full">Add Paper</h3>
      </nav>
      <section className="h-1/2 grid grid-cols-3 m-10">
        {allPapers} 
      </section>
    </div>
  )
}

export default Paperstore;