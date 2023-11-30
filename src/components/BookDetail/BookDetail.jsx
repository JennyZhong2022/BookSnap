import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';

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
    <div style={{borderRadius: '5px', margin: '1em', padding: '1em', justifyContent: 'center', backgroundColor: '#ead7bb'}}>
      {bookData ? (
        <div style={{ width: '400px' }}>
          <img
            src={volumeData.imageLinks.thumbnail}
            alt={volumeData.title}
            style={{ height: '20em' }}
          />
            {volumeData.title}{' '}
            <h2>
              <Button 
              onClick={handleAddToMyBooksButton}
              style={buttonStyle} 
              variant="outlined" 
              startIcon={<ListIcon />}
              size="small" >
                Add to My Books
              </Button>
            </h2>
          {volumeData.authors?.map(e => (
            <h3 key={uuid()}>By {e}</h3>
          ))}{' '}
          <h5>Published: {volumeData.publishedDate}</h5>
          <div style={{ width: '100%', height: '50%' }}>
            {volumeData.description}
          </div>
        </div>
      ) : (
        <div>
          <h2>BookDetail</h2>
        </div>
      )}
      </div>
    </>
  );
};

export default BookDetail;

