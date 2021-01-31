import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import Guardian from "guardian-js";

const guardian = new Guardian("00ad7cf7-79de-494d-817a-9b425a0c5582", false);

function App() {
  const [author, setAuthor] = useState({});

  // useEffect?
  useEffect(() => {
    guardian.editions
      .search("us")
      .then((x) => x)
      .then((x) => console.log(x))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <Card title={author}></Card>
            {/* <Card></Card>
                <Card></Card>
                <Card></Card> */}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
