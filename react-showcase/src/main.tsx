import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './components/about.tsx'
import List from './components/list.tsx'
import Home from './components/home.tsx'
import HOC from './components/hoc.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/list',
        Component: List
      },
      {
        path: '/hoc',
        Component: HOC
      }
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
