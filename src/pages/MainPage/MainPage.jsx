import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
import BookCategory from '../../components/BookCategory/BookCategory';
import { useCallback, useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';
import './MainPage.css';

const APIKey = import.meta.env.VITE_BOOK_API_KEY;

// const APIKey ='AIzaSyAmb3QsxaJ7qcOG-i9UerqFnesBKqZkEYo';

const MainPage = () => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedSearchType, setSelectedSearchType] = useState('title');
  const [isNewSearch, setIsNewSearch] = useState(false);

  // Initial fetch to get all books and categories
  useEffect(() => {
    const fetchAllBooks = async () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomLetter =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(randomLetter);
      const rawData = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${randomLetter}&langRestrict=en&maxResults=40&key=${APIKey}`
      ).then(res => res.json());
      const data = rawData.items || [];
      setBooksData(data);
      console.log(data);
    };
    fetchAllBooks();
  }, []);

  // useCallback to match useEffect
  // useCallback is used to memoize the fetchData function.
  // useEffect depends on fetchData. Without useCallback, fetchData would be re-created on every render, leading to useEffect being triggered more often than necessary.
  const fetchData = useCallback(async (query, searchType) => {
    let url = `https://www.googleapis.com/books/v1/volumes?langRestrict=en&maxResults=40&key=${APIKey}`;
    if (searchType === 'author') {
      // encodeURIComponent is used to encode a part of a URL, typically the query string, to ensure that it is properly formatted and does not contain any characters that could break the URL.
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
    }
  }, []);

  useEffect(() => {
    if (query) {
      fetchData(query, selectedSearchType);
      console.log('Query', query);
    }
  }, [fetchData]);

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
      console.log(filteredData);
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
      description: bookInfo.description,
      bookId: bookData.id,
      note: '',
    };
    await booksAPI.addToMyBooks(data);
    alert(`Add ${bookInfo.title} to MyBooks`);
  };

  return (
    <div>
      <BookSearch
        booksData={booksData}
        setBooksData={setBooksData}
        setFilteredBooksData={setFilteredBooksData}
        query={query}
        setQuery={setQuery}
        fetchData={fetchData}
        selectedSearchType={selectedSearchType}
        setSelectedSearchType={setSelectedSearchType}
        handleCategoryChange={handleCategoryChange}
        setIsNewSearch={setIsNewSearch}
        isNewSearch={isNewSearch}
      />
      <div style={{ display: 'flex' }}>
        {!booksData && <div>No result</div>}
        <BookCategory
          onCategoryChange={handleCategoryChange}
          setIsNewSearch={setIsNewSearch}
          isNewSearch={isNewSearch}
        />
        <div className="search-list-container">
          <BookList
            booksData={filteredBooksData || booksData}
            handleDetailButton={handleDetailButton}
          />
        </div>
        <div className="book-detail-container">
          <BookDetail
            bookData={bookData}
            handleAddToMyBooksButton={handleAddToMyBooksButton}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
