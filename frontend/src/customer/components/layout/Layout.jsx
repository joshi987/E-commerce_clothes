import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../Navigation'
import Footer from '../footer/Footer'
function Layout() {
  return (
    <div>
    <Navigation/>
    <Outlet/>
    <div className="footer">
    <Footer/>
    </div>

    </div>
  )
}

export default Layout