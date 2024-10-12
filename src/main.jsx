import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Root from '@routes/Root'
import Home from '@pages/Home'
import Baca from '@pages/Baca'
import BacaSurah from '@pages/BacaSurah'
import Tentang from '@pages/Tentang'
import { chaptersLoader, versesLoader } from '@routes/loaders'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'baca',
                element: <Baca />,
                loader: chaptersLoader
            },
            {
                path: 'baca/surah/:surah',
                element: <BacaSurah />,
                loader: versesLoader
            },
            {
                path: 'tentang',
                element: <Tentang />
            },
            {
                path: '/',
                element: <Navigate to='home' />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/home' />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
)
