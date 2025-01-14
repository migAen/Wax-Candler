import { families } from "../../data/families";
import { fraganceSubcategories } from "../../data/fraganceSubcategories";
import "./Fragrance.css";

function Fragrance() {
  return (
    <div className="fragrance-container my-5">
      <div className="fragrance-card shadow-lg border-0 rounded-4">
        <div className="fragrance-card-body">
          <h2 className="fragrance-card-title text-center mb-4">
            Fragrance Families and Subcategories
          </h2>
          <div className="fragrance-scrollable-container">
            {families.map((family) =>
              fraganceSubcategories
                .filter((subcategory) => subcategory.family_id === family.id)
                .map((subcategory) => (
                  <div key={subcategory.id} className="fragrance-type-card">
                    <h3 className="fragrance-type-title">
                      {family.name} - {subcategory.name}
                    </h3>
                    <p className="fragrance-type-text">
                      <strong>Example Notes:</strong>{" "}
                      {subcategory.example_notes.join(", ")}
                    </p>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fragrance;
