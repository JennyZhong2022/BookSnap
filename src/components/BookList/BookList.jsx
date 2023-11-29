import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';




const bookList = ({ booksData, handleDetailButton, handlePreviousPage, handleNextPage, currentPage,setCurrentPage,maxPages,setStartIndex }) => {
  
  const handleCurrentPageChange = (e) => {
    const newPage = Number(e.target.value);
    console.log(newPage); 
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * 10);
  };

  return (
    <div style={{margin:'100px'}}>
<div>
        {booksData &&
          <div>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}>
        Previous Page
      </button>
      <select value={currentPage} onChange={handleCurrentPageChange}>
      {Array.from({ length: maxPages }, (_, i) => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
      ))}
    </select>
      <button
        onClick={handleNextPage}
        disabled={currentPage === maxPages}>
        Next Page
            </button>
          </div>
        }
      </div>

      <ul>
      {booksData?.map((bookData) => (
        <div key={bookData.id} className='search-item'>
            <BookListItem 
              bookData={bookData} 
            handleDetailButton={handleDetailButton}
            />
        </div>
      ))}


      </ul>

      <div>
        {booksData &&
          <div>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}>
        Previous Page
      </button>
      <select value={currentPage} onChange={handleCurrentPageChange}>
      {Array.from({ length: maxPages }, (_, i) => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
      ))}
    </select>
      <button
        onClick={handleNextPage}
        disabled={currentPage === maxPages}>
        Next Page
            </button>
          </div>
        }
      </div>
      

      
      
    </div>
  )
};

export default bookList;
