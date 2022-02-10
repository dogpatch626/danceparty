import logo from './logo.svg';
import DanceArea from './components/DanceArea';
import { useState } from 'react';
import DragMove from './components/DragMove';
import Link from "./components/images/58686bc27182cb2b848cf9094661b0b313a66e46_2_396x500.gif"
import './App.css';

function App() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className="App">
      
      <DanceArea />
      <DragMove onDragMove={handleDragMove}>
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`, backgroundColor:"black", height:"300px", width:"300px"
            }}
          >
            <img src={Link} style={{height:"300px"}} />
          </div>
        </DragMove>
    </div>
  );
}

export default App;
