import React from 'react';
import BookForm from '../Components/BookForm';
import Header from '../Components/Header';

function EditBook({ book, onEdit }) {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <h1>Edit Book</h1>
      <BookForm initialData={book} onSubmit={onEdit} />
    </div>
  );
}

export default EditBook;
