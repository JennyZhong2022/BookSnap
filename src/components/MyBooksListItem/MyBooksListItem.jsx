import MyNoteForm from '../MyNoteForm/MyNoteForm';
import * as noteAPI from '../../utilities/note-api';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './MyBooksListItem.css'

const MyBooksListItem = ({ book, onDeleteBook }) => {
  const [bookNote, setBookNote] = useState(book.note);
  const [haveNote, setHaveNote] = useState(book.note ? true : false);
  const [addNoteButtonClicked, setAddNoteButtonClicked] = useState(book.note ? true : false);

  const handleDelete = () => {
    onDeleteBook(book._id);
  };

  const handleAddNote = async (e, input) => {
    e.preventDefault();
    await noteAPI.addNote({ _id: book._id, note: input });
    setBookNote(input);
    setHaveNote(true);
  };

  const handleDeleteNote = async (bookId) => {
    await noteAPI.deleteNote(bookId);
    setBookNote('');
    setHaveNote(false);
    setAddNoteButtonClicked(false);
  };

  const handleWriteNote = () => {
    setAddNoteButtonClicked(!addNoteButtonClicked);
  };

  const buttonStyle = {
    backgroundColor: '#fff2d8',
    color: '#113946',
    borderStyle: 'solid',
    fontSize: '0.5em',
    borderColor: '#fff2d8',
    fontWeight: 'bolder',
    minWidth: '130px'
  };

  return (
    <>
    <Grid container spacing={2} style={{borderRadius: '5px', margin: '1em', padding: '1em', justifyContent: 'center', backgroundColor: '#ead7bb'}}>
      <Grid item>
        <img src={book.image} alt={book.title} style={{ borderRadius: '10px' }}/>
      </Grid>
      <Grid item xs={8} style={{marginLeft: '15px'}}>
        <div>
          <Typography variant="h6" component="span">
            {book.title}
          </Typography>
          <Typography variant="body1" component="p" fontStyle="italic" style={{ marginTop: '8px', marginBottom: '10px'}}>
            by {book.authors.join(', ')}
          </Typography>
          <Button 
          onClick={handleDelete} 
          style={buttonStyle} 
          variant="outlined" 
          startIcon={<DeleteIcon />}
          size="small" >
            Remove Book
          </Button>
          {bookNote && (
            <Box
              mt={2}
              p={2}
              border={1}
              borderRadius={1}
              borderColor="#bca37f"
              bgcolor="#f9f9f9"
            >
              {bookNote}
            </Box>
          )}
          <div style={{ marginTop: '10px' }}>
            <MyNoteForm 
            handleAddNote={handleAddNote} 
            book={book} 
            handleDeleteNote={handleDeleteNote} 
            haveNote={haveNote} 
            handleWriteNote={handleWriteNote} 
            addNoteButtonClicked={addNoteButtonClicked} 
            />
          </div>
        </div>
      </Grid>
    </Grid>
    {/* <div className='book-container'>
      <img src={book.image} alt={book.title} />
      <div style={{width: '100%'}}>
      <div className='book-content'>

      <h3>{book.title} <span className='authors-name'>By {book.authors.join(', ')}</span> </h3>
      <div>{bookNote}</div>
      <MyNoteForm handleAddNote={handleAddNote} book={book} handleDeleteNote={handleDeleteNote} haveNote={haveNote} handleWriteNote={handleWriteNote} addNoteButtonClicked={addNoteButtonClicked} />
      

      </div>
      <div className='delete-button'>
      <Button onClick={handleDelete} style={{ backgroundColor: '#113946', color: 'white' }} variant="outlined" size='small' startIcon={<DeleteIcon /> } >Delete</Button>
      </div>


      </div>
    </div> */}
    </>
  );
};

export default MyBooksListItem;