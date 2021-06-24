import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import WebCam from '../../webcam/index'
export default function BrowerView({ setImage, addedImg, setAddedImg }) {
  const [showModal, setShowModal] = useState(false)
  const [showWebCam, setShowWebCam] = useState(false)
  const fileInputRef = useRef()

  const handleClick = useCallback((e) => {
    console.log(e.target)
    setShowModal(true)
  })

  const handleOnChange = (e) => {
    if (e.target.files) {
      console.log('success')
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = function (e) {
        const img = new Image()
        img.src = reader.result
        // console.log(img.src)
        setImage(img.src)
        addedImg.push(img.src)
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
      console.log('e.target.files failure')
    }
  }

  return (
    <div>
      <div className="upload-wrapper">
        <div className="container">
          <div className="title-part">
            <h1>upload your file here</h1>
            {showWebCam ? <WebCam setShowWebCam={setShowWebCam}></WebCam> : ''}
          </div>
          <hr />
          <div className="upload-part row">
            <button
              className="btn btn-info row-item col-3 mx-2 border-0 mb-2"
              onClick={(e) => {
                handleClick(e)
              }}
            >
              <i className="bi bi-arrow-up text-light"></i>
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="upload-input col-6 col-md-4 col-lg-3 mx-2"
              onChange={handleOnChange}
            />

            {/* Modal part should be as a Component later*/}

            <Modal isOpen={showModal}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                <h3>local or camera?</h3>
                <div className="d-flex align-items-center justify-content-left">
                  <input type="checkbox" name="" id="" defaultChecked={true} />
                  <i className="mx-1">remember my choice</i>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    setShowModal(false)
                    fileInputRef.current.click()
                  }}
                >
                  local file
                </Button>{' '}
                <Button
                  color="danger"
                  onClick={() => {
                    setShowModal(false)
                    setShowWebCam(true)
                  }}
                >
                  Webcam
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setShowModal(false)
                  }}
                >
                  Cancle
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
