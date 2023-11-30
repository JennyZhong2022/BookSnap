import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const categories = [
  'Art',
  'Biography',
  'Computers',
  'Fiction',
  'History',
  'Medical',
  'Poetry',
];

const BookCategory = ({ onCategoryChange }) => {
  const handleCategoryChange = event => {
    const category = event.target.value;
    onCategoryChange(category);
  };

  return (
    
    <div>

      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default BookCategory;