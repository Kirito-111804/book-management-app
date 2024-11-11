// src/components/BookDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCaretLeftFill } from "react-icons/bs";

function BookDetails({ book }) {
  const navigate = useNavigate();

  if (!book) {
    return (
      <p style={{ fontSize: '1.25rem', textAlign: 'center' }} className="text-muted">
        No book selected
      </p>
    );
  }

  return (
    <div>
      <BsCaretLeftFill 
        style={{ fontSize: '3rem', marginLeft: '40px' }}
        className='mb-3' 
        onClick={() => navigate(-1)}
      />
  
      <div 
        className="container mt-4" 
        style={{ 
          backgroundColor: '#F8E71C', 
          padding: '2rem', // Increase padding
          maxWidth: '800px' // Increase width of container
        }}
      >
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{book.title}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Author:</strong> {book.author}</li>
              <li className="list-group-item"><strong>Published Year:</strong> {book.published_year}</li>
              <li className="list-group-item"><strong>Genre:</strong> {book.genre}</li>
              <li className="list-group-item"><strong>Description:</strong> {book.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;