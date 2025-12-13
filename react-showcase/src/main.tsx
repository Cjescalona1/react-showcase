import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './components/about.tsx'
import List from './components/list.tsx'
import Home from './components/home.tsx'
import HOC from './components/hoc.tsx'
import Memo from './components/memo.tsx'
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/list',
        Component: List
      },
      {
        path: '/hoc',
        Component: HOC
      },
      {
        path: '/memo',
        Component: Memo
      },
      {
        path: "*",
        element: <>Page not found 404 <br /> <Link to={"/"}>go back home</Link>  </>,
      },
    ]

  },
  {
    path: '/about',
    Component: About,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
