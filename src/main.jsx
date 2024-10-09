import '@/index.css'
import Landing from '@/pages/Landing/index.jsx'
import Browse from '@/pages/Browse/index.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>    
  },
  {
    path: '/browse',
    element: <Browse/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
