import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
// import Contact from '@/pages/dashbord'
import { Spinner } from '@/components/ui'
import Dashbord from '@/pages/dashboard'
import LoginComp from '@/components/Login/LoginComp'
import Login from '@/pages/Login'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     children: [
//       {
//         path: '/',
//         element: <Dashbord />
//       }
//     ]

//   }
// ])

// export default function Router() {
//   return (
//     <Suspense fallback={<Spinner />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   )
// }
