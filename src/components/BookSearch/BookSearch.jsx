import BookSearchForm from '../BookSearchForm/BookSearchForm';
const BookSearch = ({fetchDataByAuthors, fetchDataByTitle}) => {
  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
      />
    </div>
  );
};

export default BookSearch;
