import { useState } from "react";
import Steps from "../Steps/Steps";
import FragranceSelector from "../FragranceSelector/FragranceSelector";

//UseContext and Create Context with reducers here to make it step by step process.

const CandleCalculator = () => {
  const [volume, setVolume] = useState("");
  const [fragrancePercentage, setFragrancePercentage] = useState(8);
  const [fragranceResult, setFragranceResult] = useState(null);
  const [waxResult, setWaxResult] = useState(null);
  const [waxGramsResult, setWaxGramsResult] = useState(null);

  const calculate = () => {
    const volumeNumeric = parseFloat(volume);
    if (isNaN(volumeNumeric) || volumeNumeric <= 0) {
      alert("Please enter a valid volume.");
      return;
    }

    const fragranceMl = (volumeNumeric * fragrancePercentage) / 100;
    const waxMl = (volumeNumeric * (100 - fragrancePercentage)) / 100;
    const waxGrams = waxMl * 0.9;

    setFragranceResult(fragranceMl);
    setWaxResult(waxMl);
    setWaxGramsResult(waxGrams);
  };

  

  return (
    <div className="container mt-5" style={{ maxWidth: "500px", margin: "0 auto", overflowY: "auto", height: "100vh" }}>
      <Steps />
      
      <div className="card p-4 shadow-sm mt-4">
        <h2 className="card-title text-center">Candle Calculator</h2>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Specify the volume of your container (ml)</label>
            <input
              type="number"
              placeholder="Example: '250' "
              className="form-control"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fragrance Percentage</label>
            <select
              className="form-select"
              value={fragrancePercentage}
              onChange={(e) => setFragrancePercentage(Number(e.target.value))}
            >
              <option value={7}>7%</option>
              <option value={8}>8%</option>
              <option value={9}>9%</option>
              <option value={10}>10%</option>
            </select>
          </div>
          <button className="btn btn-primary w-100" onClick={calculate}>
            Calculate
          </button>
          {fragranceResult !== null && (
            <div className="mt-4">
              <h4>Results:</h4>
              <p><strong>Fragrance:</strong> {fragranceResult.toFixed(2)} ml/gr</p>
              <p><strong>Wax:</strong> {waxResult.toFixed(2)} ml</p>
              <p><strong>Wax in grams:</strong> {waxGramsResult.toFixed(2)} g</p>
              <p className="text-secondary">
                (Just a reminder to check the wick provider&apos;s guidelines for the
                best size recommendation based on your container and wax type)
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-5">
        <div className="card p-4 shadow-sm">
          <h2 className="card-title text-center">Select Fragrance Notes</h2>
          <FragranceSelector />
        </div>
      </div>
    </div>
  );
};

export default CandleCalculator;
