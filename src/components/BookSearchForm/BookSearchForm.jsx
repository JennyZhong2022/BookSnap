import { useState, useEffect } from 'react';


const categories = [
  'All',
  'Art',
  'Biography',
  'Computers',
  'Fiction',
  'History',
  'Medical',
  'Poetry',
];

const languages = [
  'All',
  'English',
  'Korean',
  'French',
  'Italian',
  'Spanish',
  'Chinese',
  'German',
];

const BookSearchForm = ({ fetchDataByTitle, fetchDataByAuthors, handleSearch, setStartIndex, query, setQuery }) => {

  const [selectedSearchType, setSelectedSearchType] = useState('title');


  const handleChange = (event) => {
    if (selectedSearchType === 'title') {
      const newQuery = event.target.value;
      setQuery(newQuery);
      handleSearch(newQuery, fetchDataByTitle);
    } else {
      const newQuery = event.target.value;
      setQuery(newQuery);
      handleSearch(newQuery, fetchDataByAuthors);
    }
  }

  const handleSearchTypeChange = (event) => {
    const newSearchType = event.target.value;
    setSelectedSearchType(newSearchType);
    handleSearch(query, newSearchType);
    setStartIndex(0)
  };
  
  return (
    <div className="BookSearchForm" style={{border: "1px solid black"}}>
 
      <div>
        <select name="Category">
          <option value="">Categories</option>
          {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
        </select>
      </div>

      <div>
        <select name="Language">
          <option value="">Languages</option>
          {languages.map(language => (
          <option key={language} value={language}>{language}</option>
        ))}
        </select>
      </div>

      <input 
        type="text" 
        value={query} 
        onChange={handleChange}
        placeholder={`Search by ${selectedSearchType === 'title' ? 'Title' : 'Author'}`}
      />

      <select onChange={handleSearchTypeChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>


    </div>
  );
};

export default BookSearchForm;