import React from 'react'
import Navbarsection from '../components/navigation/Navbarsection'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbarsection/>
      <div>
        <Outlet />
      </div>

      <Footer/>


    </div>
  )
}

export default Layout