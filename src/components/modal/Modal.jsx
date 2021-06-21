import React, { memo, useEffect, useCallback } from 'react'
import './style.scss'

export default memo(function Modal(props) {
  const { showModal, setShowModal } = props

  const keyPress = useCallback(
    (e) => {
      console.log(e.keyCode)
      if (e.keyCode === 27 && showModal) {
        setShowModal(false)
        console.log('I pressed')
      }
    },
    [setShowModal, showModal]
  )

  // rerender after the key press
  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])
  return (
    <div className="the-background">
      <div className="modal-wrapper">
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
