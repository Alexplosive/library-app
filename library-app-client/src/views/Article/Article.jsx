import axios from "axios";
import { useState } from "react";

function Article ({ article, setReload }) {
  const [updateForm, setUpdateForm] = useState(undefined);

  function deleteArticle(){
    axios.delete(`/api/v1/articles/delete/${article.id}`).
      then((response) => { console.log(response.status, response.data.token) }).then(() => setReload(true))
  }

  function updateArticle(){
    setUpdateForm(<form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input className="flex-1 w-40 rounded" defaultValue={article.title} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={article.description} type="text"></input>
    <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
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
    }).then(() => setUpdateForm(undefined)).then(() => setReload(true));
  }; 

  if (updateForm){
    return updateForm;
  }
  return(
    <section className="bg-green-400 border border-current flex flex-col items-center w-1/2">
      <p>Article Title : {article.title} </p>
      <p>Description : {article.description} </p>
      <section className="flex justify-center">
        <p onClick={updateArticle} className="text-blue-600 cursor-pointer">UPDATE</p>
        <p onClick={deleteArticle} className="text-red-600 cursor-pointer">DELETE</p>
      </section>
    </section>
  )
}

export default Article;