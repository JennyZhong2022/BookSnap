import React from 'react'
import BookListItem from '../BookListItem/BookListItem'

const bookList = ({booksData}) => {
  return (
    <div>
      <ul>
      {booksData?.map(bookData => <li key={bookData.id}><BookListItem bookData={bookData}/></li>)}


      </ul>
    </div>
  )
}

export default bookList


