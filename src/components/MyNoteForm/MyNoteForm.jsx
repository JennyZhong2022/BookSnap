import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const MyNoteForm = ({
  handleAddNote,
  book,
  handleDeleteNote,
  haveNote,
  handleWriteNote,
  addNoteButtonClicked,
}) => {
  const [noteInput, setNoteInput] = useState('');

  const handleInput = e => {
    setNoteInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNote(e, noteInput);
  };

  const buttonStyle = {
    backgroundColor: '#113946',
    color: 'white',
    borderStyle: 'solid',
    fontSize: '0.5em',
    fontWeight: 'bolder',
    minWidth: '130px'
  };

  return (
    <>
      {haveNote && (
        <div>
          <Button 
          onClick={() => handleDeleteNote(book._id)}
          style={buttonStyle} 
          variant="outlined" startIcon={<DeleteIcon />}
          size="small" >
            Delete Note
          </Button>
        </div>
      )}
      {!haveNote && !addNoteButtonClicked && (
        <div>
          <Button 
          onClick={handleWriteNote} 
          style={buttonStyle}
          variant="outlined" 
          size="small"
          startIcon={<NoteAddIcon />}
          >Add Your Note</Button>
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
              style={{ width: '100%', marginTop: '8px'}}
            />
            <div style={{ marginTop: '15px' }}>
              <Button
                onClick={handleSubmit}
                style={buttonStyle} 
                variant="outlined" 
                size="small" >
                Submit
              </Button>

              <Button 
                onClick={handleWriteNote}
                style={{ ...buttonStyle, marginLeft: '8px' }}
                variant="outlined" 
                size="small">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MyNoteForm;