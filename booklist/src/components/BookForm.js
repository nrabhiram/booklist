import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ book, setBook] = useState({ title: '', author: ''});
    const handleChange = (e) => {
        setBook({...book, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_BOOK', book: {title: book.title, author: book.author } })
        console.log(book);
        setBook({title: '', author: ''})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="title" value={book.title} placeholder="book title" onChange={handleChange} required />
            <input type="text" id="author" value={book.author} placeholder="author" onChange={handleChange} required />
            <input type="submit" value="add book" />
        </form>
    );
}
 
export default BookForm;