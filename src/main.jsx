import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import MainSimred from './components/MainSimred';
import MainContactos from './components/MainContactos';
import MainEnlaces from './components/MainEnlaces';
import MainSedalp from './components/MainSedalp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/sedalp',
    element: <MainSedalp></MainSedalp>
  },
  {
    path: '/simred',
    element: <MainSimred></MainSimred>
  },
  {
    path: '/contactos',
    element: <MainContactos></MainContactos>
  },
  {
    path: '/enlaces',
    element: <MainEnlaces></MainEnlaces>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
