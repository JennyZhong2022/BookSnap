import './BookPageController.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




const buttonStyles = {
  backgroundColor: '#113946',
  color: 'white',
  fontSize: '0.8em',
  fontWeight: 'bolder',
  minWidth: '130px',
    minHeight: '55px'
};



const BookPageController = ({ handlePreviousPage,
  handleNextPage,
  currentPage,
  setCurrentPage,
  maxPages,
  setStartIndex,
}) => {


  const handleCurrentPageChange = e => {
    const newPage = Number(e.target.value);
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * 10);
  };
  
  

  return (

    <div style={{paddingLeft: '10rem'}}>
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous Page
    </button>
    <select value={currentPage} onChange={handleCurrentPageChange}>
      {Array.from({ length: maxPages }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
    <button
      onClick={handleNextPage}
      disabled={currentPage === maxPages}
    >
      Next Page
    </button>

  
  </div>
  )
}

export default BookPageController