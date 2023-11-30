import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
import { useCallback, useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';
import './MainPage.css';
import BookPageController from '../../components/BookPageController/BookPageController';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const APIKey = import.meta.env.VITE_BOOK_API_KEY;

const MainPage = ({ user }) => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSearchType, setSelectedSearchType] = useState('title');
  const [googleBookIds, setGoogleBookIds] = useState(null);

  const languageCodes = {
    English: 'en',
    Korean: 'ko',
    French: 'fr',
    Italian: 'it',
    Spanish: 'es',
    German: 'de',  // Corrected code for German
  };
  
  // useCallback to match useEffect
  // useCallback is used to memoize the fetchData function.
  // useEffect depends on fetchData. Without useCallback, fetchData would be re-created on every render, leading to useEffect being triggered more often than necessary.
  const fetchData = useCallback(
    async (query, searchType, category, language) => {
      let url = `https://www.googleapis.com/books/v1/volumes?maxResults=10&startIndex=${startIndex}&key=${APIKey}`;
      if (searchType === 'author') {
        // encodeURIComponent is used to encode a part of a URL, typically the query string, to ensure that it is properly formatted and does not contain any characters that could break the URL.
        url += `&q=inauthor:${encodeURIComponent(query)}`;
      } else {
        url += `&q=${encodeURIComponent(query)}`;
      }

      if (category && category !== 'All') {
        url += `+subject:${encodeURIComponent(category)}`;
      }

      if (language && language !== 'All') {
        const languageCode = languageCodes[language];
        url += `&langRestrict=${encodeURIComponent(languageCode)}`;
      }

      try {
        const rawData = await fetch(url).then(res => res.json());
        const data = rawData.items || []; // Handle no results
        setBooksData(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [startIndex] // Include other dependencies if necessary
  );

  useEffect(() => {
    if (query) {
      fetchData(query, selectedSearchType, category, language);
    }
  }, [startIndex, fetchData]);

  useEffect(() => {
    // Define default parameters for initial fetch
    const defaultQuery = 'bestsellers';
    const defaultSearchType = 'title'; // or 'author', whichever you prefer
    const defaultCategory = 'All';
    const defaultLanguage = 'All';

    fetchData(
      defaultQuery,
      defaultSearchType,
      defaultCategory,
      defaultLanguage
    );
  }, [fetchData]);

  const handleDetailButton = async bookId => {
    const bookData = booksData?.filter(book => book.id === bookId)[0];
    if(user) {
      const bookIds = await booksAPI.getIds();
      setGoogleBookIds(bookIds);
    }
    setBookData(bookData);
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

  const maxPages = 10;

  const handleNextPage = () => {
    if (currentPage < maxPages) {
      setStartIndex(prev => prev + 10);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setStartIndex(prev => prev - 10);
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div>
      <BookSearch
        booksData={booksData}
        setBooksData={setBooksData}
        setFilteredBooksData={setFilteredBooksData}
        setStartIndex={setStartIndex}
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        language={language}
        setLanguage={setLanguage}
        fetchData={fetchData}
        selectedSearchType={selectedSearchType}
        setSelectedSearchType={setSelectedSearchType}
        setCurrentPage={setCurrentPage}
      />
      <div>
        {!booksData && <div>No result</div>}
        <br />
        {booksData && (
          <BookPageController
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            setStartIndex={setStartIndex}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPages={maxPages}
          />
        )}

<div style={{ padding: "0 5rem" }}>
        <Box xs={{ flexGrow: 1 }}>
          <Grid container columns={16}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={7}>
              <div className="search-list-container">
                <BookList
                  booksData={filteredBooksData || booksData}
                  handleDetailButton={handleDetailButton}
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="book-detail-container">
                <BookDetail
                  bookData={filteredBooksData || bookData}
                  handleAddToMyBooksButton={handleAddToMyBooksButton}
                  googleBookIds={googleBookIds}
                  user={user}
                />
              </div>
            </Grid>
            {/* <Grid item xs></Grid> */}
          </Grid>
        </Box>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
