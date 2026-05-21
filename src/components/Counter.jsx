import React, { useState,useEffect} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Counter");},[]
  );

  function Increment() {
   
      setCount(count + 1*5);
    
  }

  function Decrement() {
  
      setCount(count - 1*5);
    
  }

  function Reset() {
    setCount(0);
  }

  return (
    <section className="bg-blue-50 py-16 px-6 flex justify-center items-center">
      <div className="bg-white rounded-3xl p-8 shadow-xl max-w-sm w-full text-center border border-slate-100 hover:scale-102 transition duration-300">
        <h2 className="text-xl font-bold text-slate-700 uppercase tracking-wider mb-2">
          Interactive Counter
        </h2>
        <h1 className="text-6xl font-extrabold text-blue-600 my-6 transition-all duration-200">
          {count}
        </h1>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-2">
          <button 
            onClick={Decrement}
            className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 active:scale-95 transition duration-200"
          >
            Decrement
          </button>
          <button 
            onClick={Reset}
            className="px-5 py-2.5 bg-sky-100 text-sky-700 font-semibold rounded-xl hover:bg-sky-200 active:scale-95 transition duration-200"
          >
            Reset
          </button>
          <button 
            onClick={Increment}
            className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-95 transition duration-200"
          >
            Increment
          </button>

        </div>
        <p className="text-xs text-slate-400 mt-4">
          Range limited between 0 and 20
        </p>

      </div>
    </section>
  );
}

export default Counter;