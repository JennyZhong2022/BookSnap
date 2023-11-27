import React from 'react';

const MyBooksListItem = ({ book }) => {
  return (
    <div>
        <img src={volumeData.imageLinks.thumbnail} alt={volumeData.title} />
        <h2>{volumeData.title}</h2>
        {volumeData.authors?.map(e => <h3>By {e}</h3>)} <h3>Published: {volumeData.publishedDate}</h3>
        <div style={{width: "400px"}}>{volumeData.description}</div>
    </div>
  );
};

export default MyBooksListItem