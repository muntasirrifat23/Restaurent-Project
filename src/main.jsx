import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Main from './Main/Main.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Menu from './Pages/Menu/Menu.jsx';
import OrderFood from './Pages/OrderFood/OrderFood.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import Register from './Pages/Register/Register.jsx';
import PrivateRoute from './Auth/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<PrivateRoute> <Menu></Menu> </PrivateRoute>
      },
      {
        path:'order',
        element:<OrderFood></OrderFood>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router} />
    </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
