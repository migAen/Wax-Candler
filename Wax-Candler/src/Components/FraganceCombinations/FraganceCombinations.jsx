import { useState } from 'react';
import { families } from '../../data/families';
import { fraganceSubcategories } from '../../data/fraganceSubcategories';
import { fancyCombinations } from '../../data/fancyCombinations';
import './FraganceCombinations.css';

// Combine family data with subcategories
const familyMap = families.reduce((acc, family) => {
  acc[family.id] = {
    name: family.name,
    subcategories: fraganceSubcategories.filter(subcategory => subcategory.family_id === family.id),
  };
  return acc;
}, {});

// Enrich combinations with family and subcategory data
const enrichedCombinations = fancyCombinations.map(combination => {
  const enrichedSubcategories = combination.family_ids.map(familyId => {
    const family = familyMap[familyId];
    return family ? {
      familyName: family.name,
      subcategories: family.subcategories.map(subcategory => subcategory.name),
    } : null;
  }).filter(family => family !== null);

  return { ...combination, enrichedSubcategories };
});

const FraganceCombinations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering combinations based on search term
  const filteredCombinations = enrichedCombinations.filter(combination => 
    combination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('FraganceCombinations component rendered!');
  console.log('Filtered Combinations:', filteredCombinations);

  return (
    <div className="container">
      <h1>Fragrance Combinations</h1>

      {/* Search functionality */}
      <input 
        type="text" 
        placeholder="Search combinations..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-bar"
      />

      {/* Displaying combinations or a default message if none are found */}
      {filteredCombinations.length === 0 ? (
        <p>No combinations found</p>
      ) : (
        <div className="combinations-list" style={{ border: '2px solid red' }}>
          {filteredCombinations.map(combination => (
            <div key={combination.id} className="combination-card">
              <h2>{combination.name}</h2>
              <p>{combination.description}</p>

              <div className="subcategories">
                {combination.enrichedSubcategories.map((family, idx) => (
                  <div key={idx} className="subcategory">
                    <strong>{family.familyName}:</strong>
                    <ul>
                      {family.subcategories.map((subcategory, index) => (
                        <li key={index}>{subcategory}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FraganceCombinations;
