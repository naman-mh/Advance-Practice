import React from 'react'
import Header from './Components/ReactRouter/Header/Header'
import Footer from './Components/ReactRouter/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Route() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Route