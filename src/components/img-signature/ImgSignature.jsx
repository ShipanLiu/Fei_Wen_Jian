import React, { useState, useRef, useCallback, useEffect } from 'react'
import './style.scss'
import ImgEditor from './imgEditor'

const ImgSignature = ({ choosedSrc, choosedId, setShowImgSigModal }) => {
  // here is the finial image saved after all the editing
  const [finalImg, setFinalImg] = useState([])

  return (
    <div className="img-mainArea">
      <div className="img-wrapper">
        {/* <div className="img-title text-center pt-2">
          <h3 className="">add your signature here</h3>
          <button
            className="btn btn-primary mb-2 mx-1 cancle-btn"
            onClick={() => {
              setShowImgSigModal(false)
            }}
          >
            cancle
          </button>
        </div>
        <hr className="m-0 mb-2" /> */}
        <div id="img-region-body">
          <ImgEditor
            choosedSrc={choosedSrc}
            setFinalImg={setFinalImg}
            setShowImgSigModal={setShowImgSigModal}
          ></ImgEditor>
        </div>
      </div>
    </div>
  )
}

export default ImgSignature
