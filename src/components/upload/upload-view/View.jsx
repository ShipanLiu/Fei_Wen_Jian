import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { nanoid } from 'nanoid'
import WebCam from '../../webcam/index'
import UploadModal from '../upload-modal/UploadModal'
export default function BrowerView({ setImage, addedImg, setAddedImg }) {
  const [showModal, setShowModal] = useState(false)
  const [showWebCam, setShowWebCam] = useState(false)
  const fileInputRef = useRef()

  const handleClick = useCallback((e) => {
    console.log(e.target)
    setShowModal(true)
    if (isMobile) {
      fileInputRef.current.click()
    }
  })

  const handleOnChange = (e) => {
    if (e.target.files) {
      console.log('success')
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = function (e) {
        const img = new Image()
        img.src = reader.result
        // setImage(img.src)
        const imgObj = { id: nanoid(), src: img.src }
        setAddedImg((preImgArr) => [...preImgArr, imgObj])
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
      console.log('e.target.files failure')
    }
  }

  const handleDelete = (id) => {
    console.log('delete')
    console.log('deleted id is:' + id)
    const filteredImgs = addedImg.filter((imgObj) => imgObj.id !== id)
    setAddedImg(filteredImgs)
  }

  return (
    <div className="container mb-3">
      <div className="upload-wrapper">
        {showWebCam ? (
          <div className="webcam-area">
            <WebCam
              className="webcam-body"
              setShowWebCam={setShowWebCam}
              setAddedImg={setAddedImg}
            ></WebCam>
          </div>
        ) : (
          ''
        )}
        <div className="main-area w-100">
          <div className="title-part">
            <h1>upload your file here</h1>
          </div>
          <hr />
          <div className="upload-part">
            {/* {addedImg?.map((imgObj) => {
              return (
                <div className="item">
                  <div
                    className="showed-img mx-2"
                    key={imgObj.id}
                    // onClick={() => setImage(null)}
                  >
                    <i
                      className="delete-icon bi bi-x bg-danger"
                      onClick={() => handleDelete(imgObj.id)}
                    ></i>
                    <img
                      src={imgObj.src}
                      alt="photo parse wrong"
                      className="img-fluid"
                    />
                  </div>
                </div>
              )
            })} */}

            <button
              className="btn btn-info add-button  mx-2 border-0"
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
            {isMobile ? (
              ''
            ) : (
              <UploadModal
                showModal={showModal}
                setShowModal={setShowModal}
                fileInputRef={fileInputRef}
                setShowWebCam={setShowWebCam}
              ></UploadModal>
            )}
          </div>

          <hr className="my-2" />

          <div className="wrapper">
            {addedImg?.map((imgObj) => {
              return (
                <div className="item">
                  <div
                    className="showed-img mx-2"
                    key={imgObj.id}
                    // onClick={() => setImage(null)}
                  >
                    <i
                      className="delete-icon bi bi-x bg-danger"
                      onClick={() => handleDelete(imgObj.id)}
                    ></i>
                    <img
                      src={imgObj.src}
                      alt="photo parse wrong"
                      className="img-fluid"
                    />
                  </div>
                </div>
              )
            })}
            {/* <div class="item">box-1</div>
            <div class="item">box-2</div>
            <div class="item">box-3</div>
            <div class="item">box-4</div>
            <div class="item">box-5</div>
            <div class="item">box-6</div>
            <div class="item">box-7</div>
            <div class="item">box-8</div>
            <div class="item">box-9</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
