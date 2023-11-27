import BookSearch from '../../components/BookSearch/BookSearch';
import BookDetail from '../../components/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';
import BookCategory from '../../components/BookCategory/BookCategory';
import { useState } from 'react';
import * as booksAPI from '../../utilities/books-api';

const MainPage = () => {
  const [booksData, setBooksData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [filteredBooksData, setFilteredBooksData] = useState(null);

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

  const handleAddToMyBooksButton = async (bookId) => {
    const bookInfo = bookData.volumeInfo
    const book = await booksAPI.addToMyBooks({
      title: bookInfo.title,
      authors: bookInfo.authors,
      // image: bookInfo.imageLink.thumbnail,
      publishDate: bookInfo.publishDate,
      selfLink: bookInfo.selfLink,
      note: '',
    })
  }

  return (
    <div>
      <BookSearch
        fetchDataByTitle={fetchDataByTitle}
        fetchDataByAuthors={fetchDataByAuthors}
        booksData={booksData}
        setBooksData={setBooksData}
        setFilteredBooksData={setFilteredBooksData}
      />
      <div style={{ display: 'flex' }}>
        {!booksData && <div>No result</div>}
        <BookCategory onCategoryChange={handleCategoryChange} />
        <BookList booksData={filteredBooksData || booksData} handleDetailButton={handleDetailButton}/>
        <BookDetail bookData={filteredBooksData || bookData} handleAddToMyBooksButton={handleAddToMyBooksButton} />
      </div>
    </div>
  );
};

export default MainPage;
