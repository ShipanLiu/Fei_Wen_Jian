import React, { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Welcome from '../../components/sections/welcome/index'
import Purchase from '../../components/sections/purchase/index'

export default memo(function Home() {
  return (
    <>
      <Welcome></Welcome>
      <Purchase></Purchase>
    </>
  )
})
