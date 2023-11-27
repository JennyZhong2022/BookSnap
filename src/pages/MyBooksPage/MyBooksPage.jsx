import React, { useEffect, useState } from 'react';
import MyBooksList from '../../components/MyBooksList/MyBooksList';
import * as booksAPI from '../../utilities/books-api';

const MyBooksPage = () => {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const getMyBooks = async () => {
        const books = await booksAPI.getMyBooksList();
        setMyBooks(books);
    };
    getMyBooks();
  }, []);

  return (
    <div>
      <MyBooksList myBooks={myBooks} />
    </div>
  );
};

export default MyBooksPage;