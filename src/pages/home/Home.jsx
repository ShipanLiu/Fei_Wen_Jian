import React, { memo } from 'react'
import Header from '../../components/header/index'
import Welcome from '../../components/sections/Welcome/index'
import Footer from '../../components/footer/index'

export default memo(function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Welcome></Welcome>
      </main>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
      <Footer></Footer>
    </div>
  )
})
