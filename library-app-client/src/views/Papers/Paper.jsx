import axios from "axios";
import { useState } from "react";

function Paper ({ paper, user, getPapers }) {
  const [updateForm, setUpdateForm] = useState(undefined);

  function deletePaper(){
    axios.delete(`/api/v1/papers/delete/${paper.id}`).
      then((response) => { console.log(response.status, response.data.token) }).then(() => getPapers())
  }

  function updatePaper(){
    setUpdateForm(<form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input className="flex-1 w-40 rounded" defaultValue={paper.title} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={paper.research_topic} type="text"></input>
    <input className="flex-1 w-40 rounded" defaultValue={paper.description} type="text"></input>
    <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
  </form>)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const paperData = {
      id: paper.id,
      title: e.target[0].value,
      research_topic: e.target[1].value,
      description: e.target[2].value,
    };
    axios.put(`/api/v1/papers/update/${paper.id}`, paperData).
      then((response) => { console.log(response.status, response.data.token)
    }).then(() => setUpdateForm(undefined)).then(() => getPapers());
  }; 

  let options = ""

  if(user && user.role === 'Employee'){
    options = (<section className="flex justify-center m-7">
                <p onClick={updatePaper} className="text-blue-600 cursor-pointer px-2">UPDATE</p></section>)
  } else if(user && user.role === 'Owner'){
    options = (<section className="flex justify-center m-7">
    <p onClick={updatePaper} className="text-blue-600 cursor-pointer px-2">UPDATE</p>
    <p onClick={deletePaper} className="text-red-600 cursor-pointer px-2">DELETE</p></section>)
  }

  if (updateForm){
    return updateForm;
  }
  return(
    <section className="bg-white border border-current flex flex-col h-full items-center m-0">
      <p className="text-center font-bold underline">{paper.title} </p>
      <p className="text-center font-bold">{paper.research_topic} </p>
      <p className="text-center">{paper.description} </p>
      <section className="flex">
        {options}
      </section>
    </section>
  )
}

export default Paper;