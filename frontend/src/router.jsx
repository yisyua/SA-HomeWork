import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Success from "./pages/success";
import AdminHome from "./pages/adminhome";
import Add from "./pages/add";
import Revise from "./pages/revise";
import ReviseResult from "./pages/ReviseResult";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Delete from "./pages/delete";
import DeleteResult from "./pages/deleteresult";
import Jojo from "./pages/Jojo";
import Look from "./pages/Look";
import LookResult from "./pages/LookResult";
import New from "./pages/New";
import Result from "./pages/result";
import AdminAccount from "./pages/adminaccount";
import Edit from "./pages/edit";
import Account from "./pages/account";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/success", element: <Success /> },
    { path: "/adminhome", element: <AdminHome /> },
    { path: "/add", element: <Add /> },
    { path: "/revise", element: <Revise /> },
    { path: "/reviseresult", element: <ReviseResult /> },
    { path: "/search", element: <Search /> },
    { path: "/searchresult", element: <SearchResult /> },
    { path: "/delete", element: <Delete /> },
    { path: "/deleteresult", element: <DeleteResult /> },
    { path: "/jojo", element: <Jojo /> },
    { path: "/result", element: <Result /> },
    { path: "/new", element: <New /> },
    { path: "/look", element: <Look /> },
    { path: "/lookresult", element: <LookResult /> },
    { path: "/adminaccount", element: <AdminAccount /> },
    { path: "/account", element: <Account /> },
    { path: "/edit", element: <Edit /> },
]);
