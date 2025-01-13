/* eslint-disable react/prop-types */
import { useState } from "react";

const Quantities = ({ onCalculate }) => {
  const [volume, setVolume] = useState("");
  const [fragrancePercentage, setFragrancePercentage] = useState(8);
  const [fragranceResult, setFragranceResult] = useState(null);
  const [waxResult, setWaxResult] = useState(null);
  const [waxGramsResult, setWaxGramsResult] = useState(null);

  const calculateCandle = () => {
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

    onCalculate({
      volume: volumeNumeric,
      fragrancePercentage,
      fragranceMl,
      waxMl,
      waxGrams,
    });
  };

  return (
    <>
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
      <button className="btn btn-primary w-100" onClick={calculateCandle}>
        Calculate
      </button>
      {fragranceResult !== null && (
        <div className="mt-4">
          <h4>Results:</h4>
          <p>
            <strong>Fragrance:</strong> {fragranceResult.toFixed(2)} ml
          </p>
          <p>
            <strong>Wax:</strong> {waxResult.toFixed(2)} ml
          </p>
          <p>
            <strong>Wax in grams:</strong> {waxGramsResult.toFixed(2)} g
          </p>
        </div>
      )}
    </>
  );
};

export default Quantities;
