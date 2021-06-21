import React, { memo, useRef, useEffect, useCallback } from 'react'
import './style.scss'

export default memo(function Modal(props) {
  const modalRef = useRef()
  const { showModal, setShowModal } = props

  const closeModal = (e) => {
    // if (modalRef.current === e.target) {
    //   setShowModal(false)
    // }
    console.log(e.target)
  }

  return (
    <div className="the-background" onClick={closeModal} ref={modalRef}>
      <div className="modal-wrapper" showModal={showModal}>
        <img
          className="modal-img"
          src={require('../../assets/img/test1.jpg').default}
          alt="camera"
        />
        <div className="modal-content">
          <div className="sub-data">
            <h1>
              title:<span className="mx-2 h4">{`Commerzbank`}</span>
            </h1>
            <hr />
            <h3>
              data:<span className="mx-2 h4">{`23.04.2021`}</span>
            </h3>
            <h3 className="mt-3">
              Tag:<span className="mx-2 h4">{`invoice`}</span>
            </h3>
          </div>
          <button
            className="modal-close btn btn-primary btn-lg btn-block"
            onClick={() => setShowModal(!showModal)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
})
