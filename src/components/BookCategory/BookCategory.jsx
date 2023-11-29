const categories = [
  'Art',
  'Horror',
  'Computers',
  'Fiction',
  'History',
  'Medical',
  'Fantasy',
  'Romance'
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