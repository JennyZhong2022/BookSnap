import BookSearchForm from '../BookSearchForm/BookSearchForm';

const BookSearch = ({
  fetchData,
  selectedSearchType,
  setSelectedSearchType,
  categories,
  query,
  setQuery,
  setFilteredBooksData,
  setIsNewSearch,
  isNewSearch,
}) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        categories={categories}
        query={query}
        setQuery={setQuery}
        fetchData={fetchData}
        selectedSearchType={selectedSearchType}
        setSelectedSearchType={setSelectedSearchType}
        setFilteredBooksData={setFilteredBooksData}
        setIsNewSearch={setIsNewSearch}
        isNewSearch={isNewSearch}
      />
    </div>
  );
};

export default BookSearch;
