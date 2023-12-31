import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Error from './pages/error/error.tsx'
import Games from './pages/games/games.tsx'
import Game from './pages/game/game.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient.ts'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'games',
        element: <Games/>
      },
      {
        path:'games/*',
        element: <Game/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
