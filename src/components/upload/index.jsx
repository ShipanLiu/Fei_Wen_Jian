import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import './style.scss'

export default memo(function Upload() {
  const [image, setImage] = useState(null)
  const fileInputRef = useRef()
  // once img changed, rerender and show the extracted pic
  useEffect(() => {
    if (image) {
      console.log('进入useEffect')
      // console.log(image)
    } else {
      console.log('image do not exists')
    }
  }, [image])

  const handleClick = useCallback((e) => {
    console.log(e.target)
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
        </div>
        <hr />
        <div className="upload-part row">
          {image ? (
            <div className="showed-img row-item col-6 col-md-4 col-lg-3 mx-2 border-0">
              <i
                className="delete-icon bi bi-x bg-danger"
                onClick={handleDelete}
              ></i>
              <img src={image} alt="photo parse wrong" className="img-fluid" />
            </div>
          ) : (
            <button
              className="btn btn-info row-item col-6 col-md-4 col-lg-3 mx-2 border-0"
              onClick={(e) => {
                handleClick(e)
                fileInputRef.current.click()
              }}
            >
              <i className="bi bi-arrow-up text-light"></i>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="upload-input col-6 col-md-4 col-lg-3 mx-2"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  )
})
