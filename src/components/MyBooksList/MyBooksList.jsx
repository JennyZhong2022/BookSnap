import { useEffect, useState } from 'react';
import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
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


  const buttonStyles = {
    backgroundColor: '#113946',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bolder',
    minWidth: '130px',
    minHeight: '55px'
  };


  return (
    <>
      <div className='mybooks-search'>
        <form onSubmit={_handleMyBookSearch} >
          <div style={{ display: 'inline-flex', justifyContent: 'space-between', padding: '1rem',  borderRadius: '1%' }} >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 2, width: '35ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="search-field" >
                <TextField 
                    id="outlined-search" 
                    label="Search for book title" 
                    type="search" 
                    onChange={_handleMyBookSearchInput}
                    placeholder="Search for book title"
                />
              </div>
            </Box>

            <div className="submit-button" >
              <Button variant="contained" style={buttonStyles} type="submit" startIcon={<SearchIcon />}>
                Search
              </Button>
            </div>
          </div>
        </form>
      </div> 
      <div className='books-container'>
        <div className="total-books">
          <Typography variant="h6" component="span">
            My Total Books: {myBooks.length}
          </Typography>
        </div>

        {filteredBooks.map((book) => (
          <MyBooksListItem key={book._id} book={book} onDeleteBook={onDeleteBook} />
        ))}
      </div>
    </>
  );
};



export default MyBooksList;
