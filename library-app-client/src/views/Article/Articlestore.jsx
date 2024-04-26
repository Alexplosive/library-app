import Article from "./Article";
import { useState, useEffect } from "react";
import axios from "axios";

function Articlestore({ setScreen, user }){
  const [articles, setArticles] = useState([]);

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
  }, []);

  let allArticles = undefined;
  
  if (articles.length > 0){
    allArticles = articles.map((article) => {
      return <Article article={article} key={article.id} user={ user } getArticles={ getArticles } />
    })
  } else {
    return (
      <section className="flex-col h-full">
        <p className="text-center text-white text-3xl">No Articles</p>
      </section>
    )
  }

  return (
    <div className="w-full items-center h-full">
      <section className="h-1/2 grid grid-cols-3 m-10">
        {allArticles} 
      </section>
    </div>
  )
}

export default Articlestore;