import { useEffect, useState } from 'react';
import MyBooksList from '../../components/MyBooksList/MyBooksList';
import * as booksAPI from '../../utilities/books-api';

const MyBooksPage = () => {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const getMyBooks = async () => {
      try {
        const books = await booksAPI.getMyBooksList();
        setMyBooks(books);
      } catch (error) {
        console.error('Error getting my books:', error.message);
      }
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