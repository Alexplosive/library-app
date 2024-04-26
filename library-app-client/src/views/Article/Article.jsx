import axios from "axios";
import { useState } from "react";

function Article ({ article }) {
  const [updateForm, setUpdateForm] = useState(undefined);

  function deleteArticle(){
    axios.delete(`/api/v1/articles/delete/${article.id}`).
      then((response) => { console.log(response.status, response.data.token) })
  }

  function updateArticle(){
    setUpdateForm(<form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input className="flex-3 rounded w-full" placeholder="Title" defaultValue={article.title} type="text"></input>
    <textarea className="flex-1 w-full rounded my-2" placeholder="Description" defaultValue={article.description}></textarea>
    <button type="submit" className="flex-3 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
  </form>)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const articleData = {
      id: article.id,
      title: e.target[0].value,
      description: e.target[1].value,
    };
    axios.put(`/api/v1/articles/update/${article.id}`, articleData).
      then((response) => { console.log(response.status, response.data.token)
    }).then(() => setUpdateForm(undefined));
  }; 

  if (updateForm){
    return updateForm;
  }
  return(
    <section className="bg-purple-400 border border-current flex flex-col h-full items-center">
      <p className="text-center font-bold underline">{article.title} </p>
      <p className="text-center">{article.description} </p>
      <section className="flex">
        <p onClick={updateArticle} className="text-blue-600 cursor-pointer">UPDATE</p>
        <p onClick={deleteArticle} className="text-red-600 cursor-pointer">DELETE</p>
      </section>
    </section>
  )
}

export default Article;