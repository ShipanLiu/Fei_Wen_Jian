import React from 'react'
import './style.scss'

export default function PurchaseCard({ duration, price }) {
  return (
    <div>
      <div className="card m-3">
        <div className="card-body m-0 p-0">
          <div className="title py-3 mb-2">
            <h5 className="card-title">FlyDocs</h5>
          </div>
          <p className="card-text pt-2">{duration}</p>
          <div className="pricing">
            <h1 className="my-5">{price}</h1>
            <a href="#" className="btn btn-dark px-5 py-2 primary-btn mb-3">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
