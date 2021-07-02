import React, { useState, useRef, useCallback, useEffect } from 'react'
import { nanoid } from 'nanoid'
// import { blobToDataURL} from 'blob-util'
import './style.scss'
import test1 from '../../assets/img/test1.jpg'
import ImgEditor2 from './imgEditor2'

const ImgSignature = ({ choosedSrc, choosedId, setShowImgSigModal }) => {
  const [finalImg, setFinalImg] = useState([])

  const handleSave = () => {
    alert('jiba')
  }
  return (
    <div className="img-mainArea">
      <div className="img-wrapper">
        <div className="img-title text-center pt-2">
          {/* {finalImg ? (
            <img src={finalImg.src} alt="photo does not exist" />
          ) : (
            ''
          )} */}

          <h3 className="">add your signature here</h3>
          {/* <button
            className="btn btn-primary mb-2 mx-5 save-btn"
            onClick={handleSave}
          >
            save
          </button> */}
          <button
            className="btn btn-primary mb-2 mx-1 cancle-btn"
            onClick={() => {
              setShowImgSigModal(false)
              // handleDownload()
            }}
          >
            cancle
          </button>
        </div>
        <hr className="m-0 mb-2" />
        <div id="img-region-body">
          <ImgEditor2
            choosedSrc={choosedSrc}
            setFinalImg={setFinalImg}
            setShowImgSigModal={setShowImgSigModal}
          ></ImgEditor2>
        </div>
      </div>
    </div>
  )
}

export default ImgSignature
