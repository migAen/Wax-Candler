import { useState } from 'react';
import { families } from '../../data/families';
import { fraganceSubcategories } from '../../data/fraganceSubcategories';
import { fancyCombinations } from '../../data/fancyCombinations';
import './FraganceCombinations.css';

const familyMap = families.reduce((acc, family) => {
  acc[family.id] = {
    name: family.name,
    subcategories: fraganceSubcategories.filter(subcategory => subcategory.family_id === family.id),
  };
  return acc;
}, {});

const enrichedCombinations = fancyCombinations.map(combination => {
  const enrichedSubcategories = combination.subcategories.map(subcategory => {
    const family = familyMap[subcategory.family_id];
    return family ? {
      familyName: family.name,
      subcategoryName: subcategory.name,
      exampleNotes: subcategory.example_notes,
    } : null;
  }).filter(family => family !== null);

  return { ...combination, enrichedSubcategories };
});

const FraganceCombinations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCombinations = enrichedCombinations.filter(combination => {
    const allExampleNotes = combination.enrichedSubcategories
      .map(subcategory => subcategory.exampleNotes.join(' '))
      .join(' ');

    return allExampleNotes.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 scrollable-container">
          <div className="mb-4">
            <input
              type="text"
              placeholder="🧪 Search by fragances you have to see possible combinations 🧪"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>
          <div className="row justify-content-center">
            {filteredCombinations.map(combination => (
              <div key={combination.id} className="col-md-4 col-lg-3 col-xl-3 mb-4">
                <div className="card border-0 rounded-4 combination-card">
                  <div className="card-body p-4">
                    <h3 className="card-title">{combination.name}</h3>
                    <p className="card-text">{combination.description}</p>
                    <div className="subcategories">
                      {combination.enrichedSubcategories.map((family, idx) => (
                        <div key={idx} className="subcategory">
                          <strong>{family.familyName} - {family.subcategoryName}:</strong>
                          <ul>
                            {family.exampleNotes.map((note, index) => (
                              <li key={index}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraganceCombinations;
