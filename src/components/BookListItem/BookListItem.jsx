const BookListItem = ({bookData, handleDetailButton}) => {
  return (
    <div style={{border:'1px solid blue', borderRadius: '5px'}}>
    <img src={bookData.volumeInfo.imageLinks?.smallThumbnail} alt="" />{bookData.volumeInfo.title} by {bookData.volumeInfo.authors} <button onClick={()=>handleDetailButton(bookData.id)}>See more</button>
    </div>
  )
}


export default BookListItem