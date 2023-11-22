import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About.jsx';
import Contact from './Component/Contact.jsx';
import Header from './Component/Header.jsx';
import Home from './Component/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div className='text-5xl text-center m-5 font-bold '><h1>Hello world!</h1></div>,
//   },
//   {
//     path: "/about",
//     element:<About></About>
//   },
//   {
//     path: "/contact",
//     element:<Contact></Contact>
//   },
// ]);

const router =createBrowserRouter([
{
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path: 'about',
      element:<About></About>

    },
    {
      path: 'contact',
      element:<Contact></Contact>

    }
  ]
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
    
 
   <RouterProvider router={router} />
  </React.StrictMode>,
)
