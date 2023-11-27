import { useState } from 'react';

const MyNoteForm = ({ handleAddNote, book, handleDeleteNote, haveNote, handleWriteNote, addNoteButtonClicked }) => {
  const [noteInput, setNoteInput] = useState('');
  
  const handleInput = e => {
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
          <button onClick={handleWriteNote}>Write a note</button>
        </div>
      )}
      {!haveNote && addNoteButtonClicked && (
        <div>
          <form onSubmit={e => handleAddNote(e, noteInput)}>
            <input
              type="text"
              value={noteInput}
              onChange={e => handleInput(e)}
            />
            <button>Add Note</button>
            <button onClick={handleWriteNote}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default MyNoteForm;
