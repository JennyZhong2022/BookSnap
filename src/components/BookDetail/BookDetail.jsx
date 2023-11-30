import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const BookDetail = ({ bookData, handleAddToMyBooksButton }) => {
  const volumeData = bookData?.volumeInfo;


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
      <Box
        style={{
          borderRadius: '5px',
          margin: '1em',
          padding: '1em',
          justifyContent: 'center',
          backgroundColor: '#ead7bb',
        }} >
        <div style={{height: '150vh', borderRadius: '5px', margin: '1em', padding: '1em', justifyContent: 'center', backgroundColor: '#ead7bb'}}>
          {bookData ? (
          <div style={{ width: '500px' }}>
            <div style={{ display: 'inline-flex', flexDirection: 'column'}} >
              <img
                src={volumeData.imageLinks.thumbnail}
                alt={volumeData.title}
                style={{ padding: '0em 2em 0em 0em', height: '20em' }}
              />
              <div>
                <h2 style={{padding: '1em 0 0 0'}} >
                  <Button 
                  onClick={handleAddToMyBooksButton}
                  style={buttonStyle} 
                  variant="outlined" 
                  startIcon={<ListIcon />}
                  size="small" >
                    Add to My Books
                  </Button>
                </h2>
              </div>
            </div>
            <div style={{padding: '2em 0 0.7em 0'}} >
              <Typography 
                variant="h6" 
                component="span">
                {volumeData.title}{' '}
              </Typography>
            </div>
              <Typography
                variant="body1"
                component="p"
                fontStyle="italic"
                style={{ marginTop: '8px', marginBottom: '10px' }}
              >
                {volumeData.authors?.map(e => (
                <div key={uuid()}>By {e}</div>
                ))}{' '}
              </Typography>
              <Typography>
                <h4>Published: {volumeData.publishedDate}</h4>
              </Typography>
              <Typography  style={{textAlign: 'justify'}} >
                  <div style={{ width: '100%', height: '50%' }}>
                    {volumeData.description}
                  </div>
              </Typography>
          </div>        
            ) : (
          <div >
            <Typography >
            <div style={{ fontWeight: '100', fontSize: '1.8rem' }} >Book Details</div>
            </Typography>
          </div>
          )}
        </div> 
     </Box>
    </>
  );
};

export default BookDetail;

