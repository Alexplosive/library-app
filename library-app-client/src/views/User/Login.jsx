import axios from "axios";

function Login ({ setScreen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    axios.post('/api/v1/users/login', userData).
      then((response) => { console.log(response.status, response.data.token) }).then(() => { setScreen('HOME')})
  };

  return(
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input className="flex-1 w-40 rounded" placeholder="username" type="text"></input>
      <input className="flex-1 w-40 rounded" placeholder="password" type="password"></input>
      <button type="submit" className="flex-1 w-40 bg-white rounded border border-current hover:bg-gray-300">Submit</button>
    </form>
  )
}

export default Login;