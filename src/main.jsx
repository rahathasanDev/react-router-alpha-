import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1>Hello world!</h1></div>,
  },
  {
    path: "/about",
    element:<div><h1>This is about page</h1></div> 
  },
  {
    path: "/contact",
    element:<div><h2>This is contact page</h2></div> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
