import Paper from "./Paper";
import { useState, useEffect } from "react";
import axios from "axios";

function Paperstore({ setScreen, user }){
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
      return <Paper paper={paper} key={paper.id} user={user} getPapers={getPapers} />
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center text-white text-3xl">No Papers</p>
      </section>
    )
  }

  return (
    <div className="w-full items-center h-full">
      <section className="h-1/2 grid grid-cols-3 m-10">
        {allPapers} 
      </section>
    </div>
  )
}

export default Paperstore;