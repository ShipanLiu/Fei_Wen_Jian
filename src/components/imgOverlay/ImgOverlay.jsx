import React, { useCallback } from 'react'

export default function ImgOverlay({ id, time, openModal }) {
  console.log(id)
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div key={id}>
        <div className="single shadow" onClick={() => openModal(id)}>
          <div className="detail">
            <div href="" className="mx-3">
              <span className="text-light">Contract</span>
            </div>
            <div href="" className="">
              <span className="text-white">{time}</span>
            </div>
          </div>
          <div className="inner">
            <div className="image">
              <img
                src={require(`../../assets/img/test${id}.jpg`).default}
                alt=""
              />
            </div>
            <div className="social">
              <a href="" className="bg-info mx-3">
                <i className="bi bi-save2"></i>
              </a>
              <a href="" className="bg-warning mx-3">
                <i className="bi bi-share-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
