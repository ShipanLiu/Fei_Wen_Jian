import React, { memo, useState, useCallback } from 'react'
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
        <div className="container">
          <div className="row">
            {imgArr.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item}>
                  <div
                    className="single shadow"
                    onClick={() => openModal(item)}
                  >
                    <div className="detail">
                      <div href="" className="mx-3">
                        <span className="text-light">Contract</span>
                      </div>
                      <div href="" className="">
                        <span className="text-white">09.04.2020</span>
                      </div>
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
                        <a href="" className="bg-info mx-3">
                          <i className="bi bi-save2"></i>
                        </a>
                        <a href="" className="bg-warning mx-3">
                          <i className="bi bi-share-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
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
