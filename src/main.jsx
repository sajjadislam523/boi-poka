import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import BookDetail from "./components/BookDetail/BookDetail.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "books/:bookId",
                element: <BookDetail />,
                loader: () => fetch("/booksData.json"), //this is bad practice to get data
            },
            {
                path: "listedBooks",
                element: <ListedBooks />,
                loader: () => fetch("/booksData.json"), //this is bad practice to get data
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </StrictMode>
);
