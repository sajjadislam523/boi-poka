import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="p-4 shadow-xl card bg-base-100 w-96">
                <figure className="bg-[#F3F3F3] py-4 rounded-xl">
                    <img src={image} className="h-[166px]" alt={bookName} />
                </figure>
                <div className="space-y-4 card-body">
                    <div className="justify-start card-actions">
                        {tags.map((tag, idx) => (
                            <div
                                key={idx}
                                className="badge bg-[#23BE0A0D] px-3 py-3 text-[#23BE0A] font-work-sans font-medium"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold card-title font-playfair">
                        {bookName}
                    </h2>
                    <p className="font-work-sans text-[#131313CC]">
                        By: {author}
                    </p>
                    <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-[#131313CC] font-work-sans font-medium">
                            {category}
                        </p>
                        <p className="flex-grow-0">{rating}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
