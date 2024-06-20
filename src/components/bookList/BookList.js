import React from 'react';
import Button from "../button/Button";
import classes from "./BookList.module.css";

const BookList = ({ books, onDelete }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    {book.title}{' '}
                    <Button className={classes.bookbtn} action={() => onDelete(book.id)} text={"Удалить"}/>
                </li>
            ))}
        </ul>
    );
};

export default BookList;