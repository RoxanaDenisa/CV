import React from 'react';
import App from './App';
import Second from './Second';
import Review from './Review';

import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import './Third.css';
function Third () {
    const HomePage=()=>(
        <div className="App">
        <App />
      </div>
      
    );
    const Emp=()=>(
      <div className="App">
        <Second />
      </div>
    );
    const Edu=()=>(
        
        
        <section className="header">
        <section className="header-top">
            <section className="header-top__logo">
                <a href="/" className="header-logo">CV</a>
             </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
          <section className="navbar">
      
                <Link to='/'className="navbar-item">Personal information</Link>
                <Link to='/empl'className="navbar-item">Employment History</Link>
                <Link to='/educ' className="navbar-item">Education</Link>
                <Link to='/review' className="navbar-item">Review Page</Link>
                
  </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
        </section>
        
    );
    const Revi=()=>(
      <div className="App">
        <Review />
      </div>
    );
  return (
    <Router> 
    <div>
          <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/empl" exact component={Emp}/>
          <Route path="/educ" exact component={Edu}/>
          <Route path="/review" exact component={Revi}/>
          </Switch>
    </div>
    </Router>
  )
}

export default Third;