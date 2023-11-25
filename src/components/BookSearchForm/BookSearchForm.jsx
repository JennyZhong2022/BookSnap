import { useState } from 'react';
const BookSearchForm = ({ fetchDataByTitle, fetchDataByAuthors }) => {
  const [titleInput, setTitleInput] = useState('');
  const [authorsInput, setAuthorsInput] = useState('')

  const handleTitleSearch = () => {
    fetchDataByTitle(titleInput)
  };

  const handleAuthorsSearch = () => {
    fetchDataByAuthors(authorsInput)
  } 
  return (
    <div style={{border: "1px solid black"}}>
    <div>
      <p>{titleInput}</p>
      <input type="text" onChange={e => setTitleInput(e.target.value)} />
      <button onClick={handleTitleSearch}>Search by Title</button>
    </div>
    <div>
      <p>{authorsInput}</p>
      <input type="text" onChange={e => setAuthorsInput(e.target.value)} />
      <button onClick={handleAuthorsSearch}>Search by Authors</button>
    </div>
    </div>
  );
};

export default BookSearchForm;