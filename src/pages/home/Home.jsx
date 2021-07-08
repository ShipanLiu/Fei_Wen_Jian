import React, { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Welcome from '../../components/sections/welcome/index'
import Purchase from '../../components/sections/purchase/index'

export default memo(function Home() {
  const [shouldShowActions, setShouldShowActions] = useState(false)
  const [lastYPos, setLastYPos] = React.useState(0)

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingDown = yPos > lastYPos

      setShouldShowActions(isScrollingDown)
      setLastYPos(yPos)
    }
    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])
  return (
    <div>
      <motion.div>
        <Welcome></Welcome>
      </motion.div>
      <motion.div>
        <Purchase></Purchase>
      </motion.div>
      <motion.div
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { duration: 0.5 } }}
      >
        <Purchase></Purchase>
      </motion.div>
      <motion.div
        animate={{ x: shouldShowActions ? 0 : -800 }}
        initial={{ x: -700 }}
        transition={{ opacity: { duration: 0.8 } }}
      >
        <Purchase></Purchase>
      </motion.div>
      <motion.div>
        <Purchase></Purchase>
      </motion.div>
    </div>
  )
})
