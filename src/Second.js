import React from 'react';
import App from './App';
import Third from './Third';
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
      
                <Link to='/'className="navbar-item">Personal information</Link>
                <Link to='/empl'className="navbar-item">Employment History</Link>
                <Link to='/educ' className="navbar-item">Education</Link>
                
  </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
        </section>
        <section className='page2'>
        <section className='page2-top'>
            <h1 className='dim'>Employment History</h1>
            <p>
                <ul className='si1'>
                    <li >Mobile Application at Politehnica University of Timișoara</li>
                    <p className='paragraph1'>April 2021 - May 2021</p>
                    <p className='paragraph2'>The application name is Blind and it was made by me and one of my colleague.As fronted, we use Flutter and as backend, for database, we use Firebase. We also use
Github.</p>
                    <li >Mobile Application at Politehnica University of Timișoara</li>
                    <p className='paragraph1'>February 2021 - May 2021</p>
                    <p className='paragraph2'>The application name is TravelApp and it was made by me and one of my colleague.As fronted, we use Flutter and as backend, for database, we use Firebase. We also use
Github.</p>
                    <li>Web Application at Politehnica University of Timișoara</li>
                    <p className='paragraph1'>September 2020 - October 2020</p>
                    <p className='paragraph2'>This application is an clother store. I used Xampp with Apache and MySQL for database.</p>
                    <li>Desktop Java Application at Politehnica University of Timișoara</li>
                    <p className='paragraph1'>April 2020 - June 2020</p>
                    <p className='paragraph2'>The application name is MakeUp Store and it was made by me and one of my
colleague, implemented in Java. We worked with JavaFx interactive graphic interface,
Maven Build system and we used Junit for testing. We also used GitHub and Jira.</p>
                </ul>
            </p>
        </section>
        </section>
    </section>

        </div>
      );
      const Edu=()=>(
        <div className="Third">
          <Third />
        </div>
      );
      

  return (
        
    <Router> 
    <div>
          <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/empl" exact component={Emp}/>
          <Route path="/educ" exact component={Edu}/>
          </Switch>
    </div>
    </Router>
  );
}

export default Second;