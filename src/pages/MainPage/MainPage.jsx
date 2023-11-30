import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
// import BookCategory from '../../components/BookCategory/BookCategory';
import { useCallback, useEffect, useState } from 'react';
import * as booksAPI from '../../utilities/books-api';
import './MainPage.css';
import BookPageController from '../../components/BookPageController/BookPageController';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const APIKey = import.meta.env.VITE_BOOK_API_KEY;


const MainPage = () => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);
  const [query, setQuery] = useState('');
  const [language,setLanguage]=useState('')
  const [category,setCategory]=useState('')
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSearchType, setSelectedSearchType] = useState('title');
  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');




  // useEffect(() => {
  //   // Initial fetch to get all books and categories
  //   const fetchAllBooks = async () => {
  //     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  //     const randomLetter = alphabet[Math. floor(Math. random() * alphabet. length)]; 
  //     console.log(randomLetter)
  //     const rawData = await fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${randomLetter}&langRestrict=en&maxResults=10&startIndex=${startIndex}&key=${APIKey}`
  //     ).then((res) => res.json());
  //     const data = rawData.items || [];
  //     setBooksData(data);
  //       console.log(data)
  //       };
  //       fetchAllBooks();
  //     }, [startIndex]);



  const languageCodes = {
    'English': 'en',
    'Korean': 'ko',
    'French': 'fr',
    'Italian': 'it',
    'Spanish': 'es',
    'German': 'de',
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
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  [startIndex] // Include other dependencies if necessary
);

  useEffect(() => {
    if (query) {
      fetchData(query, selectedSearchType,category,language);
    }
  }, [startIndex, fetchData]);
  

  useEffect(() => {
    // Define default parameters for initial fetch
    const defaultQuery = 'bestsellers';
    const defaultSearchType = 'title'; // or 'author', whichever you prefer
    const defaultCategory = 'All';
    const defaultLanguage = 'All';

    fetchData(defaultQuery, defaultSearchType, defaultCategory, defaultLanguage);
  }, [fetchData]);

  // ???? what should I do with this handleSearch function?
  // const handleSearch = (query, searchFunction) => {
  //   if (query.trim() === '') {
  //     // If the query is empty, reset the data
  //     setBooksData(null);
  //     return;
  //   }
  //   searchFunction(query);
  // };

  

  const handleDetailButton = bookId => {
    const bookData = booksData?.filter(book => book.id === bookId)[0];
    setBookData(bookData);
    console.log(bookData);
  };

  // const handleCategoryChange = category => {
  //   // Filter books based on the selected category
  //   if (category === '') {
  //     // If no category selected, show all books
  //     setFilteredBooksData(booksData);
  //     setBookData(null);
  //   } else {
  //     // Filter books based on the selected category
  //     const filteredData = booksData.filter(book => {
  //       return book.volumeInfo.categories?.includes(category);
  //     });
  //     setFilteredBooksData(filteredData);
  //     setBookData(null);
  //   }
  // };

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
  console.log(startIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setStartIndex(prev => prev - 10);
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div>
      <BookSearch
        // handleSearch={handleSearch}
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
        // handleCategoryChange={handleCategoryChange}
      />
      <div >
        {!booksData && <div>No result</div>}
        {/* <BookCategory onCategoryChange={handleCategoryChange} /> */}
        <br />
        {booksData && <BookPageController
           handlePreviousPage={handlePreviousPage}
           handleNextPage={handleNextPage}
           setStartIndex={setStartIndex}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           maxPages={maxPages}/>} 

        <Box xs={{ flexGrow: 1 }}>
          <Grid container columns={16}>
            <Grid item xs={2}>
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
                />
              </div>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid> 
        </Box>
      </div>
    </div>
  );
};

export default MainPage;


