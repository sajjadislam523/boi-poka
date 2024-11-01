import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/AddToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState("");

    // We're trying this to get the logic of the system
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id) => parseInt(id));

        const readBookList = allBooks.filter((book) =>
            storedReadListInt.includes(book.bookId)
        );
        setReadList(readBookList);
    }, []);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map((id) => parseInt(id));
        const wishListBook = allBooks.filter((book) =>
            storedWishListInt.includes(book.bookId)
        );
        setWishList(wishListBook);
    }, []);

    const handleSort = (sortType) => {
        setSort(sortType);

        if (sortType === "No. of Pages") {
            const sortedReadList = [...readList].sort(
                (a, b) => a.totalPages - b.totalPages
            );
            setReadList(sortedReadList);
        }

        if (sortType === "Ratings") {
            const sortedReadList = [...readList].sort(
                (a, b) => a.rating - b.rating
            );
            setReadList(sortedReadList);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Books</h1>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1 btn">
                    {sort ? `Sort by: ${sort}` : "Sort By"}
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                    <li onClick={() => handleSort("Ratings")}>
                        <a>Ratings</a>
                    </li>
                    <li onClick={() => handleSort("Pages")}>
                        <a>No. of Pages</a>
                    </li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {readList.map((book) => (
                        <Book key={book.bookId} book={book} />
                    ))}
                </TabPanel>
                <TabPanel>
                    {wishList.map((book) => (
                        <Book key={book.bookId} book={book} />
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
