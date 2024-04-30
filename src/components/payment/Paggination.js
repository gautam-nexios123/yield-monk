import React from 'react'

const Paggination = ({ currentPage, maxRows, totalRows, onPageChange }) => {

    const totalPages = Math.ceil(totalRows / maxRows);

  // Handle click on page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Render pagination buttons
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };
  return (
    <div className="pagination-container">
      <nav>
        <ul className="pagination">
          <li onClick={() => handlePageChange(currentPage - 1)}>&lt;</li>
          {renderPagination()}
          <li onClick={() => handlePageChange(currentPage + 1)}>&gt;</li>
        </ul>
      </nav>
    </div>
  )
}

export default Paggination
