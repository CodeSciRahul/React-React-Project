import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoloader } from './components/Github/Github.jsx'
 
//here there is two methord to use import all componenets in the main.jsx both method are mention below.


// const router=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:'Contact',
//         element: <Contact/>
//       },
//       {
//         path: 'user/:userid',
//         element: <User/>

//       },
//       {
//         path:'Github',
//         element: <Github/>
//       }  
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element= {<About/> }></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='User' element={<User/>}></Route>
      <Route 
      loader={githubinfoloader}
      path='Github' 
      element={<Github/>}>

      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
