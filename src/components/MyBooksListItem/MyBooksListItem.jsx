import MyNoteForm from '../MyNoteForm/MyNoteForm';
import * as noteAPI from '../../utilities/note-api';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <div style={{ border: '1px solid blue', borderRadius: '5px', margin: '1em', padding: '1em', display: 'flex'}}>
      <img src={book.image} alt={book.title} />
      <div style={{margin: '1em'}}>

      <h3>{book.title}</h3>
      <p>Authors: {book.authors.join(', ')}</p>
      <Button onClick={handleDelete} style={{ backgroundColor: '#113946', color: 'white' }} variant="outlined" startIcon={<DeleteIcon /> } >Delete</Button>
      <p>{bookNote}</p>
      <MyNoteForm handleAddNote={handleAddNote} book={book} handleDeleteNote={handleDeleteNote} haveNote={haveNote} handleWriteNote={handleWriteNote} addNoteButtonClicked={addNoteButtonClicked} />

      </div>
    </div>
  );
};

export default MyBooksListItem;
