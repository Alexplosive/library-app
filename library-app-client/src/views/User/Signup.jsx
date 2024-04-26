import axios from "axios";

function Signup ({ setScreen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      password: e.target[1].value,
      role: e.target[2].value,
    };
    axios.post('/api/v1/users/signup', userData).
      then((response) => { console.log(response.status, response.data.token) }).then(() => { setScreen('HOME')})
  };

  return(
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input className="flex-1 w-40 rounded" placeholder="Title" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="Research Topic" type="text"></input>
      <select className="flex-1 w-40 rounded" placeholder="Description" type="text">
        <option value="owner">Owner</option>
        <option value="emp">Employee</option>
      </select>
      <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
    </form>
  )
}

export default Signup;