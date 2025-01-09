import { families } from "../../data/families";
import { fraganceSubcategories } from "../../data/fraganceSubcategories";
import "./Fragrance.css";

function Fragrance() {
  return (
    <div className="fragrance-container my-5">
      <div className="fragrance-card shadow-lg border-0 rounded-4">
        <div className="fragrance-card-body">
          <h2 className="fragrance-card-title text-center mb-4">Fragrance Families and Subcategories</h2>
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Family</th>
                  <th>Subcategory</th>
                  <th>Fragrances</th>
                </tr>
              </thead>
              <tbody>
                {families.map((family) => (
                  fraganceSubcategories.filter(subcategory => subcategory.family_id === family.id)
                    .map((subcategory) => (
                      <tr key={subcategory.id}>
                        <td>{family.name}</td>
                        <td>{subcategory.name}</td>
                        <td>{subcategory.example_notes.join(", ")}</td>
                      </tr>
                    ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fragrance;
