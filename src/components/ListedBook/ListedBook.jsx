import React from "react";

const ListedBook = ({ book }) => {
    const {
        bookId,
        image,
        bookName,
        author,
        category,
        rating,
        tags,
        yearOfPublishing,
        totalPages,
        publisher,
    } = book;
    return (
        <div className="flex flex-col gap-8 p-4 border md:flex-row rounded-xl">
            <div>
                <img className="w-32" src={image} alt={bookName} />
            </div>
            <div className="space-y-4 ">
                <h1>{bookName}</h1>
                <p>By: {author}</p>
                <div className="flex flex-col gap-2 md:items-center md:flex-row">
                    <div className="flex items-center gap-2">
                        <p className="text-[#131313CC] font-work-sans font-bold">
                            Tag:
                        </p>
                        <div className="space-x-2">
                            {tags.map((tag) => (
                                <div
                                    key={bookId}
                                    className="badge bg-[#23BE0A0D] px-3 py-3 text-[#23BE0A] font-work-sans font-medium"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/fluency-systems-regular/30/marker--v1.png"
                            alt="marker--v1"
                        />
                        <p className="text-[#131313CC] font-work-sans">
                            <span>Year of publishing: </span>
                            <span> {yearOfPublishing}</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <span>
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/parakeet-line/48/user-group-man-man.png"
                                alt="user-group-man-man"
                            />
                        </span>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/forma-bold/24/file.png"
                                alt="file"
                            />
                        </span>
                        <span> Page: {totalPages}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <p>Category: {category}</p>
                    </div>
                    <div>
                        <p>Rating: {rating}</p>
                    </div>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
