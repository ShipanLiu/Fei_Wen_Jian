import React, { memo } from 'react'
import NavBar from '../navbar/NavBar'

export default memo(function index() {
  return (
    <div className="header">
      <NavBar></NavBar>
    </div>
  )
})
