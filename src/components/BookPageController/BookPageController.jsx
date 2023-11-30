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
    <div>
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Button
          style={buttonStyles}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
      </Grid>
      <Grid item>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentPage}
          onChange={handleCurrentPageChange}
          sx={{ minWidth: '10px', minHeight: '35px' }}
        >
          {Array.from({ length: maxPages }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <Button
          style={buttonStyles}
          onClick={handleNextPage}
          disabled={currentPage === maxPages}
        >
          Next Page
        </Button>
      </Grid>
    </Grid>
  </div>
  )
}

export default BookPageController