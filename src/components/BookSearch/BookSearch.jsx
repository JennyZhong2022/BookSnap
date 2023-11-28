import BookSearchForm from '../BookSearchForm/BookSearchForm';


const BookSearch = ({fetchDataByAuthors, fetchDataByTitle, handleSearch, categories, handleCategoryChanges,setStartIndex, query, setQuery}) => {
  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
        handleSearch={handleSearch}
        categories={categories}
        handleCategoryChanges={handleCategoryChanges}
        setStartIndex={setStartIndex}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
};

export default BookSearch;
