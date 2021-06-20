import React from 'react'

// import Section from '../../../HOC/Section'
// import bgImage from '../../../assets/img/home_bg.jpg'
// import Link from '../../UI/Link/Link'
import FloatingBg from '../../floatingBg/FloatingBg'
import './style.scss'

const home = () => {
  return (
    <section id="home">
      <div>
        <FloatingBg></FloatingBg>
        <div
          className="home-content p-5"
          // style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="intro container text-center text-light">
            <h1 className="title">WELCOME</h1>
            <h2 className="sub-title mb-4">to use our fly docs services</h2>
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
