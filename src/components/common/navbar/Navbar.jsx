import React from 'react';
import { BrowserRouter as Link } from "react-router-dom" ;
import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Personal information</a>
      <Link to='/../../employment'>Employment History</Link>
      <a href="/portfolio" className="navbar-item">Education</a>
      <a href="/shop" className="navbar-item">Review page</a>
      
  </section>
  )

}

export default Navbar;