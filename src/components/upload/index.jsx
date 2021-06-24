import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.scss'

import WebCam from '../webcam/index'

export default memo(function Upload() {
  const [image, setImage] = useState(null)
  const [addedImg, setAddedImg] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showWebCam, setShowWebCam] = useState(false)
  const fileInputRef = useRef()
  // once img changed, rerender and show the extracted pic
  useEffect(() => {
    if (image) {
      console.log('进入useEffect')
      // console.log(addedImg)
    } else {
      console.log('image do not exists')
    }
  }, [image])

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
        // addedImg.push(img.src)
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
      console.log('e.target.files failure')
    }
  }

  const handleDelete = () => {
    console.log('delete')
    setImage(null)
  }

  return (
    <div className="upload-wrapper">
      <div className="container">
        <div className="title-part">
          <h1>upload your file here</h1>
          {showWebCam ? <WebCam setShowWebCam={setShowWebCam}></WebCam> : ''}
        </div>
        <hr />
        <div className="upload-part row">
          {image ? (
            <div
              className="showed-img row-item col-3 mx-2 border-0"
              onClick={() => setImage(null)}
            >
              <i
                className="delete-icon bi bi-x bg-danger"
                onClick={handleDelete}
              ></i>
              <img src={image} alt="photo parse wrong" className="img-fluid" />
            </div>
          ) : (
            <button
              className="btn btn-info row-item col-3 mx-2 border-0"
              onClick={(e) => {
                handleClick(e)
              }}
            >
              <i className="bi bi-arrow-up text-light"></i>
            </button>
          )}
          {/* <button
            className="btn btn-info row-item col-6 col-md-4 col-lg-3 mx-2 border-0"
            onClick={(e) => {
              handleClick(e)
              fileInputRef.current.click()
            }}
          >
            <i className="bi bi-arrow-up text-light"></i>
          </button>
          {addedImg &&
            addedImg.map((item, index) => {
              return (
                <div className="showed-img row-item col-6 col-md-4 col-lg-3 mx-2 border-0">
                  <i
                    className="delete-icon bi bi-x bg-danger"
                    onClick={handleDelete}
                  ></i>
                  <img
                    src={image}
                    alt="photo parse wrong"
                    className="img-fluid"
                  />
                </div>
              )
            })} */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="upload-input col-6 col-md-4 col-lg-3 mx-2"
            onChange={handleOnChange}
          />
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
  )
})
