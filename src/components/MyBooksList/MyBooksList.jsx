import { useEffect, useState } from 'react';
import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';
import './MyBooksList.css';
import TextField from '@mui/material/TextField';

const MyBooksList = ({ myBooks, onDeleteBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(myBooks);

  useEffect(() => {
    // Update filteredBooks when myBooks changes
    setFilteredBooks(myBooks);
  }, [myBooks]);

  const _handleMyBookSearchInput = (e) => {
    const input = e.target.value.toLowerCase();

    setSearchTerm(input);

    if (!input.trim()) {
      setFilteredBooks(myBooks);
    } else {
      const filtered = myBooks.filter((myBook) =>
        myBook.title?.toLowerCase().includes(input)
      );
      setFilteredBooks(filtered);
    }
  };


  const buttonStyles = {
    backgroundColor: '#113946',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bolder',
    minWidth: '130px',
    minHeight: '55px'
  };


  return (
    <div className="main-container">
      <TextField
        type="search"
        onChange={_handleMyBookSearchInput}
        label="🔎 Search for book title "
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          '& fieldset': {
            borderColor: '#000', 
            borderWidth: '2px', 
          },
          '& label': {
            color: '#000', 
            pl: 8
          },
          mb: 3,
          pl: 6,
          pr: 1,
        }}
      />
      <h4>My Total Books: {myBooks.length}</h4>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <MyBooksListItem key={book._id} book={book} onDeleteBook={onDeleteBook} />
        ))}
      </div>
    </div>
  );
};



export default MyBooksList;
