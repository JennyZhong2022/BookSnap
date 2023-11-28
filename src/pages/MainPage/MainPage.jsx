import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
import BookCategory from '../../components/BookCategory/BookCategory';
import { useCallback, useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';

const MainPage = () => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);
  const [bookTitle,setBookTitle]=useState('')
  const [startIndex,setStartIndex]=useState(0)

  // useCallback to match useEffect 
  // useCallback is used to memoize the fetchDataByTitle function.
  // useEffect depends on fetchDataByTitle. Without useCallback, fetchDataByTitle would be re-created on every render, leading to useEffect being triggered more often than necessary.
  const fetchDataByTitle =useCallback( async (bookTitle) => {
    const rawData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&langRestrict=en&maxResults=10&startIndex=${startIndex}&key=AIzaSyAWBcqDbjLpDaKH_EdFHRfsqJtfgkYDnmw`
    ).then(res => res.json());
    const data = rawData.items;
    setBooksData(data);
    console.log(data);
  },[startIndex])

  useEffect(() => {
    if (bookTitle) {
      fetchDataByTitle(); 
    }
    // when the dependencies changes will trigger the fetchDataByTitle functions
  }, [bookTitle, startIndex, fetchDataByTitle]);
  
  


  const fetchDataByAuthors = async query => {
    const rawData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&langRestrict=en&maxResults=10&key=AIzaSyAnDkdiBjWz6guAt0D-RwEr85PlXbI2G18`
    ).then(res => res.json());
    const data = rawData.items;
    setBooksData(data);
    console.log(data);
  };
  
  const handleDetailButton = (bookId) => {
    const bookData = booksData?.filter((book) => book.id === bookId)[0]
    setBookData(bookData)
    console.log(bookData)
  }

  const handleCategoryChange = category => {
    // Filter books based on the selected category
    if (category === '') {
      // If no category selected, show all books
      setFilteredBooksData(booksData);
      setBookData(null);
    } else {
      // Filter books based on the selected category
      const filteredData = booksData.filter(book => {
        return book.volumeInfo.categories?.includes(category);
      });
      setFilteredBooksData(filteredData);
      setBookData(null);
    }
  };

  const handleAddToMyBooksButton = async () => {
    const bookInfo = bookData.volumeInfo
    const data = {
      title: bookInfo.title,
      authors: bookInfo.authors,
      image: bookInfo.imageLinks.thumbnail,
      publishDate: bookInfo.publishDate,
      bookId: bookData.id,
      note: '',
    }
    await booksAPI.addToMyBooks(data)
    alert(`Add ${bookInfo.title} to MyBooks`)
  }

  const handleNextPage = () => {
    setStartIndex(prev => prev + 10)
    // if(startIndex>190) set condition ???
    
  }
  console.log(startIndex);
  const handlePreviousPage = () => {
    setStartIndex(prev => prev - 10)
    // if(startIndex<=10) button disable or set alert condition??
   
  }
  

  return (
    <div>
      <BookSearch
        setBookTitle={setBookTitle}
        bookTitle={bookTitle}
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
        booksData={booksData}
        setBooksData={setBooksData}
        setFilteredBooksData={setFilteredBooksData}
        setStartIndex={setStartIndex}
      />
      <div style={{ display: 'flex' }}>
        {!booksData && <div>No result</div>}
        <BookCategory onCategoryChange={handleCategoryChange} />
        <BookList booksData={filteredBooksData || booksData} handleDetailButton={handleDetailButton} />
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
        <BookDetail bookData={filteredBooksData || bookData} handleAddToMyBooksButton={handleAddToMyBooksButton} />
      </div>
    </div>
  );
};

export default MainPage;
