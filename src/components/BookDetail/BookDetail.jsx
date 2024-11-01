import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
    addToStoredReadList,
    addToStoredWishList,
} from "../../Utility/AddToDb";

const BookDetail = () => {
    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find((book) => book.bookId === id);

    const {
        bookId: currentBookId,
        bookName,
        author,
        review,
        category,
        image,
        totalPages,
        rating,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. Understand what to store or save => bookId
         * 2. Where to store: database
         * 3. Array list or collection => bookId
         * 4. Validation check => If the book is already in the reading list.
         * 5.
         */
        addToStoredReadList(id);
    };
    const handleWishList = (id) => {
        addToStoredWishList(id);
    };

    return (
        <div className="flex flex-col items-center max-h-screen gap-4 p-4 mb-8 lg:flex-row">
            <div className="w-full md:w-1/2">
                <img
                    className="w-full h-auto max-h-[400px] lg:max-h-[765px] rounded-xl"
                    src={image}
                    alt={bookName}
                />
            </div>
            <div className="w-full space-y-4 lg:w-1/2">
                <p className="text-2xl font-bold lg:text-4xl font-playfair">
                    {bookName}
                </p>
                <p className="text-lg font-medium lg:text-xl font-work-sans">
                    By: {author}
                </p>
                <div className="border-t border-[#13131326]"></div>
                <p className="text-lg font-medium lg:text-xl font-work-sans">
                    {category}
                </p>
                <div className="border-t border-[#13131326]"></div>
                <p className="font-work-sans">
                    <span className="font-bold text-[#131313]">Review :</span>{" "}
                    <span className="text-[#131313B3]">{review}</span>
                </p>
                <div className="flex flex-wrap gap-2 py-4">
                    <p className="font-work-sans font-bold text-[#131313]">
                        Tag
                    </p>
                    {tags.map((tag, idx) => (
                        <div
                            key={idx}
                            className="badge bg-[#23BE0A0D] px-3 py-2 text-[#23BE0A] font-work-sans font-medium"
                        >
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className="border-t py-4 border-[#13131326]"></div>
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-2 font-work-sans">
                        <p className="text-[#131313B3]">Number of pages:</p>
                        <p className="text-[#131313B3]">Publisher:</p>
                        <p className="text-[#131313B3]">Year of Publishing:</p>
                        <p className="text-[#131313B3]">Rating:</p>
                    </div>
                    <div className="flex flex-col gap-2 font-work-sans">
                        <p className="font-semibold text-[#131313]">
                            {totalPages}
                        </p>
                        <p className="font-semibold text-[#131313]">
                            {publisher}
                        </p>
                        <p className="font-semibold text-[#131313]">
                            {yearOfPublishing}
                        </p>
                        <p className="font-semibold text-[#131313]">{rating}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => handleMarkAsRead(bookId)}
                        className="w-full px-4 py-2 text-lg font-semibold border rounded-lg lg:w-auto font-work-sans"
                    >
                        Read
                    </button>
                    <button
                        onClick={() => handleWishList(bookId)}
                        className="px-4 py-2 w-full lg:w-auto text-lg font-semibold border rounded-lg font-work-sans bg-[#50B1C9] text-white hover:text-[#50B1C9] hover:border border-[#50B1C9] transition-all ease-in-out duration-200 hover:bg-transparent"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
