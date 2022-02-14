import React from "react";
import "./dance.css";
import disco from './images/disco.gif'
import DanceSquare from "./DanceSquares";

const DanceArea = () => {
  const squares  = [1,2,3,4,5,6];
  return (
    <div
      
      style={{ height: "70vh" }}
    >
      <h1 className="text-3xl font-bold underline bg-pink-500 rounded" >
        Valentines Day Dance 
      </h1>
      <img src={disco} style={{height:'100%', width:'100%'}} />
    </div>
  );
};

export default DanceArea;
