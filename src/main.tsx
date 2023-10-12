import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.js'
import Faq from './pages/faq'
import Login from './pages/Login'
import RegisterUsers from './pages/RegisterUsers'
import Dashboard from './pages/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },

      {
        path: '/dashboard',
        element: <Dashboard />
      },

      {
        path: '/faq',
        element: <Faq />
      },

      {
        path: '/registerusers',
        element: <RegisterUsers />
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
