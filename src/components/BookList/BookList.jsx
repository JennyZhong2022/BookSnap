
import BookListItem from '../BookListItem/BookListItem'

const bookList = ({booksData, handleDetailButton,handlePreviousPage,handleNextPage}) => {
  return (
    <div>
      <ul>
      {booksData?.map((bookData) => (
        <div key={bookData.id}>
            <BookListItem 
              bookData={bookData} 
              handleDetailButton={handleDetailButton} />
        </div>
      ))}


      </ul>
      <button onClick={handlePreviousPage}>Previous Page</button>
     <span>1</span>
        <button onClick={handleNextPage}>Next Page</button>
    </div>
  )
}

export default bookList


