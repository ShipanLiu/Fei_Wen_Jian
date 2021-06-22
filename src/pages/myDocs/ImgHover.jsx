import React, { memo, useState, useCallback, useEffect } from 'react'
import './ImgHover.css'
import FloatingBg from '../../components/floatingBg/FloatingBg'
// import test1 from '../../assets/img/test1.jpg'
// import test2 from ''
import Modal from '../../components/modal/Modal'

export default memo(function ImgHover(props) {
  const [showModal, setShowModal] = useState(false)
  const [choosedPic, setChoosedPic] = useState()
  const imgArr = [1, 2]

  const openModal = useCallback((key) => {
    console.log('key is', key)
    setChoosedPic(key)
    setShowModal(!showModal)
  })

  console.log('choosedPic', choosedPic)

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
            {imgArr.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item}>
                  <div
                    className="single shadow"
                    onClick={() => openModal(item)}
                  >
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
                        <img
                          src={
                            require(`../../assets/img/test${item}.jpg`).default
                          }
                          alt=""
                        />
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
              )
            })}
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
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
            </div> */}
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
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
                    <img src={test2} alt="" />
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
            </div> */}
          </div>
        </div>
      </section>
      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          choosedPic={choosedPic}
        ></Modal>
      ) : null}
    </>
  )
})
