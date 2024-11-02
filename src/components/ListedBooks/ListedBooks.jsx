import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/AddToDb";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState("");

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id) => parseInt(id));
        const readBookList = allBooks.filter((book) =>
            storedReadListInt.includes(book.bookId)
        );
        setReadList(readBookList);
    }, [allBooks]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map((id) => parseInt(id));
        const wishListBook = allBooks.filter((book) =>
            storedWishListInt.includes(book.bookId)
        );
        setWishList(wishListBook);
    }, [allBooks]);

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
        <div className="w-full px-4 py-8">
            <h1 className="text-3xl font-bold text-center font-work-sans bg-[#1313130D] py-4 mb-8 rounded-xl">
                Books
            </h1>
            <div className="mx-auto mb-4 dropdown dropdown-end">
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
                    <li onClick={() => handleSort("No. of Pages")}>
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
                    <div className="flex flex-col gap-4">
                        {readList.map((book) => (
                            <ListedBook key={book.bookId} book={book} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {wishList.map((book) => (
                            <ListedBook key={book.bookId} book={book} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
