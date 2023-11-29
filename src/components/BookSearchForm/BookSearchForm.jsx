
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


const BookSearchForm = ({  setStartIndex, query, setQuery ,fetchData, selectedSearchType,setSelectedSearchType,setCurrentPage }) => {

 // const [categories, setCategories] = useState();

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query, selectedSearchType);
    setStartIndex(0)
    setCurrentPage(1)
  }

  const handleSearchTypeChange = (event) => {
    setSelectedSearchType(event.target.value);
  }
  
  return (
    <div className="BookSearchForm" style={{border: "1px solid black"}}>

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