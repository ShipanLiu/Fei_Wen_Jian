import React from 'react'
import { useScroll } from '../../../hooks/useScroll'
import { motion } from 'framer-motion'
import WorkImage from '../../../assets/img/work.svg'
import './style.scss'
import { headerAnimation, imageAnimation } from '../../../utils/Animation'

const Welcome = () => {
  const [element, controls] = useScroll()
  return (
    <div id="welcome" className="container" ref={element}>
      <div className="row">
        <motion.div
          className="content col-12 col-md-5"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <h1 className="text-white">Welcome</h1>
          <p className="text-white">A professional web for Docs sharing</p>
          <div className="button-container d-flex flex-nowrap justify-content-center align-items-center my-5">
            <button className="btn btn-primary mx-2 col-6">watch video</button>
            <button className="btn btn-primary col-6">know more</button>
          </div>
        </motion.div>
        <motion.div
          className=" col-12 col-md-7"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: 'tween' }}
        >
          <img src={WorkImage} alt="Work" className="img-fluid" />
        </motion.div>
      </div>
    </div>
  )
}

export default Welcome
