import { v4 as uuid } from 'uuid';
const BookDetail = ({ bookData, handleAddToMyBooksButton }) => {
  const volumeData = bookData?.volumeInfo;

  return (
    <>
      {bookData ? (
        <div style={{ width: '400px' }}>
          <img
            src={volumeData.imageLinks.thumbnail}
            alt={volumeData.title}
            style={{ height: '20em' }}
          />
          <h2>
            {volumeData.title}{' '}
            <button onClick={handleAddToMyBooksButton}>Add to My Books</button>
          </h2>
          {volumeData.authors?.map(e => (
            <h3 key={uuid()}>By {e}</h3>
          ))}{' '}
          <h5>Published: {volumeData.publishedDate}</h5>
          <div style={{ width: '100%', height: '50%' }}>
            {volumeData.description}
          </div>
        </div>
      ) : (
        <div>
          <h2>BookDetail</h2>
        </div>
      )}
    </>
  );
};

export default BookDetail;
