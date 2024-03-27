import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ViewBook from './components/ViewBook/ViewBook';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
     {
      path:"/viewBook/:bookId",
      element: <ViewBook></ViewBook>,
      loader:()=>fetch('../books.json'),
     },{
      path:"/listed",
      element:<ListedBooks></ListedBooks>,
      loader:()=>fetch('../books.json'),
     },
     {
      path:"/pages",
      element:<PagesToRead></PagesToRead>,
      loader:()=>fetch('../books.json'),
     },
     {
      path:"/about",
      element:<AboutUs></AboutUs>
     }
    ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
