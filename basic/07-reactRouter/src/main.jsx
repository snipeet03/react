import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'; // Import RouterProvider
import { createBrowserRouter } from 'react-router';
import Layout from './Layout.jsx';
import User from './components/User/User.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github from './components/GitHub/Github.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path:"/", 
        element : <Home/>
      }, 
      {
        path : "about",
        element : <About/>
      }, 
      {
        path : "contact", 
        element : <Contact/>
      }, 
      {
        path : "user/:userid", 
        element : <User/>
      }, 
      {
        path : "github",
        element : <Github/> 
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


