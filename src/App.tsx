import Cell from "./components/Cell";

const App = () => {
  return (
    <div className="flex justify-center  h-screen bg-slate-400">
      <div className="">
        <h1 className=" font-semibold text-white text-8xl font-head text-center my-20">
          Tic Tac Toe
        </h1>
        <div className=" shadow-xl grid grid-cols-3 grid-rows-3 gap-4">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

export default App;
