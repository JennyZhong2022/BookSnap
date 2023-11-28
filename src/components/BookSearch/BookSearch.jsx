import BookSearchForm from '../BookSearchForm/BookSearchForm';


const BookSearch = ({fetchData, selectedSearchType,setSelectedSearchType,handleSearch, categories, handleCategoryChanges,setStartIndex, query, setQuery,setCurrentPage}) => {
  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        
        handleSearch={handleSearch}
        categories={categories}
        handleCategoryChanges={handleCategoryChanges}
        setStartIndex={setStartIndex}
        query={query}
        setQuery={setQuery}
        fetchData={fetchData}
        selectedSearchType={selectedSearchType} 
        setSelectedSearchType={setSelectedSearchType}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BookSearch;
