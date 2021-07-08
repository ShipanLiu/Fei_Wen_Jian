import React from 'react'
import './style.scss'

const home = () => {
  return (
    <section id="home" className="container">
      <div>
        <div className="home-content p-5">
          <div className="intro text-center text-light">
            <h1 className="mb-3">WELCOME</h1>
            <h2 className="sub-title mb-4"> use our fly docs services</h2>
            <button className="btn btn-primary border-0 mx-3">
              Learn More
            </button>
            <button className="btn btn-info border-0 mx-2">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home
