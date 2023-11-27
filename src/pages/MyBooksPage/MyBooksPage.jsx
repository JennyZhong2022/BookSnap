import React, { useEffect, useState } from 'react';
import MyBooksList from '../../components/MyBooksList/MyBooksList';
import * as booksAPI from '../../utilities/books-api';

const MyBooksPage = () => {
  const [myBooks, setMyBooks] = useState([]);
  
  useEffect(() => {
    const getMyBooks = async () => {
      try {
        const books = await booksAPI.getMyBooksList();
        console.log('1', books);
        setMyBooks(books);
      } catch (error) {
        console.error('Error getting my books:', error.message);
      }
    };
    getMyBooks();
  }, []);

  const handleDeleteBook = async (bookId) => {
    try {
      await booksAPI.deleteMyBooksListItem(bookId);
      // Update the state with the fresh data from the server
      const updatedBooks = await booksAPI.getMyBooksList();
      setMyBooks(updatedBooks);
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div>
      <MyBooksList myBooks={myBooks} setMyBooks={setMyBooks} onDeleteBook={handleDeleteBook} />
    </div>
  );
};

export default MyBooksPage;