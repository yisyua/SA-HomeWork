import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import Success from './routes/Success.jsx';
import AdminHome from './routes/AdminHome.jsx';
import Add from './routes/Add.jsx';
import Revise from './routes/Revise.jsx';
import ReviseResult from './routes/ReviseResult.jsx';
import SearchResult from './routes/SearchResult.jsx';
import Delete from './routes/Delete.jsx';
import DeleteResult from './routes/DeleteResult.jsx';
import Jojo from './routes/Jojo.jsx';
import Result from './routes/result.jsx';

import './index.css';
import Search from './routes/search.jsx';
import Login from './routes/login.jsx';

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login />},
    { path: "/success", element: <Success /> },
    { path: "/adminhome", element: <AdminHome />},
    { path: "/add", element: <Add />},
    { path: "/revise", element: <Revise />},
    { path: "/reviseresult", element: <ReviseResult />},
    { path: "/search", element: <Search />},
    { path: "/searchresult", element: <SearchResult />},
    { path: "/delete", element: <Delete />},
    { path: "/deleteresult", element: <DeleteResult />},
    { path: "/jojo", element: <Jojo />},
    { path: "/result", element: <Result />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
