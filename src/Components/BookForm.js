// src/components/BookForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState(null);
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            published_year: publishedYear ? publishedYear.toISOString().split('T')[0] : '',
            genre,
            description,
        };
        onSubmit(newBook);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setPublishedYear(null);
        setGenre('');
        setDescription('');
    };

    return (
        <Container style={{backgroundColor: '#F8E71C'}} className="my-4"> {/* Add Container here */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPublishedYear">
                    <Form.Label>Published Year</Form.Label>
                    <DatePicker
                        selected={publishedYear}
                        onChange={(date) => setPublishedYear(date)}
                        dateFormat="yyyy"
                        placeholderText="Select date"
                        className="form-control"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formGenre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        required
                    />
                </Form.Group>

                <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" type="submit" className="me-2">
                        Save
                    </Button>
                    <Button variant="danger" type="button" onClick={resetForm}>
                        Reset
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default BookForm;
