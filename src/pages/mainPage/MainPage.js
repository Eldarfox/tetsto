import React, { useState } from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import BookList from "../../components/bookList/BookList";
import classes from "./MainPage.module.css";


const MainPage = () => {
    const Books = [
        { id: 1, title: 'Берсерк' },
        { id: 2, title: 'Гарри Поттер' },
    ];
    const [books, setBooks] = useState(Books);
    const [inputValue, setInputValue] = useState('');
    const handleAddBook = () => {
            setBooks(prev=>[...books, {
                id: books.length>0 ?  books[books.length-1].id+1 : 1,
                title: inputValue,
            }]);
            setInputValue('');
    };
    const handleDeleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    };

    return (
        <div className={classes.all}>
            <h1>Добавить книгу</h1>
            <div className={classes.add}>
            <h2 className={classes.h2}>Название:</h2>
            <Input
                placeholder="Введите название"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button className={classes.btn} text="Добавить" action={handleAddBook} />
            </div>
            <div className={classes.booklist}>
            <h3>Название</h3>
            <BookList books={books} onDelete={handleDeleteBook} />
            </div>
        </div>
    );
};

export default MainPage;