import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import './style.scss'

export default memo(function Upload() {
  const handleClick = useCallback((e) => {
    console.log(e.target)
  })

  const [img, setImg] = useState()

  const fileInputRef = useRef()
  return (
    <div className="upload-wrapper">
      <div className="container">
        <div className="title-part">
          <h1>upload your file here</h1>
        </div>
        <hr />
        <div className="upload-part row">
          <button
            className="btn btn-info row-item col-6 col-md-4 col-lg-3 mx-2 border-0"
            onClick={(e) => {
              handleClick(e)
              fileInputRef.current.click()
            }}
          >
            <i className="bi bi-arrow-up text-light"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="upload-input col-6 col-md-4 col-lg-3 mx-2"
            onChange={(e) => {
              const currentFile = e.target.files[0]
              if (currentFile) {
                setImg(currentFile)
              } else {
                setImg(null)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
})
