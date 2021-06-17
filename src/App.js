import React, { memo } from 'react'
import ImgHover from './components/hover-img/ImgHover'
import Home from './pages/home/Home.jsx'
import FloatingBg  from './components/floatingBg/FloatingBg'



export default memo(function App() {
  return (
    <div>
       {/* <ImgHover></ImgHover> */}
       {/* <NavBar></NavBar> */}
       {/* <Home></Home> */}
       <FloatingBg></FloatingBg>

    </div>
  )
})
