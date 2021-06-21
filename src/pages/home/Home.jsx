import React, { memo } from 'react'
import Welcome from '../../components/sections/Welcome/index'
import Footer from '../../components/footer/index'
import Purchase from '../../components/sections/Purchase/index'

export default memo(function Home() {
  return (
    <div>
      <main>
        <Welcome></Welcome>
        <Purchase></Purchase>
      </main>
    </div>
  )
})
