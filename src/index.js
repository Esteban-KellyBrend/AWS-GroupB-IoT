import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard';
import Home from './Home';
import SignUp from './pages/SignUp';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "About",
    element:  <About />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
