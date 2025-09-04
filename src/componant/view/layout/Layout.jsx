import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../ui/scrolToTop/ScrollToTop';

export default function Layout() {
  return (
      <div>
          <NavBar />
          <Outlet />
          <Footer />
          <ScrollToTop/>
      </div>
  );
}
