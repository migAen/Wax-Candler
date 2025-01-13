import { useState } from "react";
import Steps from "../Steps/Steps";
import FragranceSelector from "../FragranceSelector/FragranceSelector";
import ColorMixer from "../ColorMixer/ColorMixer";
import Quantities from "../Quantities/Quantities";
import "./Calculator.css";
const CandleCalculatorApp = () => {
  const [step, setStep] = useState(1);
  const [candleData, setCandleData] = useState({});
  const [selectedFragrance, setSelectedFragrance] = useState([]);
  const [mixedColor, setMixedColor] = useState({ r: 255, g: 247, b: 196 });

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCalculate = (data) => {
    setCandleData(data);
  };

  const handleFragranceSelect = (fragrance) => {
    setSelectedFragrance(fragrance);
  };

  const handleColorMix = (color) => {
    setMixedColor(color);
  };

  const rgbToCss = (rgb) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div className="container mt-5" style={{ maxWidth: "700px", margin: "0 auto", overflowY: "auto" }}>
      <Steps currentStep={step} />
      <div className="card p-4 shadow-sm mt-4">
        <h2 className="card-title text-center">
          {step === 1
            ? "Candle Calculator"
            : step === 2
            ? "Fragrance Selector"
            : step === 3
            ? "Color Mixer"
            : "Summary"}
        </h2>
        <div className="card-body">
          {step === 1 && <Quantities onCalculate={handleCalculate} />}
          {step === 2 && <FragranceSelector onSelect={handleFragranceSelect} />}
          {step === 3 && <ColorMixer onMixColor={handleColorMix} />}
          {step === 4 && (
            <div>
              <h4>Summary of Your Candle:</h4>
              <p><strong>Volume:</strong> {candleData.volume} ml</p>
              <p><strong>Fragrance Percentage:</strong> {candleData.fragrancePercentage}%</p>
              <p><strong>Fragrance Amount:</strong> {candleData.fragranceMl ? candleData.fragranceMl.toFixed(2) : "N/A"} ml</p>
              <p><strong>Wax Amount:</strong> {candleData.waxMl ? candleData.waxMl.toFixed(2) : "N/A"} ml</p>
              <p><strong>Wax in grams:</strong> {candleData.waxGrams ? candleData.waxGrams.toFixed(2) : "N/A"} g</p>
              <p><strong>Selected Fragrance Notes:</strong> {selectedFragrance.length > 0 ? selectedFragrance.join(", ") : "None"}</p>
              <p><strong>Selected Color:</strong></p>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: rgbToCss(mixedColor),
                  borderRadius: "8px",
                  margin: "10px 0"
                }}
              ></div>
              <p>{`rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`}</p>
            </div>
          )}

          <div className="mt-4">
            {step > 1 && (
              <button className="btn btn-secondary me-3" onClick={handlePrevStep}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button className="btn btn-primary" onClick={handleNextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleCalculatorApp;
