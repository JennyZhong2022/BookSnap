import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './BookListItem.css'
import ReadMoreIcon from '@mui/icons-material/ReadMore';




const BookListItem = ({ bookData, handleDetailButton }) => {


  const buttonStyle = {
    backgroundColor: '#113946',
    color: 'white',
    borderStyle: 'solid',
    fontSize: '0.5em',
    borderColor: '#fff2d8',
    fontWeight: 'bolder',
    minWidth: '130px'
  };



  return (
    <>
      <Grid container spacing={2} style={{borderRadius: '5px', margin: '1em', padding: '1em', justifyContent: 'center', backgroundColor: '#ead7bb'}}>
        <Grid item>
          <img src={bookData.volumeInfo.imageLinks?.thumbnail} alt="" style={{ borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={8} style={{marginLeft: '15px'}}>
              <div>
                <Typography variant="h6" component="span">
                {bookData.volumeInfo.title}
              </Typography>
              <span>
              <Typography variant="body1" component="p" fontStyle="italic" style={{ marginTop: '8px', marginBottom: '10px'}}>
                by {bookData.volumeInfo.authors || 'No data'}{' '}
                </Typography>
                <Button 
                  onClick={() => handleDetailButton(bookData.id)}
                  style={buttonStyle} 
                  variant="outlined" 
                  startIcon={<ReadMoreIcon />}
                  size="small" >
                  See more
                </Button>
                <div style={{ marginTop: '10px' }}></div>
              </span>
            </div>
        </Grid>
      </Grid>
    </>
  );
};

export default BookListItem;
