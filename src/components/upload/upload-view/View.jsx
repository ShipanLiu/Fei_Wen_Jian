import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { nanoid } from 'nanoid'
import WebCam from '../../webcam/index'
import UploadModal from '../upload-modal/UploadModal'
export default function View({
  setImage,
  addedImg,
  setAddedImg,
  handleImgModal,
}) {
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
      const fileArray = Array.from(e.target.files).map((file) => ({
        src: URL.createObjectURL(file),
        id: nanoid(),
      }))
      console.log(fileArray)
      setAddedImg((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }

  const handleDelete = (id) => {
    console.log('delete')
    console.log('deleted id is:' + id)
    const filteredImgs = addedImg.filter((imgObj) => imgObj.id !== id)
    setAddedImg(filteredImgs)
  }

  const handleImg = (src, id) => {
    handleImgModal(src, id)
    // console.log(`id: ${id} is click and the correspond modal should be opened`)
    // setShowImgSig(!showImgSig)
  }

  return (
    <d iv className="container mb-3">
      <div className="upload-wrapper container">
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
              multiple="multiple"
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
                <div className="item" key={imgObj.id}>
                  <div
                    className="showed-img mx-2"
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
                      onClick={() => handleImg(imgObj.src, imgObj.id)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </d>
  )
}
