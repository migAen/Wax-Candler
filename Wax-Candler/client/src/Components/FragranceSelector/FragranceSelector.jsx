/* eslint-disable react/prop-types */
import { fraganceSubcategories } from "../../data/fraganceSubcategories";
import { useState } from "react";

const FragranceSelector = ({ onSelect }) => {
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleNoteChange = (note) => {
    setSelectedNotes((prevSelected) =>
      prevSelected.includes(note)
        ? prevSelected.filter((selectedNote) => selectedNote !== note)
        : [...prevSelected, note]
    );
  };

  const handleSubmit = () => {
    onSelect(selectedNotes);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h5 className="text-center mb-4">
        Select Your Fragrances (Don&apos;t forget to submit your selection
        below)
      </h5>
      <div className="d-flex flex-column max-height-300 overflow-auto">
        {fraganceSubcategories.map((category) => (
          <div key={category.id} className="mb-4">
            <h6 className="mb-3">{category.name}</h6>
            <div className="d-flex flex-wrap gap-4">
              {category.example_notes.map((note) => (
                <div
                  key={note}
                  className="form-check"
                  style={{ flex: "0 0 23%" }}
                >
                  <input
                    type="checkbox"
                    id={note}
                    className="form-check-input"
                    checked={selectedNotes.includes(note)}
                    onChange={() => handleNoteChange(note)}
                    style={{
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      borderColor: "#9b9b9b",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={note}
                    style={{
                      marginLeft: "10px",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {note}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary w-100 mt-4"
        onClick={handleSubmit}
        style={{
          padding: "12px 0",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
        }}
      >
        Confirm selected fragrances
      </button>
      {submitted && (
        <div
          className="alert alert-success mt-3"
          style={{ fontSize: "14px", borderRadius: "8px" }}
        >
          Fragrances had been successfully selected!
        </div>
      )}
      {selectedNotes.length > 0 && (
        <div className="mt-4">
          <h5 className="mb-3">Selected Notes:</h5>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {selectedNotes.map((note) => (
              <li key={note} style={{ fontSize: "14px", marginBottom: "8px" }}>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FragranceSelector;
