import { useState } from "react";

function App() { const [count, setCount] = useState(0);

const increment = () => { setCount(count + 1); };

const decrement = () => { setCount(count - 1); };

const reset = () => { setCount(0); };

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-5">

  <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">

    {/* Header */}
    <h1 className="mb-2 text-3xl font-bold text-white">
      Counter App
    </h1>

    <p className="mb-10 text-sm text-gray-400">
      Simple. Modern. Interactive.
    </p>

    {/* Counter Display */}
    <div className="mb-10 flex h-40 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">

      <h2 className="text-7xl font-extrabold text-white transition-all duration-300">
        {count}
      </h2>

    </div>

    {/* Buttons */}
    <div className="mb-6 flex items-center justify-center gap-4">

      {/* Decrement */}
      <button
        onClick={decrement}
        className="h-14 w-14 rounded-xl bg-rose-500 text-3xl font-bold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:scale-110 hover:bg-rose-600 active:scale-95"
      >
        −
      </button>

      {/* Reset */}
      <button
        onClick={reset}
        className="rounded-xl bg-slate-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-600 active:scale-95"
      >
        Reset
      </button>

      {/* Increment */}
      <button
        onClick={increment}
        className="h-14 w-14 rounded-xl bg-indigo-500 text-3xl font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-110 hover:bg-indigo-600 active:scale-95"
      >
        +
      </button>

    </div>

    {/* Footer */}
    <p className="text-xs text-gray-400">
      Built with React JS & Tailwind CSS ❤️
    </p>

  </div>

</div>


); }

export default App;