import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {

  return (
    <div className="flex flex-col items-center background h-full w-full pb-10 gap-10 overflow-y-hidden">

      <div className="flex items-center justify-center w-11/12 p-4 bg-slate-100 rounded-md mt-12">
        <h2 className="text-xl font-bold">RANDOM GIFS</h2>
      </div>
      <Random></Random>
      <Tag></Tag>

    </div>
  );

}
