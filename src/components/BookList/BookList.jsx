import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';

const bookList = ({ booksData, handleDetailButton, groupedData}) => {
 


  return (
    <div style={{ margin: '100px' }}>
      {/* <div>
        {booksData && (
          
        )}
      </div> */}

      <ul>
        {groupedData?.map(bookData => (
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
