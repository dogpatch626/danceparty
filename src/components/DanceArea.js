import React from "react";
import "./dance.css";
import DanceSquare from "./DanceSquares";

const DanceArea = () => {
  const squares  = [1,2,3,4,5,6];
  return (
    <div
      className="grid-cols-7 auto-rows-max bg-gray-200 rounded-md my-6 mx-6"
      style={{ height: "80vh" }}
    >
      <h1 className="text-3xl font-bold underline">
        Greetings to all the dancers
      </h1>
      {squares.map(index =>{
        return <DanceSquare square={index} /> 
      })}
    </div>
  );
};

export default DanceArea;
