import { useState } from "react";
import DragMove from "./DragMove";
import Link from "./images/lonk.gif";
import './dance.css'

const Lonk = () => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [hidden, setHidden] = useState("none");
  const unHide = () => {
    if (hidden === "none") {
      setHidden("block");
      console.log("oiii");
    } else if (hidden === "block") {
      setHidden("none");
    }
  };
  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };
  return (
    <div>
      <button
        onClick={unHide}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-green-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
      >Who could this be?</button>
      <DragMove
        onDragMove={handleDragMove}
      
      >
        <div
          style={{
            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            
            height: "300px",
            width: "300px",
            display: `${hidden}`,
          }}
        >
          <img src={Link} style={{ height: "300px" }} />
        </div>
      </DragMove>
    </div>
  );
};

export default Lonk