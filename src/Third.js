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
      <section className='page3'>
        <section className='page3-top'>
            <h1 className='dim'>Education</h1>
            <p>
                <ul className='si1'>
                    <li >Automation and Computer Engineering, Politehnica University of Timișoara</li>
                    <p className='paragraph1'>September 2018 – present</p>
                    <p>I have studied:</p>
                    <ul className='paragraph2'> 
                        <li> C and Java programming</li>
                        <li>Web programming</li>
                        <li>Operating System</li>
                        <li>Software Engineering Fundaments</li>
                    </ul>
                   
                </ul>
            </p>
        </section>
        
        </section>
        <div className="dreptunghi1">
        <h1>S K I L L S:</h1>
        <section >
        <p><b>C++:<br></br>      </b>●●●●●●◌◌◌</p>
        <p ><b>HTML:<br></br>●●●●●●●◌◌ </b></p>
        
        </section>
        </div>
        <section className="dreptunghi2">
        <p ><b>C:        <br></br>     ●●●●●●●●</b>◌</p> 
        <p ><b>Java:    <br></br>  </b>●●●●●●◌◌◌</p>
        
        </section>
        <section className="dreptunghi3">
        <p><b>Team-working:<br></br> ●●●●●●●●●</b></p>
        <p><b>Communication:<br></br> ●●●●●●●●● </b></p>
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