import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './controllers/Header/Header'
import Footer from './controllers/Footer/Footer'    
function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
