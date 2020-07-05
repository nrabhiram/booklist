import React, { createContext, useEffect, useReducer } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const storedBooks = localStorage.getItem('books');
        return storedBooks ? JSON.parse(storedBooks) : []
    })
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;