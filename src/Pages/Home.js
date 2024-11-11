// src/Pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BookList from '../Components/BookList';
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap
import Header from '../Components/Header'; // Import the Header component

function Home({ books, onView, onEdit, onDelete }) {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleAddBook = () => {
        navigate('/add'); // Navigate to the Add Book page
    };

    return (
        <div>
            <Header /> {/* Include the Header component */}
            <h1>Home</h1>
            <Button style= {{ marginLeft: '40px'  }} variant="primary" onClick={handleAddBook} className="mb-3">
                Add Book
            </Button>
            <BookList books={books} onView={onView} onEdit={onEdit} onDelete={onDelete} />
        </div>
    );
}

export default Home;