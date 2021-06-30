import React, { memo } from 'react'
import Welcome from '../../components/sections/welcome/index'
import Purchase from '../../components/sections/purchase/index'
// import FloatingBg from '../../components/floatingBg/FloatingBg'
// import Upload from '../../components/upload/upload-main/index'
import ImgSignature from '../../components/img-signature/ImgSignature'
import ImgEditor from '../../components/img-editor/ImgEditor'

export default memo(function Home() {
  return (
    <div>
      <main>
        {/* <Welcome></Welcome>
        <Purchase></Purchase> */}
        {/* <ImgSignature></ImgSignature> */}
        <ImgEditor></ImgEditor>
      </main>
    </div>
  )
})
