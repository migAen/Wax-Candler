/* eslint-disable react/prop-types */
import { useState } from "react";

const mixColors = (color1, color2, ratio) => {
  const r = Math.round(color1.r * (1 - ratio) + color2.r * ratio);
  const g = Math.round(color1.g * (1 - ratio) + color2.g * ratio);
  const b = Math.round(color1.b * (1 - ratio) + color2.b * ratio);
  return { r, g, b };
};

const ColorMixer = ({ onMixColor, onUpdateDrops }) => {
  const [currentColor, setCurrentColor] = useState({ r: 255, g: 247, b: 196 });
  const [selectedColor, setSelectedColor] = useState({
    r: 255,
    g: 247,
    b: 196,
  });
  const [drops, setDrops] = useState(0);

  const solidColors = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 51, g: 156, b: 44 },
    { r: 139, g: 69, b: 19 },
    { r: 0, g: 0, b: 0 },
  ];

  const addDrop = () => {
    const ratio = 0.2;
    const mixedColor = mixColors(currentColor, selectedColor, ratio);
    setCurrentColor(mixedColor);
    setDrops(drops + 1);
    onMixColor(mixedColor);
    onUpdateDrops(drops + 1);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setDrops(0);
    setCurrentColor({ r: 255, g: 247, b: 196 });
  };

  const rgbToCss = (rgb) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div className="text-center">
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: rgbToCss(currentColor),
          margin: "20px auto",
          borderRadius: "10px",
        }}
      ></div>
      <div className="mb-3">
        {solidColors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: rgbToCss(color),
              borderRadius: "50%",
              cursor: "pointer",
              display: "inline-block",
              margin: "0 10px",
              border:
                selectedColor.r === color.r &&
                selectedColor.g === color.g &&
                selectedColor.b === color.b
                  ? "5px solid #fff"
                  : "none",
            }}
            onClick={() => handleColorSelect(color)}
          ></div>
        ))}
      </div>
      <div>
        <button className="btn btn-primary" onClick={addDrop}>
          Add Drop
        </button>
        <p>Drops: {drops}</p>
      </div>
    </div>
  );
};

export default ColorMixer;
