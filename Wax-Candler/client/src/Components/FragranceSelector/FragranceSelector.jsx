import { fraganceSubcategories } from "../../data/fraganceSubcategories";
import { useState } from "react";

const FragranceSelector = () => {
  const [selectedNotes, setSelectedNotes] = useState([]);

  const handleNoteChange = (note) => {
    setSelectedNotes((prevSelected) =>
      prevSelected.includes(note)
        ? prevSelected.filter((selectedNote) => selectedNote !== note)
        : [...prevSelected, note]
    );
  };

  return (
    <div>
      <h5>Select Your Fragrances</h5>
      {fraganceSubcategories.map((category) => (
        <div key={category.id}>
          <h6>{category.name}</h6>
          <div className="mb-3">
            {category.example_notes.map((note) => (
              <div key={note} className="form-check">
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