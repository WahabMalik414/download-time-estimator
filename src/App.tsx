function App() {
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
        <div className="bg-gray-300 mx-auto">
          <h1 className="text-center font-bold text-2xl pt-5">
            How fast is your internet speed?
          </h1>
          <div className="flex flex-row gap-x-4 justify-center items-center mt-5">
            <button className="btn text-3xl flex items-center justify-center hover:bg-green-200 h-14 w-14 bg-white">
              +
            </button>
            <input
              type="number"
              placeholder="Speed"
              className="input input-bordered w-32 h-14 rounded-lg text-xl text-center"
            />

            <button className="btn text-3xl flex items-center justify-center hover:bg-red-200 h-14 w-14 bg-white">
              -
            </button>
            <select className="select select-bordered w-18 h-14 text-xl">
              <option disabled selected className="text-xl">
                Metric
              </option>
              <option className="text-xl">Mbps</option>
              <option className="text-xl">Kbps</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
