import React from 'react';
import { BrowserRouter as Link } from "react-router-dom" ;


function Navigare () {
 
  
  return (
    <section className="navbar">
      
      <Link to='/'><button>Personal information</button></Link>
      <Link to='/second'><button>Employment History</button></Link>
      <a href="/portfolio" className="navbar-item">Education</a>
      <a href="/shop" className="navbar-item">Review page</a>
      
  </section>
  )

}

export default Navigare;