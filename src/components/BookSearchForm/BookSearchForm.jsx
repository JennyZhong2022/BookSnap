


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

const BookSearchForm = ({  setStartIndex, query, setQuery ,fetchData, selectedSearchType,setSelectedSearchType,}) => {

  


  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query, selectedSearchType);
    setStartIndex(0)
  }

  const handleSearchTypeChange = (event) => {
    setSelectedSearchType(event.target.value);
    setStartIndex(0);
  }
  

  
  
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
      <button onClick={handleSubmit}>Search</button>
      <select onChange={handleSearchTypeChange} value={selectedSearchType}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>


    </div>
  );
};

export default BookSearchForm;