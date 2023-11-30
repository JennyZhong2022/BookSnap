
const categories = [
  'Art',
  'Biography',
  'Computers',
  'Fiction',
  'History',
  'Medical',
  'Poetry',
];

const languages = [
  'English',
  'Korean',
  'French',
  'Italian',
  'Spanish',
  'Chinese',
  'German',
];

const BookSearchForm = ({  setStartIndex, query, setQuery ,fetchData, selectedSearchType,setSelectedSearchType,setCurrentPage,category, setCategory,language,setLanguage}) => {


  const _handleTitleChange = (event) => {
    setQuery(event.target.value);
  }

  const _handleSearchTypeChange = (event) => {
    setSelectedSearchType(event.target.value);
  }

  const _handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const _handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("Selected Language:", event.target.value); // Debugging
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query, selectedSearchType, category,language);
    setStartIndex(0)
    setCurrentPage(1)
  }

  
  
  return (
    <div className="BookSearchForm" style={{border: "1px solid black"}}>
       
       <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={query} 
        onChange={_handleTitleChange}
        placeholder={`Search by ${selectedSearchType === 'title' ? 'Title' : 'Author'}`}
        />
        
        <select onChange={_handleSearchTypeChange} value={selectedSearchType}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      
          <select name="Category" onChange={_handleCategoryChange}
          value={category}>
          <option value="">Categories</option>
          {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
        </select>

        <select name="Language" onChange={_handleLanguageChange} value={language}>
          <option value="">Languages</option>
          {languages.map(language => (
          <option key={language} value={language}>{language}</option>
        ))}
        </select>

        <button type="submit">Search</button>
        </form>
      </div>  
     
  );
};

export default BookSearchForm;


