import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Error , Home , About , Contact , Blog , Pricing , Teachers , Grid1 , Grid2,Grid3,SingleBlog } from './pages/export'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:< Error />,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/course1',
        element: <Grid1 />,
      },      {
        path:'/course2',
        element: <Grid2 />,
      },      {
        path:'/course3',
        element: <Grid3 />,
      },
      {
        path:'/blog',
        element:<Blog />,
      },      
      {
        path:'/singleBlog',
        element:<SingleBlog />,
      },
      {
        path:'/teachers',
        element:<Teachers />,
      },
      {
        path:'/pricing',
        element:<Pricing />,
      },
      {
        path:'/contact',
        element:<Contact />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={ router} />
    <GlobalStyle />
  </React.StrictMode>,
)
