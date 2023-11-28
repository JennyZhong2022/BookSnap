const BookListItem = ({ bookData, handleDetailButton }) => {
  return (
    <>
      <img src={bookData.volumeInfo.imageLinks?.thumbnail} alt="" />
      <div style={{ marginLeft: '1em' }}>
        <h3>{bookData.volumeInfo.title}</h3>{' '}
        <span>
          by {bookData.volumeInfo.authors || 'No data'}{' '}
          <button onClick={() => handleDetailButton(bookData.id)}>
            See more
          </button>
        </span>
      </div>
    </>
  );
};

export default BookListItem;
