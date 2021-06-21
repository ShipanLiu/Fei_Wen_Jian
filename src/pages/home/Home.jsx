import React, { memo } from 'react'
import Header from '../../components/header/index'
import Welcome from '../../components/sections/Welcome/index'
import Footer from '../../components/footer/index'
import Purchase from '../../components/sections/Purchase/index'

export default memo(function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Welcome></Welcome>
        <Purchase></Purchase>
      </main>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
    </div>
  )
})
