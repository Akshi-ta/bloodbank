import React from 'react'
import './style.css';
const Contact = () => {
  return (
    <>
    <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2 style={{marginTop:"50px"}}>Contact Us</h2>
      </div>
    </div>
    <div>
      <iframe style={{border:0, width:"100%", height: "350px"}}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6443287364386!2d75.5324051756066!3d31.396369224271037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1704746577173!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"frameborder="0"></iframe>
    </div>

    <div className="container">
      <div className="row mt-5">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
            <i class="fa-solid fa-location-dot"></i>
              <h4>Location:</h4>
              <p>Dr B R Ambedkar National Institute of Technology Jalandhar <br/> Jalandhar (Punjab) - 144027 <br/> India</p>
            </div>

            <div className="email">
              <i className="fa fa-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>

            <div className="phone">
              <i className="fa fa-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>

          </div>

        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>

      </div>

    </div>
  </section>
    </>
  )
}

export default Contact;