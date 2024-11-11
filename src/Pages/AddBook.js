// src/Pages/AddBook.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../Components/BookForm';
import Header from '../Components/Header'; // Import the Header component
import { BsCaretLeftFill } from "react-icons/bs";

function AddBook({ onAdd }) {
  const navigate = useNavigate();

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <h1>Add Book</h1>
      <BsCaretLeftFill style={{ fontSize: '3rem',marginLeft: '40px', variant:"dark"}}  className='mb-3' onClick={() => navigate(-1)} />
      

      <BookForm onSubmit={onAdd} />
    </div>
  );
}

export default AddBook;
