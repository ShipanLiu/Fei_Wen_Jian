import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import './style.scss'
import BrowerView from '../upload-web/BrowerView'
import MobilView from '../upload-mobil/MobilView'

export default memo(function Upload() {
  const [image, setImage] = useState(null)
  const [addedImg, setAddedImg] = useState([])

  // once img changed, rerender and show the extracted pic
  useEffect(() => {
    if (image) {
      console.log('进入useEffect')
      // console.log(addedImg)
    } else {
      console.log('image do not exists')
    }
  }, [image])

  // console.log(addedImg)

  const handleDelete = () => {
    console.log('delete')
    setImage(null)
  }

  return (
    <>
      {isMobile ? (
        <MobilView></MobilView>
      ) : (
        <BrowerView
          setImage={setImage}
          addedImg={addedImg}
          setAddedImg={setAddedImg}
        ></BrowerView>
      )}
    </>
  )
  // <div className="upload-wrapper">
  //   <div className="container">
  //     <div className="title-part">
  //       <h1>upload your file here</h1>
  //       {showWebCam ? <WebCam setShowWebCam={setShowWebCam}></WebCam> : ''}
  //     </div>
  //     <hr />
  //     <div className="upload-part row">
  //       <button
  //         className="btn btn-info row-item col-3 mx-2 border-0 mb-2"
  //         onClick={(e) => {
  //           handleClick(e)
  //         }}
  //       >
  //         <i className="bi bi-arrow-up text-light"></i>
  //       </button>

  //       <input
  //         type="file"
  //         accept="image/*"
  //         ref={fileInputRef}
  //         className="upload-input col-6 col-md-4 col-lg-3 mx-2"
  //         onChange={handleOnChange}
  //       />

  //       {/* Modal part should be as a Component later*/}

  //       <Modal isOpen={showModal}>
  //         <ModalHeader>Modal title</ModalHeader>
  //         <ModalBody>
  //           <h3>local or camera?</h3>
  //           <div className="d-flex align-items-center justify-content-left">
  //             <input type="checkbox" name="" id="" defaultChecked={true} />
  //             <i className="mx-1">remember my choice</i>
  //           </div>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button
  //             color="primary"
  //             onClick={() => {
  //               setShowModal(false)
  //               fileInputRef.current.click()
  //             }}
  //           >
  //             local file
  //           </Button>{' '}
  //           <Button
  //             color="danger"
  //             onClick={() => {
  //               setShowModal(false)
  //               setShowWebCam(true)
  //             }}
  //           >
  //             Webcam
  //           </Button>
  //           <Button
  //             color="danger"
  //             onClick={() => {
  //               setShowModal(false)
  //             }}
  //           >
  //             Cancle
  //           </Button>
  //         </ModalFooter>
  //       </Modal>
  //     </div>
  //   </div>
  // </div>
})

{
  /* {image ? (
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
          )} */
}
