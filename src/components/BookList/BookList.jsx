import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';

const bookList = ({
  booksData,
  handleDetailButton,
  
}) => {
  

  return (
    <div style={{ margin: '100px' }}>
      {/* <div>
        {booksData && (
          
        )}
      </div> */}

      <ul>
        {booksData?.map(bookData => (
          <div key={bookData.id} className="search-item">
            <BookListItem
              bookData={bookData}
              handleDetailButton={handleDetailButton}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default bookList;
