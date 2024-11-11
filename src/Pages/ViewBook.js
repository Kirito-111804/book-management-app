// src/Pages/ViewBook.js
import React from 'react';
import BookDetails from '../Components/BookDetails';
import Header from '../Components/Header';

function ViewBook({ book }) {
  return (
    <div>
      <Header />
      <h1>View Book</h1>
      <BookDetails book={book} />
    </div>
  );
}

export default ViewBook;
