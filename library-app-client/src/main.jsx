import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './views/Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import Bookstore from './views/Book/Bookstore.jsx'
import { Provider } from 'jotai'
import Login from './views/User/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/books",
    element: <Bookstore />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />  
    </Provider>
  </React.StrictMode>
)
