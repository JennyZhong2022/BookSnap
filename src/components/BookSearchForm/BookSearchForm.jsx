const BookSearchForm = ({
  query,
  setQuery,
  fetchData,
  selectedSearchType,
  setSelectedSearchType,
  setFilteredBooksData,
  isNewSearch,
  setIsNewSearch,
}) => {
  const handleChange = event => {
    setQuery(event.target.value);
    setFilteredBooksData(null);
    setIsNewSearch(!isNewSearch);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchData(query, selectedSearchType);
  };

  const handleSearchTypeChange = event => {
    setSelectedSearchType(event.target.value);
  };

  return (
    <div className="BookSearchForm" style={{ border: '1px solid black' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={`Search by ${
          selectedSearchType === 'title' ? 'Title' : 'Author'
        }`}
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
