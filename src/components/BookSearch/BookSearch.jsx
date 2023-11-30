import BookSearchForm from '../BookSearchForm/BookSearchForm';



const BookSearch = ({fetchData, selectedSearchType,setSelectedSearchType,  handleCategoryChanges,setStartIndex, query, setQuery,setCurrentPage,category, setCategory,language,setLanguage}) => {

  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        language={language}
        setLanguage={setLanguage}
        category={category}
        setCategory={setCategory}
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
