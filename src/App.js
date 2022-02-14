import DanceArea from "./components/DanceArea";
import { useState } from "react";
import Tot from "./components/Tot";
import "./App.css";
import Lonk from "./components/Lonk";
import Pika from "./components/Pika";
import Kirb from "./components/Kirb";
import Rila from "./components/Rila"
import { flower } from "./components/flower.js";
const comp = [Tot, Lonk];
function App() {
  return (
    <div className="App bg-gray-800" style={{ height: "100vh" }}>
      <div className="App bg-gray-800">
        <DanceArea />
      </div>
      <div className="items" style={{ paddingTop: "30px" }}>
        <Pika />
        <Tot />
        <Lonk />
        <Kirb />
        <Rila />
      </div>

      {console.log(flower)}
    </div>
  );
}

export default App;
