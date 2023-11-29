import React from 'react'
import MyNoteForm from '../MyNoteForm/MyNoteForm';
import * as noteAPI from '../../utilities/note-api';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ModeCommentSharpIcon from '@mui/icons-material/ModeCommentSharp';
import './MyBooksListItem.css';

const MyBooksListItem = ({ book, onDeleteBook }) => {
  const [bookNote, setBookNote] = useState(book.note);
  const [haveNote, setHaveNote] = useState(book.note ? true : false);
  const [addNoteButtonClicked, setAddNoteButtonClicked] = useState(
    book.note ? true : false
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    onDeleteBook(book._id);
  };

  const handleAddNote = async (e, input) => {
    e.preventDefault();
    await noteAPI.addNote({ _id: book._id, note: input });
    setBookNote(input);
    setHaveNote(true);
  };

  const handleDeleteNote = async bookId => {
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
    minWidth: '130px',
  };
  const modalButtonStyle = {
    backgroundColor: '#615954',
    color: '#ffffff',
    borderStyle: 'solid',
    fontSize: '0.5em',
    borderColor: '#fff2d8',
    fontWeight: 'bolder',
    minWidth: '130px',
    marginRight: '1em'
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          borderRadius: '5px',
          margin: '1em',
          padding: '1em',
          justifyContent: 'center',
          backgroundColor: '#ead7bb',
        }}
      >
        <Grid item>
          <img
            src={book.image}
            alt={book.title}
            style={{ borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={8} style={{ marginLeft: '15px' }}>
          <div>
            <Typography variant="h6" component="span">
              {book.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontStyle="italic"
              style={{ marginTop: '8px', marginBottom: '10px' }}
            >
              by {book.authors.join(', ')}
            </Typography>
            <Button onClick={handleOpen} style={modalButtonStyle}
              variant="outlined"
              size="small"
              startIcon={<ModeCommentSharpIcon />}>See description</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Description
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {book.description}
                </Typography>
              </Box>
            </Modal>
            <Button
              onClick={handleDelete}
              style={buttonStyle}
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
            >
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
    </>
  );
};

export default MyBooksListItem;
