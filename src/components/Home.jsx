import React from 'react'
import web from "../images/corruption1.jpg";
import card1 from "../images/c1.jpg";
import card2 from "../images/c2.png";
import card3 from "../images/c3.jpg";

import { NavLink } from 'react-router-dom';
import HorizontalCard from './HorizontalCard';

const Home = () => {
  return (
    <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1 d-flex justify-conetnt-center flex-column">
                <h1> CorruptionWatch: Unveiling Transparency, Empowering Change.</h1>
                <h3 className='my-3'> Go to App </h3>
                <div className='mt3'>
                <NavLink href = "#"> <button className="btn btn-get-started btn-lg" >
                      App
                </button>
                </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img" />
              <img src={web} className="img-fluid animated" alt="home img" style={{width:'40%', height:'40%'}}/>
            </div>
          </div>
        </div>
        </div>
        
    </section>
    <div className="container mt-5">
      <h2>Welcome to the Anti-Corruption Website</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Report Corruption</h5>
              <p className="card-text">Use this section to report incidents of corruption.</p>
              <a href="/reportcorruption" className="btn btn-primary">Report Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Investigations</h5>
              <p className="card-text">Track the progress of ongoing investigations.</p>
              <NavLink to="/dashboard" className="btn btn-primary">View Investigations</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* Example Horizontal Card */}
  <div className="container mt-5">
        <HorizontalCard
          title="What is Corruption?"
          description="Corruption erodes trust, weakens democracy, hampers economic development and further exacerbates inequality, poverty, social division and the environmental crisis."
          imageUrl={card1}
        />
        <HorizontalCard
          title="Types of Corruption"
          description="Following are the three types of corruption. 1. Corruption at Individual level, 
          2. Corruption at Societal level
          3. Corruption at Systemic level"
          imageUrl={card2}
        />
        <HorizontalCard
          title="Ways to Stop Corruption"
          description="There is no silver bullet for fighting corruption. Many countries have made significant progress in curbing corruption, however practitioners are always on the lookout for solutions and evidence of impact. Here are five ways that citizens and governments can make progress in the fight against corruption:"
          imageUrl={card3}
        />
        <br/><br/>

      </div>
    </>
  );
};

export default Home;