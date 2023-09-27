import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
// import Contact from '@/pages/dashbord'
import { Spinner } from '@/components/ui'
import Dashbord from '@/pages/dashbord'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashbord',
    element: <Dashbord />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
