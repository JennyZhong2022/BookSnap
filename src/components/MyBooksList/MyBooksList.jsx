import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';

const MyBooksList = ({ myBooks, onDeleteBook }) => {
  return (
    <div>
      {myBooks.map((book) => (
        <MyBooksListItem key={book._id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </div>
  );
};

export default MyBooksList;