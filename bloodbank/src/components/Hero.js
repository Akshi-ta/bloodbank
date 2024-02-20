import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>Unite Hearts, Save Lives</h1>
        <h2>"Connecting Blood Donors with Those in Need, <br /> Where every drop counts in the journey of compassion and hope."</h2>
        <Link to="/MakeRequest" className="btn-get-started scrollto">Get Started</Link>
      </div>
    </section>
  )
}

export default Hero