import { useEffect, useState } from 'react';
import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';
import './MyBooksList.css'

const MyBooksList = ({ myBooks, onDeleteBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(myBooks);

  useEffect(() => {
    // Update filteredBooks when myBooks changes
    setFilteredBooks(myBooks);
  }, [myBooks]);



  const _handleMyBookSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const _handleMyBookSearch = (e) => {
    e.preventDefault();

    // Check if search term is empty and reset the filteredBooks to myBooks
    if (!searchTerm.trim()) {
      setFilteredBooks(myBooks);
      return;
    }

    const filtered = myBooks.filter(myBook => 
      myBook.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  return (
    <div className='books-container'>
      <form onSubmit={_handleMyBookSearch}>
        <input type="search" onChange={_handleMyBookSearchInput} placeholder='Search for book title' />
        <button>Search my books</button>
      </form>
    
      
      <h2>My Total Books: {myBooks.length}</h2>
      


      {filteredBooks.map((book) => (
        <MyBooksListItem key={book._id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </div>
  );
};

export default MyBooksList;
