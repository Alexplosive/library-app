import Article from "./Article";
import { useState, useEffect } from "react";
import axios from "axios";

function Articlestore({ setScreen }){
  const [articles, setArticles] = useState([]);
  const [reload, setReload] = useState(false);

  function getArticles() {
    axios
      .get('/api/v1/articles')
      .then((res) => setArticles(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getArticles();
    setReload(false);
  }, [reload]);

  let allArticles = undefined;
  
  if (articles.length > 0){
    allArticles = articles.map((article) => {
      return <Article article={article} setReload={setReload} key={article.id} />
    })
  } else {
    return (
      <p>Articles Loading...</p>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full">
        <h3 onClick={() => { setScreen('ADD-BOOK') }} className="bg-blue-600 text-center border border-current cursor-pointer hover:bg-blue-800 sticky w-full">Add Book</h3>
      </nav>
      {allArticles}
    </div>
  )
}

export default Articlestore;