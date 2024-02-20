import React from 'react'
import './style.css';
const TopHeader = () => {
  return (
     <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="fa-solid fa-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
        <i className="fa-solid fa-phone"></i> +91 5589 55488 55
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div> 
  )
}

export default TopHeader