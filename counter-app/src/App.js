import { useState } from 'react'

import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }


  return (

    <div className="h-screen w-screen flex justify-center items-center bg-slate-300 flex-col gap-10">
      <div className="text-2xl font-medium text-cyan-700"> Increment & Decrement</div>
      <div className="flex justify-center bg-white gap-12 py-3 rounded-sm text-xl">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-gray-300 text-3xl">
          -
        </button>
        <div className="text-3xl font-bold gap-12">{count}</div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-gray-300 text-3xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-cyan-700 text-white px-6 py-2 rounded-sm">Reset</button>
    </div>
  );
}

export default App;
