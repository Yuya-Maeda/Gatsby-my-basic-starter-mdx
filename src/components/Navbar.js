import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
const Navbar = ({ toggleHandler, show }) => {
  console.log(show)
  return (
    <nav class="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link className="nav-logo" to="/">
            logo
          </Link>
          <button type="button" className="btn nav-btn" onClick={toggleHandler}>
            <FaBars />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link">
            home
          </Link>
          <Link to="/" className="nav-link">
            home
          </Link>
          <Link to="/" className="nav-link">
            home
          </Link>
          <div className="nav-link contact-link">
            <Link to="/" className="btn">
              btn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
