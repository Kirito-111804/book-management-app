import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; // Optional: For better layout


function BookList({ books, onView, onEdit, onDelete }) {
  return (
    <Container>
      <h2 className="my-4">Book List</h2> {/* Added margin for spacing */}
      <ListGroup>
        {books.map(book => (
          <ListGroup.Item key={book.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{book.title}</strong> - {book.author}
            </div>
            <div>
              <Button variant="primary" size="sm" onClick={() => onView(book.id)}>View</Button>{' '}
              <Button variant="secondary" size="sm" onClick={() => onEdit(book.id)}>Edit</Button>{' '}
              <Button variant="danger" size="sm" onClick={() => onDelete(book.id)}>Delete</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default BookList;