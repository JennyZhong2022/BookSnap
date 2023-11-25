
import BookListItem from '../BookListItem/BookListItem'

const bookList = ({booksData, handleDetailButton}) => {
  return (
    <div>
      <ul>
      {booksData?.map(bookData => <li key={bookData.id}><BookListItem bookData={bookData} handleDetailButton={handleDetailButton}/></li>)}


      </ul>
    </div>
  )
}

export default bookList


