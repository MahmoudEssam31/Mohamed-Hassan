import React, { use, useEffect, useRef } from 'react'
import Layout from './componant/view/layout/Layout'
import NavBar from './componant/view/navbar/NavBar'
import { RouterProvider } from 'react-router-dom'
import Routing from './router/Router'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function App() {
   useEffect(() => {
       Aos.init({
           duration: 1000, 
           once: true, 
       });
   }, []);
  const headerRef = useRef(null);
  return (
    <div>
      {/* <NavBar/> */}
    
      <RouterProvider router={Routing} />
    </div>
  )
}
