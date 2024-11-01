import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/AddToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

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
    return (
        <div>
            <h1>Books</h1>
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
