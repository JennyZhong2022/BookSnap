import React from 'react';

const MyBooksList = ({ myBooks }) => {
  return (
    <div>
      <h2>My Books</h2>
      {myBooks.length === 0 ? (
        <p>No books added to My Books.</p>
      ) : (
        <ul>
          {myBooks.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default MyBooksList