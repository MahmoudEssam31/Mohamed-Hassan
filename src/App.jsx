import React from 'react'
import Layout from './componant/view/layout/Layout'
import NavBar from './componant/view/navbar/NavBar'
import { RouterProvider } from 'react-router-dom'
import Routing from './router/Router'

export default function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <RouterProvider router={Routing} />
    </div>
  )
}
