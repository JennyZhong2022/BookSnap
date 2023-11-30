import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const BookDetail = ({
  bookData,
  handleAddToMyBooksButton,
  googleBookIds,
  user,
}) => {
  const hasBookBeenAdded = googleBookIds?.includes(bookData.id);
  const volumeData = bookData?.volumeInfo;

  const buttonStyle = {
    backgroundColor: '#113946',
    color: 'white',
    borderStyle: 'solid',
    fontSize: '0.5em',
    borderColor: '#fff2d8',
    fontWeight: 'bolder',
    minWidth: '130px',
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
        }}
      >
        <div
          style={{
            height: '150vh',
            borderRadius: '5px',
            margin: '1em',
            padding: '1em',
            justifyContent: 'center',
            backgroundColor: '#ead7bb',
          }}
        >
          {bookData && volumeData ? (
            <div style={{ width: '500px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
                <img
                  src={volumeData.imageLinks?.thumbnail}
                  alt={volumeData.title}
                  style={{ padding: '0em 2em 0em 0em', height: '20em' }}
                />
                <div>
                  <h2 style={{ padding: '1em 0 0 0' }}>
                    {user && hasBookBeenAdded ? (
                      <Button
                        onClick={handleAddToMyBooksButton}
                        disabled={hasBookBeenAdded}
                        style={buttonStyle}
                        variant="outlined"
                        startIcon={<ListIcon />}
                        size="small"
                      >
                        Book Is Added
                      </Button>
                    ) : (
                      <Button
                        onClick={handleAddToMyBooksButton}
                        disabled={bookData.addedToMyBooks}
                        style={buttonStyle}
                        variant="outlined"
                        startIcon={<ListIcon />}
                        size="small"
                      >
                        Add to MyBooks
                      </Button>
                    )}

                    {!user && (
                      <div>
                        <span
                          style={{
                            fontSize: '12px',
                            border: '2px solid black',
                            padding: '5px',
                            borderRadius: '10px',
                            backgroundColor: '#fff2d8',
                          }}
                        >
                          Please <Link to="/api/user">login</Link> to add this
                          book
                        </span>
                      </div>
                    )}
                  </h2>
                </div>
              </div>
              <div style={{ padding: '2em 0 0.7em 0' }}>
                <Typography variant="h6" component="span">
                  {volumeData.title}{' '}
                </Typography>
              </div>
              {volumeData.authors?.map(e => (
                <Typography
                  key={uuid()}
                  variant="body1"
                  component="p"
                  fontStyle="italic"
                  style={{ marginTop: '8px', marginBottom: '10px' }}
                >
                  By {e}
                </Typography>
              ))}{' '}
              <Typography>Published: {volumeData.publishedDate}</Typography>
              <Typography style={{ textAlign: 'justify' }}>
                <span style={{ width: '100%', height: '50%' }}>
                  {volumeData.description}
                </span>
              </Typography>
            </div>
          ) : (
            <div>
              <Typography>
                <span style={{ fontWeight: '100', fontSize: '1.8rem' }}>
                  Book Details
                </span>
              </Typography>
            </div>
          )}
        </div>
      </Box>
    </>
  );
};
export default BookDetail;
