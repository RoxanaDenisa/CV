import React from 'react';
import './Cont.css';
import { Bara } from '../../common' ;
import { Dreptunghi } from '../../common' ;
function Cont(){
    return (
        <section className="page">
          <section className="page-top">

            <section className="page-top_image">
                 <img className="img" src="/images/eu.jpg" width="200" height="300"/>
            </section>

            <section className="page-top__profile">
             <h1 className="tip">ROXANA-DENISA VÎRLAN</h1>
             
            <section className="top">
            <Bara />
                
                
            </section>
             <h1 className="tip">PROFILE</h1>
             <hr className="header-top__seperator" />
             <p className="paragraph">I am detail-oriented engineering student who is passionate about creating applications, performing OOP principles and coding. I am willing to
improve myself as a person, always glad to communicate and I have a constant hunger of knowledge.</p>
              
            </section>
           
           
          </section>
          <section className="top">
            <Dreptunghi />
                
                
         </section>
         
          
        </section>
        
      )
}
export default Cont;