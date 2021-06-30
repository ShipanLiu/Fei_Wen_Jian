import React, { memo, useRef, useCallback, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import './style.scss'
import View from '../upload-view/View'
import ImgSignature from '../../img-signature/ImgSignature'
// import MobilView from '../upload-mobil/MobilView'

export default memo(function Upload() {
  const [image, setImage] = useState(null)
  const [addedImg, setAddedImg] = useState([])
  const [showImgSigModal, setShowImgSigModal] = useState(false)
  const [choosedSrc, setChoosedSrc] = useState()
  const [choosedId, setChoosedId] = useState()

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
  const handleImgModal = (src, id) => {
    // console.log('主组件里面输出：' + id)
    setShowImgSigModal(!showImgSigModal)
    setChoosedSrc(src)
    setChoosedId(id)
  }

  return (
    <>
      <View
        setImage={setImage}
        addedImg={addedImg}
        setAddedImg={setAddedImg}
        handleImgModal={handleImgModal}
      ></View>
      {showImgSigModal ? (
        <ImgSignature
          choosedSrc={choosedSrc}
          choosedId={choosedId}
          setShowImgSigModal={setShowImgSigModal}
        />
      ) : (
        ''
      )}
    </>
  )
})
