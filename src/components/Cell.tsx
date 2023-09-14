import { useState } from "react";
const Cell = (props: {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  playerO: Set<number>;
  playerX: Set<number>;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [val, setVal] = useState("");
  function add() {
    if (props.turn === "X") {
      props.playerX.add(props.id);
      if (
        (props.playerX.has(1) &&
          props.playerX.has(2) &&
          props.playerX.has(3)) ||
        (props.playerX.has(4) &&
          props.playerX.has(5) &&
          props.playerX.has(6)) ||
        (props.playerX.has(7) &&
          props.playerX.has(8) &&
          props.playerX.has(9)) ||
        (props.playerX.has(1) &&
          props.playerX.has(4) &&
          props.playerX.has(7)) ||
        (props.playerX.has(2) &&
          props.playerX.has(5) &&
          props.playerX.has(8)) ||
        (props.playerX.has(3) &&
          props.playerX.has(6) &&
          props.playerX.has(9)) ||
        (props.playerX.has(1) &&
          props.playerX.has(5) &&
          props.playerX.has(9)) ||
        (props.playerX.has(3) && props.playerX.has(5) && props.playerX.has(7))
      ) {
        props.setWinner("X");
      }
    } else {
      props.playerO.add(props.id);
      if (
        (props.playerO.has(1) &&
          props.playerO.has(2) &&
          props.playerO.has(3)) ||
        (props.playerO.has(4) &&
          props.playerO.has(5) &&
          props.playerO.has(6)) ||
        (props.playerO.has(7) &&
          props.playerO.has(8) &&
          props.playerO.has(9)) ||
        (props.playerO.has(1) &&
          props.playerO.has(4) &&
          props.playerO.has(7)) ||
        (props.playerO.has(2) &&
          props.playerO.has(5) &&
          props.playerO.has(8)) ||
        (props.playerO.has(3) &&
          props.playerO.has(6) &&
          props.playerO.has(9)) ||
        (props.playerO.has(1) &&
          props.playerO.has(5) &&
          props.playerO.has(9)) ||
        (props.playerO.has(3) && props.playerO.has(5) && props.playerO.has(7))
      ) {
        props.setWinner("X");
      }
    }
  }
  return (
    <>
      <button
        className=" bg-white h-32 w-32 rounded-3xl shadow-2xl text-6xl font-semibold"
        onClick={() => {
          add();
          props.setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
          setVal(() => props.turn);
        }}
      >
        {val}
      </button>
    </>
  );
};

export default Cell;
