import React from "react";
import { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

//brain broke so i segued back to yesterdays lecture to review, trying to solidify, will rewatch this code review this afternoon as well as it is needed

const API = "http://localhost:3001/sushis";


function App() {


const [sushis, setSushis] = useState([])

useEffect(() => (
  fetch(API)
  .then(resp => resp.json()
  .then(data => setSushis(data)))
), [])


  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;
