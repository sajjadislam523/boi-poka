import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("./booksData.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mb-8 mt-28">
            <h1 className="text-4xl font-bold font-playfair text-[#131313]">
                Books
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                    <Book key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
