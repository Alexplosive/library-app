import axios from "axios";

function AddPaper ({ setScreen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const paperData = {
      title: e.target[0].value,
      research_topic: e.target[1].value,
      description: e.target[2].value,
    };
    axios.post('/api/v1/papers/add', paperData).
      then((response) => { console.log(response.status, response.data.token) }).then(() => { setScreen('PAPERS')})
  };

  return(
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input className="flex-1 w-40 rounded" placeholder="Title" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Research Topic" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Description" type="text"></input>
      <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
    </form>
  )
}

export default AddPaper;