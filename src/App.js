import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Home from './Pages/Home';
import AddBook from './Pages/AddBook';
import EditBook from './Pages/EditBook';
import ViewBook from './Pages/ViewBook';

function App() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const navigate = useNavigate();

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    navigate('/');
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === currentBook.id ? updatedBook : book)));
    navigate('/');
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const viewBook = (id) => {
    setCurrentBook(books.find(book => book.id === id));
    navigate(`/view/${id}`);
  };

  return (
    <div className="app-background">
      <Routes>
        <Route path="/" element={<Home books={books} onView={viewBook} onEdit={editBook} onDelete={deleteBook} />} />
        <Route path="/add" element={<AddBook onAdd={addBook} />} />
        <Route path="/edit/:id" element={<EditBook book={currentBook} onEdit={editBook} />} />
        <Route path="/view/:id" element={<ViewBook book={currentBook} />} />
      </Routes>
    </div>
  );
}

export default App;
