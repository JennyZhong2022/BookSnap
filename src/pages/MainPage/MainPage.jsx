import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
import BookCategory from '../../components/BookCategory/BookCategory';
import { useCallback, useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';
import './MainPage.css';

const MainPage = () => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);
  const [query, setQuery] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [selectedSearchType, setSelectedSearchType] = useState('title');

  // useCallback to match useEffect
  // useCallback is used to memoize the fetchDataByTitle function.
  // useEffect depends on fetchDataByTitle. Without useCallback, fetchDataByTitle would be re-created on every render, leading to useEffect being triggered more often than necessary.
  const fetchData = useCallback(
    async (query, searchType) => {
      let url = `https://www.googleapis.com/books/v1/volumes?langRestrict=en&maxResults=10&startIndex=${startIndex}&key=AIzaSyAmb3QsxaJ7qcOG-i9UerqFnesBKqZkEYo`;
      if (searchType === 'author') {
        url += `&q=inauthor:${encodeURIComponent(query)}`;
      } else {
        url += `&q=${encodeURIComponent(query)}`;
      }

      try {
        const rawData = await fetch(url).then(res => res.json());
        const data = rawData.items;
        setBooksData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    },
    [startIndex]
  );

  useEffect(() => {
    if (query) {
      fetchData(query, selectedSearchType);
    }
  }, [startIndex, fetchData]);

  // ???? what should I do with this?
  const handleSearch = (query, searchFunction) => {
    if (query.trim() === '') {
      // If the query is empty, reset the data
      setBooksData(null);
      return;
    }
    searchFunction(query);
  };

  const handleDetailButton = bookId => {
    const bookData = booksData?.filter(book => book.id === bookId)[0];
    setBookData(bookData);
    console.log(bookData);
  };

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
    const bookInfo = bookData.volumeInfo;
    const data = {
      title: bookInfo.title,
      authors: bookInfo.authors,
      image: bookInfo.imageLinks.thumbnail,
      publishDate: bookInfo.publishDate,
      bookId: bookData.id,
      note: '',
    };
    await booksAPI.addToMyBooks(data);
    alert(`Add ${bookInfo.title} to MyBooks`);
  };

  const handleNextPage = () => {
    setStartIndex(prev => prev + 10);
    // if(startIndex>190) set condition ???
  };
  // console.log(startIndex);
  const handlePreviousPage = () => {
    setStartIndex(prev => prev - 10);
    // if(startIndex<=10) button disable or set alert condition??
  };

  return (
    <div>
      <BookSearch
        handleSearch={handleSearch}
        booksData={booksData}
        setBooksData={setBooksData}
        setFilteredBooksData={setFilteredBooksData}
        setStartIndex={setStartIndex}
        query={query}
        setQuery={setQuery}
        fetchData={fetchData}
        selectedSearchType={selectedSearchType}
        setSelectedSearchType={setSelectedSearchType}
      />
      <BookCategory onCategoryChange={handleCategoryChange} />
      <div style={{ display: 'inline-block' }}>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <span>1</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <div className='search-container'>
        {!booksData && <div>No result</div>}
        <div className="search-list-container">
          <BookList
            booksData={filteredBooksData || booksData}
            handleDetailButton={handleDetailButton}
          />
        </div>
        <div className='book-detail-container'>
          <BookDetail
            bookData={filteredBooksData || bookData}
            handleAddToMyBooksButton={handleAddToMyBooksButton}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
