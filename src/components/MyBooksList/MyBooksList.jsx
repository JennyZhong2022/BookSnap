import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';
// import Grid from '@mui/material/Unstable_Grid2';

const MyBooksList = ({ myBooks, onDeleteBook }) => {
  return (

    <div className='books-container'>
      {myBooks.map((book) => (
        <MyBooksListItem key={book._id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </div>
  );
};

export default MyBooksList;