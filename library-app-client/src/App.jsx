import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState();

  function getDataFromServer() {
    axios
      .get('/api/v1/books')
      .then((res) => setData(res.data[0].author))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <p className="text-3xl font-bold underline">Hello</p>
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>data : {data}</p>
    </div>
  );
}

export default App;