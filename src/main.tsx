import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.js'
import Dashbord from './pages/dashbord'
import Faq from './pages/faq'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashbord',
        element: <Dashbord />
      },
      {
        path: '/faq',
        element: <Faq />
      }
    ]
  },

  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
