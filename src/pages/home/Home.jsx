import React, { memo } from 'react'
import Welcome from '../../components/sections/Welcome/index'
import Purchase from '../../components/sections/Purchase/index'
import FloatingBg from '../../components/floatingBg/FloatingBg'
import Upload from '../../components/upload/index'

export default memo(function Home() {
  return (
    <div>
      <main>
        <FloatingBg></FloatingBg>
        <Upload></Upload>
        {/* <Welcome></Welcome> */}
        {/* <Purchase></Purchase> */}
      </main>
    </div>
  )
})
