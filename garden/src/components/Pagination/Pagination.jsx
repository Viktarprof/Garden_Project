import React from 'react';
import s from './Pagination.module.css'
import Button from '../UI/Button/Button';

function Pagination({ totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <Button 
          key={pageNumber} 
          onClick={() => paginate(pageNumber)} 
          title={pageNumber} 
          styles={'btnPaginate'}/>
      ))}
    </div>
  );
}

export default Pagination;
