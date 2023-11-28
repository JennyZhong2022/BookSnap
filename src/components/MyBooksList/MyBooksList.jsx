import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';
import './MyBooksList.css'

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