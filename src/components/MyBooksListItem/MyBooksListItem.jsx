

const MyBooksListItem = ({ book }) => {
  return (
    <ul>
      <div style={{border:'1px solid blue', borderRadius: '5px'}}>
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Authors: {book.authors.join(', ')}</p>
      </div>
    </ul>
  );
};

export default MyBooksListItem;