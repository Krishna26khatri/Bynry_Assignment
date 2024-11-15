import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
      <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-grow"> <Outlet/> </div>
      <Footer/>
      </div>
  )
}

export default Layout
