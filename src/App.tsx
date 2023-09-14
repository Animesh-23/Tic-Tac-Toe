import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const playerX: Set<number> = new Set<number>();
  const playerO: Set<number> = new Set<number>();
  return (
    <div className="flex  items-center h-screen bg-slate-400 ">
      <div className=" ml-10">
        <span className=" text-white font-medium text-5xl px-3">
          Player
          <span className=" text-black text-semibold mx-3 inline-block w-10 text-center">
            {turn}
          </span>
          Move
        </span>
      </div>
      <div className=" mx-40">
        <h1 className=" font-semibold text-white text-8xl font-head text-center my-16">
          Tic Tac Toe
        </h1>
        <div className=" grid grid-cols-3 grid-rows-3 gap-4 ">
          {Array.from({ length: 9 }).map((_, i) => (
            <Cell
              key={i}
              turn={turn}
              setTurn={setTurn}
              id={i + 1}
              playerX={playerX}
              playerO={playerO}
              setWinner={setWinner}
            />
          ))}
        </div>
      </div>
      <div className=" h-36 w-36">
        {winner !== "" && <span>Winner is {winner}</span>}
      </div>
    </div>
  );
};

export default App;
