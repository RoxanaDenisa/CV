import React from 'react';
import App from './App';
import Third from './Third';
import Review from './Review';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import './Second.css';
function Second () {
    const HomePage=()=>(
        <div className="App">
          <App />
        </div>
      );
    const Emp=()=>(
        <div className="second">
          <section>
        <section className="header">
        <section className="header-top">
            <section className="header-top__logo">
                <a href="/" className="header-logo">CV</a>
             </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
          <section className="navbar">
      
                <Link to='/'><p className="navbar-item">Personal information</p></Link>
                <Link to='/empl'><p className="navbar-item">Employment History</p></Link>
                <Link to='/educ'><p className="navbar-item">Education</p></Link>
                <Link to='/review'><p className="navbar-item">Review Page</p></Link>
                
  </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
        </section>
    </section>
        </div>
      );
      const Edu=()=>(
        <div className="App">
          <Third />
        </div>
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
  );
}

export default Second;