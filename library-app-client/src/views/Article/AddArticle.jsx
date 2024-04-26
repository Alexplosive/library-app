import axios from "axios";

function AddArticle ({ setScreen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const articleData = {
      title: e.target[0].value,
      description: e.target[1].value,
    };
    axios.post('/api/v1/articles/add', articleData).
      then((response) => { console.log(response.status, response.data.token) }).then(() => { setScreen('ARTICLES')})
  };

  return(
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input className="flex-1 w-40 rounded" placeholder="Title" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Description" type="text"></input>
      <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
    </form>
  )
}

export default AddArticle;