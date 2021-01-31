import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";

const API_KEY = "00ad7cf7-79de-494d-817a-9b425a0c5582";

function App() {
  const [author, setAuthor] = useState();

  useEffect(() => {
    fetch(`https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&show-fields=thumbnail&api-key=${API_KEY}`)
      .then((x) => x.json())
      .then((x) => x.response)
      .then((x) => setAuthor(x.results.map((x, index) => <Card title={x.webTitle} images={x.fields.thumbnail} link={x.webUrl} key={index} />)))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-8">
          <div className="row justify-items-center">
            {author}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
