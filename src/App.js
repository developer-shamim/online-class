import React from 'react';
import './App.css';
import Courses from './Courses/Courses';

function App() {
  return (
    <div className = "container">
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-blue">
        <a className="navbar-brand" href="/online">ONLINE CLASS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="/hone">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link" href="/courses">Courses</a>
          <a className="nav-link" href="/about">About Us</a>
          <a className="nav-link" href="/blogs">Blogs</a>
          <a className="nav-link" href="/contact">Countact Us</a>
        </div>
        
        <div className="log-in">
          <a className="nav-link log-in" href="/log-in">Log-in</a>
        </div>
      </div>
    </nav> 
    <div className="navbar navbar-light bg-tomato">
          <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Course" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Course</button>
          </form>
    </div>
   
    <div>
      <Courses></Courses>
    </div>
 
    </div>
  );
}

export default App;
