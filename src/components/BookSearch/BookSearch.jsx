import BookSearchForm from '../BookSearchForm/BookSearchForm';
import Box from '@mui/material/Box';


const BookSearch = ({fetchData, selectedSearchType,setSelectedSearchType,  handleCategoryChanges,setStartIndex, query, setQuery,setCurrentPage,category, setCategory,language,setLanguage}) => {

  
  return (
    <div >
      <Box display="flex" flexDirection="column" alignItems="center" columns="16">
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
      </Box>
    </div>
  );
};

export default BookSearch;
