const BookDetail = ({ bookData, handleAddToMyBooksButton }) => {
  const style = { border: '1px solid green' };
  const volumeData = bookData?.volumeInfo;

  return (
    <div style={style}>
      {bookData ? (
        <div>
          <img src={volumeData.imageLinks.thumbnail} alt={volumeData.title} />
          <h2>{volumeData.title}</h2>
          {volumeData.authors?.map(e => <h3>By {e}</h3>)} <h3>Published: {volumeData.publishedDate}</h3>
          <div style={{width: "400px"}}>{volumeData.description}</div>
          <button onClick={() => handleAddToMyBooksButton(bookData.id)}>Add to My Books</button>
        </div>
      ) : (
        <div>
          <h2>BookDetail</h2>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
