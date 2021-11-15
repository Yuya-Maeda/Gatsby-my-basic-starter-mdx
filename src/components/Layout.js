import React from "react"
import Footer from "./Footer"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
