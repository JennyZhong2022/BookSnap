import React from 'react';

const MyBooksListItem = ({ book, onDeleteBook }) => {
  const handleDelete = () => {
    onDeleteBook(book._id);
  };

  return (
    <div>
      <p>{book.title}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MyBooksListItem;