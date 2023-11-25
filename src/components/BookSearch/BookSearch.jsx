import { useState, useEffect } from 'react';
import BookSearchForm from '../BookSearchForm/BookSearchForm';
import BookList from '../BookList/BookList';

const BookSearch = () => {
  const [booksData, setBooksData] = useState(null);

  const fetchDataByTitle = async query => {
    const rawData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=en&maxResults=10&key=AIzaSyAWBcqDbjLpDaKH_EdFHRfsqJtfgkYDnmw`
    ).then(res => res.json());
    const data = rawData.items;
    setBooksData(data);
    console.log(data);
  };
  const fetchDataByAuthors = async query => {
    const rawData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&langRestrict=en&maxResults=10&key=AIzaSyAWBcqDbjLpDaKH_EdFHRfsqJtfgkYDnmw`
    ).then(res => res.json());
    const data = rawData.items;
    setBooksData(data);
    console.log(data);
  };
  return (
    <div style={{border: "1px solid black"}}>
      <BookSearchForm fetchDataByTitle={fetchDataByTitle} fetchDataByAuthors={fetchDataByAuthors}/>
      <BookList booksData={booksData}/>
    </div>
  );
};

export default BookSearch;
