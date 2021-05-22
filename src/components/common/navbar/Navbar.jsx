import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Personal information</a>
      <a href="/about" className="navbar-item">Employment History</a>
      <a href="/portfolio" className="navbar-item">Education</a>
      <a href="/shop" className="navbar-item">Review page</a>
      
  </section>
  )

}

export default Navbar;