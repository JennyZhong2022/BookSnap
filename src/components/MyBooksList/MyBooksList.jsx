import MyBooksListItem from '../MyBooksListItem/MyBooksListItem';

const MyBooksList = ({ myBooks }) => {
  return (
    <div>
      <h2>My Books</h2>
      <ul>
        {myBooks.map((book) => (
          <MyBooksListItem key={book._id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default MyBooksList;