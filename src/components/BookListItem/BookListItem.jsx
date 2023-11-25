const BookListItem = ({bookData}) => {
  return (
    <div style={{border:'1px solid blue', borderRadius: '5px'}}>
    <img src={bookData.volumeInfo.imageLinks?.smallThumbnail} alt="" />{bookData.volumeInfo.title} by {bookData.volumeInfo.authors}
    </div>
  )
}


export default BookListItem