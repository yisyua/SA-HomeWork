import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Success from "./pages/Success";
import AdminHome from "./pages/adminhome";
import Add from "./pages/Add";
import Revise from "./pages/Revise";
import ReviseResult from "./pages/ReviseResult";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Delete from "./pages/Delete";
import DeleteResult from "./pages/DeleteResult";
import Jojo from "./pages/Jojo";
import Result from "./pages/Result";

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
]);