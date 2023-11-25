import { useState, useEffect } from 'react';
import BookSearchForm from '../BookSearchForm/BookSearchForm';
const BookSearch = ({fetchDataByAuthors, fetchDataByTitle, booksData}) => {
  
  return (
    <div style={{ border: '1px solid black' }}>
      <BookSearchForm
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
      />
    </div>
  );
};

export default BookSearch;
