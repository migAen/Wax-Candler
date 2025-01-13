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
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <h5>Select Your Fragrances</h5>
      <div className="d-flex flex-column max-height-300 overflow-auto">
        {fraganceSubcategories.map((category) => (
          <div key={category.id} className="mb-4">
            <h6>{category.name}</h6>
            <div className="mb-3 d-flex flex-wrap gap-3">
              {category.example_notes.map((note) => (
                <div key={note} className="form-check" style={{ flex: "0 0 48%" }}>
                  <input
                    type="checkbox"
                    id={note}
                    className="form-check-input"
                    checked={selectedNotes.includes(note)}
                    onChange={() => handleNoteChange(note)}
                  />
                  <label className="form-check-label" htmlFor={note}>
                    {note}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        Confirm selected fragrances
      </button>
      {submitted && (
        <div className="alert alert-success mt-3">
          Fragrances had been successfuly selected!
        </div>
      )}
      {selectedNotes.length > 0 && (
        <div>
          <h5>Selected Notes:</h5>
          <ul>
            {selectedNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FragranceSelector;
