import React from 'react'
import PurchaseCard from '../purchase-card/PurchaseCard'
import { useScroll } from '../../../hooks/useScroll'
import { motion } from 'framer-motion'
import { textAnimation, cardAnimation } from '../../../utils/Animation'
import './style.scss'

export default function Purchase() {
  const [element, controls] = useScroll()
  const priceCard = [
    { id: 1, duration: 'One Month', price: '$10' },
    { id: 2, duration: 'three Month', price: '$28' },
    { id: 3, duration: 'One Year', price: '$110' },
  ]
  return (
    <div className="my-5" ref={element}>
      <div className=" purchase text-center">
        <div>
          <h1 className="text-white">Purchase Whatever You Want</h1>
        </div>
        <motion.div className="cards m-3">
          <div className="d-flex flex-row justify-content-center flex-wrap">
            {priceCard.map((item) => {
              return (
                <PurchaseCard
                  key={item.id}
                  duration={item.duration}
                  price={item.price}
                  variants={cardAnimation}
                  animate={controls}
                ></PurchaseCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
