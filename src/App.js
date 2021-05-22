import React from 'react';
import Second from './Second';

import Third from './Third';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import './App.css';

function App() {
  const HomePage=()=>(
      <section className="header">
        <section className="header-top">
            <section className="header-top__logo">
                <a href="/" className="header-logo">CV</a>
             </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
          <section className="navbar">
      
                <Link to='/'className="navbar-item">Personal information</Link>
                <Link to='/empl' className="navbar-item">Employment History</Link>
                <Link to='/educ' className="navbar-item">Education</Link>
                <Link to='/review' className="navbar-item">Review Page</Link>
                
  </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      
      <section className="page">
          <section className="page-top">

            <section className="page-top_image">
                 <img className="img" src="/images/eu.jpg" width="200" height="300"/>
            </section>

            <section className="page-top__profile">
             <h1 className="tip">ROXANA-DENISA VÎRLAN</h1>
             
            <section className="top">
            <section className="bara">
      <a href="https://www.facebook.com/VirlanRoxana" className="item"><img src="/images/facebook.png" width="40" height="40"/> Facebook</a>
      <a href="linkedin.com/in/roxana-vîrlan-8b48941a2" className="item"><img src="/images/linkedin.png" width="30" height="30"/>Linkedin</a>
      <a href="https://github.com/RoxanaDenisa" className="item"><img src="/images/github.png" width="40" height="40"/>Github</a>
      
  </section>
                
                
            </section>
             <h1 className="tip">PROFILE</h1>
             <hr className="header-top__seperator" />
             <p className="paragraph">I am detail-oriented engineering student who is passionate about creating applications, performing OOP principles and coding. I am willing to
improve myself as a person, always glad to communicate and I have a constant hunger of knowledge.</p>
              
            </section>
           
           
          </section>
          <section className="top">
          <div className="dreptunghi">
        <h1>CONTACT:</h1>
        <p><b>Phone number:</b> +40768265756</p>
        <p><b>Email: </b> virlan.roxana99@gmail.com</p>
        <p><b>Address: </b>Timișoara, România</p>
    </div>
                
                
         </section>
         
          
        </section>
      </section>
    
  );
  const Emp=()=>(
    <div className="App">
      <Second />
    </div>
  );
  const Edu=()=>(
    <div className="App">
      <Third />
    </div>
  );
  const Revi=()=>(
    <div className="App">
      <Second />
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

export default App;