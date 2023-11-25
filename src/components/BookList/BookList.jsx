
import BookListItem from '../BookListItem/BookListItem'

const bookList = ({booksData, handleDetailButton}) => {
  return (
    <div>
      <ul>
      {booksData?.map(bookData => <div key={bookData.id}><BookListItem bookData={bookData} handleDetailButton={handleDetailButton}/></div>)}


      </ul>
    </div>
  )
}

export default bookList


