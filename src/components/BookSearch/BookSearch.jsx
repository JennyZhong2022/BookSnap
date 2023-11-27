import BookSearchForm from '../BookSearchForm/BookSearchForm';
const BookSearch = ({fetchDataByAuthors, fetchDataByTitle,setBookTitle,bookTitle,setStartIndex}) => {
  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        setBookTitle={setBookTitle}
        bookTitle={bookTitle}
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
        setStartIndex={setStartIndex}
      />
    </div>
  );
};

export default BookSearch;
