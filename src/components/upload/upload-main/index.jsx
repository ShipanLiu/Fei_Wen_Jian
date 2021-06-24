import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import './style.scss'
import View from '../upload-view/View'
// import MobilView from '../upload-mobil/MobilView'

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

  return (
    <>
      <View
        setImage={setImage}
        addedImg={addedImg}
        setAddedImg={setAddedImg}
      ></View>
    </>
  )
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
