import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import tachyons from 'tachyons';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {LoginModal} from './components/Login/Login';



/* need to learn how to properly navigate SPA with redux, react, router, Links, etc */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginModal />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

