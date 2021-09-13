/*
  the upload component was divided into 3 parts:

  (1)upload-view  --->  shows the upload button and upload queue
  (2)upload-modal  ---> allows the user choose a way of uploading -- webcamera or from file
  (3) upload main --->  this is the main part and it consists of upload-view and Signature


*/

import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import './style.scss'
import View from '../upload-view/View'
// import ImgSignature from '../../img-signature/ImgSignature'
import SignatureModal from '../../../SignatureComponent/SignatureModal'
export default memo(function Upload() {
  const [image, setImage] = useState(null)
  const [addedImg, setAddedImg] = useState([])
  const [showImgSigModal, setShowImgSigModal] = useState(false)
  const [choosedSrc, setChoosedSrc] = useState()
  const [choosedId, setChoosedId] = useState()
  const [finalImg, setFinalImg] = useState([])

  // once img changed, rerender and show the extracted pic
  useEffect(() => {
    if (image) {
      console.log('get into useEffect')
      // console.log(addedImg)
    } else {
      console.log('image do not exists')
    }
  }, [image])

  // console.log(addedImg)
  const handleImgModal = (src, id) => {
    // console.log('主组件里面输出：' + id)
    setShowImgSigModal(!showImgSigModal)
    setChoosedSrc(src)
    setChoosedId(id)
  }

  return (
    <>
      {/*  View is a from upload-view.js */}
      <View
        setImage={setImage}
        addedImg={addedImg}
        setAddedImg={setAddedImg}
        handleImgModal={handleImgModal}
      ></View>
      {showImgSigModal ? (
        // <ImgSignature
        //   choosedSrc={choosedSrc}
        //   choosedId={choosedId}
        //   setShowImgSigModal={setShowImgSigModal}
        // />
        <SignatureModal
          choosedSrc={choosedSrc}
          choosedId={setChoosedId}
          setShowImgSigModal={setShowImgSigModal}
          setFinalImg={setFinalImg}
        />
      ) : (
        ''
      )}
    </>
  )
})
