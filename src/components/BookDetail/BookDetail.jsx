const BookDetail = ({ bookData }) => {
  const style = { border: '1px solid green' };
  const volumeData = bookData?.volumeInfo
  return (
    <div style={style}>
      {bookData ? (
        <div>
          <img src={volumeData.imageLinks.thumbnail} alt={volumeData.title} />
          <h2>{volumeData.title}</h2>
          <h3>By {volumeData.authors[0]}, Published: {volumeData.publishedDate}</h3>
          <div style={{width: "400px"}}>{volumeData.description}</div>
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
