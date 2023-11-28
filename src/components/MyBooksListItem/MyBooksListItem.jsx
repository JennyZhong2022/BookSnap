import MyNoteForm from '../MyNoteForm/MyNoteForm';
import * as noteAPI from '../../utilities/note-api';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './MyBooksListItem.css'

const MyBooksListItem = ({ book, onDeleteBook }) => {
  const [bookNote, setBookNote] = useState(book.note);
  const [haveNote, setHaveNote] = useState(book.note ? true : false)
  const [addNoteButtonClicked, setAddNoteButtonClicked] = useState(book.note ? true : false);
  const handleDelete = () => {
    onDeleteBook(book._id);
  };

  const handleAddNote = async (e, input) => {
    e.preventDefault();
    await noteAPI.addNote({ _id: book._id, note: input });
    setBookNote(input)
    setHaveNote(true)
  };


  const handleDeleteNote = async (bookId) => {
    await noteAPI.deleteNote(bookId)
    setBookNote('')
    setHaveNote(false)
    setAddNoteButtonClicked(false)
}

const handleWriteNote = () => {
  setAddNoteButtonClicked(!addNoteButtonClicked);
};


  return (
    <div className='book-container'>
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
    </div>
  );
};

export default MyBooksListItem;
