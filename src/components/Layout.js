import React, { useState } from "react"
import Footer from "./Footer"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  const toggleHandler = () => {
    setShow(!show)
  }
  return (
    <>
      <Navbar toggleHandler={toggleHandler} show={show} />
      <MobileNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
