import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();

    const data = useLoaderData();

    const books = data.find((book) => book.bookId === bookId);
    console.log(books);

    return (
        <div>
            <h1>Book detail</h1>
        </div>
    );
};

export default BookDetail;
