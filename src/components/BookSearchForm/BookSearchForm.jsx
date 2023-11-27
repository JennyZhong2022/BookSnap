import { useState } from 'react';
const BookSearchForm = ({ fetchDataByTitle, fetchDataByAuthors ,setBookTitle,bookTitle,setStartIndex}) => {
 
  const [authorsInput, setAuthorsInput] = useState('')

  const handleTitleSearch = () => {
    fetchDataByTitle(bookTitle)
    setStartIndex(0)
  };

  const handleAuthorsSearch = () => {
    fetchDataByAuthors(authorsInput)
  } 
  return (
    <div style={{border: "1px solid black"}}>
    <div>
      <p>{bookTitle}</p>
      <input type="text" onChange={e => setBookTitle(e.target.value)} />
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