import React from 'react'
import './style.css';
const Footer = () => {
  return (

 <footer id="footer">
  
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-auto col-md-6 footer-contact">
          <h3>Blood Bank Connect</h3>
          <p>
            Developed by NITJ students <br/><br/>
            <strong>Phone:</strong> +91 551919345<br/>
            <strong>Email:</strong> info@example.com<br/>
          </p>
        </div>

        <div className="col-lg-auto col-md-6 footer-links">
          <h4>About us</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Our services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>       

      </div>
    </div>
  </div>

  <div className="container d-md-flex py-4">

    <div className="me-md-auto text-center text-md-start">
      <div className="copyright">
        &copy; Copyright <strong><span>Blood Bank Connect</span></strong>. All Rights Reserved
      </div>
    </div>
    <div className="social-links text-center text-md-right pt-3 pt-md-0">
      <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
      <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
      <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
      <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
    </div>
  </div>
</footer>
   
  )
}

export default Footer;