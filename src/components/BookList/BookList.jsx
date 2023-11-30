import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';

const BookList = ({
  booksData,
  handleDetailButton,
  
}) => {
  
  return (
    <div >
      {/* <div>
        {booksData && (
          
        )}
      </div> */}

      <div className='booksList-container'>
        {booksData?.map(bookData => (
          <div key={bookData.id} className="search-item">
            <BookListItem
              bookData={bookData}
              handleDetailButton={handleDetailButton}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;



