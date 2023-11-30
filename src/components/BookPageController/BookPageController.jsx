const BookPageController = ({handlePreviousPage,
  handleNextPage,
  currentPage,
  setCurrentPage,
  maxPages,
  setStartIndex,
}) => {

  // console.log('Current Page:', currentPage, 'Max Pages:', maxPages);

  const handleCurrentPageChange = e => {
    const newPage = Number(e.target.value);
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * 10);
  };
  
  return (
    <div>
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous Page
    </button>
    <select value={currentPage} onChange={handleCurrentPageChange}>
      {Array.from({ length: maxPages }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
    <button
      onClick={handleNextPage}
      disabled={currentPage === maxPages}
    >
      Next Page
    </button>
  </div>
  )
}

export default BookPageController