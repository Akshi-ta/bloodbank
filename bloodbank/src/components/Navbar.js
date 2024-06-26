import React, { useEffect, useState } from 'react'
import TopHeader from './TopHeader'
import './style.css';

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = ({ setProgress }) => {


  const location = useLocation();

  const handleClick = () => {
    setProgress(100);

  }



  return (
    <>
      <TopHeader />
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><Link to="/">Blood Bank Connect</Link></h1>


          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className={`nav-link scrollto ${location.pathname === '/' ? "active" : " "}`} to="/" onClick={handleClick}>Home</Link></li>
              <li><Link className={`nav-link scrollto ${location.pathname === '/incomingRequests' ? "active" : " "}`} to="/incomingRequests" onClick={handleClick} >Incoming Requests</Link></li>
              <li><Link className={`nav-link scrollto ${location.pathname === '/requests' ? "active" : " "}`} to="/requests" onClick={handleClick}>My Requests</Link></li>
              <li><Link className={`nav-link scrollto ${location.pathname === '/profile' ? "active" : " "}`} to="/profile" onClick={handleClick}>My Profile</Link></li>
              <li><Link className={`nav-link scrollto ${location.pathname === '/contact' ? "active" : " "}`} to="/contact" onClick={handleClick}>Contact Us</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link to="/MakeRequest" className="request-btn scrollto" onClick={handleClick}><span className="d-none d-md-inline">Make a</span> Request</Link>
          <div>
            <Link to="/Login" className="request-btn scrollto" onClick={handleClick}>Login</Link>
          </div>

          <Link to="/Register" className="request-btn scrollto" onClick={handleClick}>Register</Link>

        </div>
      </header>

    </>
  )
}

export default Navbar