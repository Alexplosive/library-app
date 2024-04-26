import axios from "axios";

function Login ({ setUser, setScreen}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    axios.post('/api/v1/users/login', userData).
      then((response) => { setUser(response.data.user) }).then(() => setScreen('HOME'))
  };

  return(
    <section className="flex flex-col items-center m-20 h-full">
      <h1 className="text-purple-400 text-center text-5xl m-5">Please Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center h-1/4 text-4xl">
        <input className="flex-1 w-96 rounded-xl m-5 p-2" placeholder="username" type="text"></input>
        <input className="flex-1 w-96 rounded-xl p-2" placeholder="password" type="password"></input>
        <button type="submit" className="flex-1 w-80 bg-white rounded border border-current hover:bg-gray-300 m-5">Submit</button>
      </form>
      <button onClick={ () => setScreen('SIGNUP')} className="text-white text-xl m-5 underline cursor-pointer">Dont have an account. Sign up!</button>
    </section>
  )
}

export default Login;