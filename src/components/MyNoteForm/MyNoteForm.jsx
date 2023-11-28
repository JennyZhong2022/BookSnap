import { useState } from 'react';
import TextField from '@mui/material/TextField';

const MyNoteForm = ({ handleAddNote, book, handleDeleteNote, haveNote, handleWriteNote, addNoteButtonClicked }) => {
  const [noteInput, setNoteInput] = useState('');

  const handleInput = (e) => {
    setNoteInput(e.target.value);
  };

  return (
    <>
      {haveNote && (
        <div>
          <button>Edit</button>
          <button onClick={() => handleDeleteNote(book._id)}>Delete</button>
        </div>
      )}
      {!haveNote && !addNoteButtonClicked && (
        <div>
          <button onClick={handleWriteNote}>Add Your Note</button>
        </div>
      )}
      {!haveNote && addNoteButtonClicked && (
        <div>
          <form onSubmit={(e) => handleAddNote(e, noteInput)}>
            <TextField
              id="outlined-multiline-static"
              label="Your Note"
              multiline
              rows={4}
              value={noteInput}
              onChange={(e) => handleInput(e)}
            />
            <button>Submit</button>
            <button onClick={handleWriteNote}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default MyNoteForm;