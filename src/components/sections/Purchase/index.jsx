import React, { memo } from 'react'
import PurchaseCard from '../purchase-card/PurchaseCard'
import './style.scss'

export default memo(function index() {
  const priceCard = [
    { id: 1, duration: 'One Month', price: '$10' },
    { id: 2, duration: 'three Month', price: '$28' },
    { id: 3, duration: 'One Year', price: '$110' },
  ]
  return (
    <div className="my-5">
      <div className=" purchase text-center">
        <h1 className="text-white">Purchase Whatever You Want</h1>
        <div className="cards m-3">
          <div className="d-flex flex-row justify-content-center flex-wrap">
            {priceCard.map((item) => {
              return (
                <PurchaseCard
                  key={item.id}
                  duration={item.duration}
                  price={item.price}
                ></PurchaseCard>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
})
