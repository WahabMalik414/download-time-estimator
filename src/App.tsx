import { useState } from "react";

function App() {
  const [speed, setSpeed] = useState(0);

  const handleSpeedClick = (action: string) => {
    if (action == "add") setSpeed((prev) => prev + 1);
    else if (action == "subtract" && speed != 0) setSpeed((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col bg-purple-700">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-white text-center my-7">
          Download Time Estimator
        </h1>
        <h1 className="text-4xl font-bold text-white text-center my-7">
          Calculate Download Time
        </h1>
        <h1 className="text-3xl font-bold text-white text-center my-7">
          How long will it take to download?
        </h1>
        <div className="bg-gray-300 mx-auto my-10 py-5">
          <h1 className="text-center font-bold text-2xl">
            How fast is your internet speed?
          </h1>
          <div className="flex flex-row gap-x-4 justify-center items-center mt-5">
            <button
              onClick={() => handleSpeedClick("add")}
              className="btn text-3xl flex items-center justify-center hover:bg-green-200 h-14 w-14 bg-white"
            >
              +
            </button>
            <input
              type="number"
              placeholder="Speed"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="input input-bordered w-32 h-14 rounded-lg text-xl text-center"
            />

            <button
              onClick={() => handleSpeedClick("subtract")}
              className="btn text-3xl flex items-center justify-center hover:bg-red-200 h-14 w-14 bg-white"
            >
              -
            </button>
            <select className="select select-bordered w-18 h-14 text-xl">
              <option className="text-xl">Mbps</option>
              <option className="text-xl">Kbps</option>
            </select>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://fast.com/"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Check my download speed?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
