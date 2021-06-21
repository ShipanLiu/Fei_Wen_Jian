import React, { memo, useState, useCallback } from 'react'
import './ImgHover.css'
import FloatingBg from '../../components/floatingBg/FloatingBg'
import test1 from '../../assets/img/test1.jpg'
import Modal from '../../components/modal/Modal'

export default memo(function ImgHover(props) {
  const [showModal, setShowModal] = useState(false)
  const openModal = useCallback(() => {
    console.log('jiba')
    setShowModal(!showModal)
  })
  return (
    <>
      <FloatingBg></FloatingBg>
      <section className="team-one" id="team">
        {/* <img src={bgPic} className="bg-shape-1" alt=""/> */}
        <div className="container">
          {/* <div className="title text-center">
            <p>Doc Cards</p>
          </div> */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single shadow" onClick={openModal}>
                <div className="detail">
                  <a href="" className="text-muted ml-1 mr-3 mt-1">
                    <span>Details</span>
                  </a>
                  <a href="" className="text-muted mt-1">
                    <span>Tag</span>
                  </a>
                </div>
                <div className="inner">
                  <div className="image">
                    <img src={test1} alt="" />
                  </div>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-save2"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single shadow" onClick={openModal}>
                <div className="detail">
                  <a href="" className="text-muted ml-1 mr-3 mt-1">
                    <span>Details</span>
                  </a>
                  <a href="" className="text-muted mt-1">
                    <span>Tag</span>
                  </a>
                </div>
                <div className="inner">
                  <div className="image">
                    <img src={test1} alt="" />
                  </div>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-save2"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      ) : null}
    </>
  )
})
