import React, { memo } from 'react'
import './style.scss'

export default memo(function index() {
  return (
    <div>
      <div className=" purchase text-center">
        <h1 className="text-white">Purchase Whatever You Want</h1>
        <p className="text-white mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="cards m-3">
          <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="card m-3">
              <div className="card-body m-0 p-0">
                <div
                  className="title py-3 mb-2"
                  style={{ background: 'rgba(140, 241, 241, 0.199)' }}
                >
                  <h5 className="card-title">FlyDocs</h5>
                </div>
                <p className="card-text pt-2">One Month</p>
                <div
                  className="pricing"
                  style={{
                    background: 'rgba(140, 241, 241, 0.199)',
                    borderTopRightRadius: '55%',
                    borderTopLeftRadius: '55%',
                  }}
                >
                  <h1 className="my-5">$10</h1>
                  <a
                    href="#"
                    className="btn btn-dark px-5 py-2 primary-btn mb-3"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="card-body m-0 p-0">
                <div
                  className="title py-3 mb-2"
                  style={{ background: 'rgba(140, 241, 241, 0.199)' }}
                >
                  <h5 className="card-title">FlyDocs</h5>
                </div>
                <p className="card-text pt-2">Three Month</p>
                <div
                  className="pricing"
                  style={{
                    background: 'rgba(140, 241, 241, 0.199)',
                    borderTopRightRadius: '55%',
                    borderTopLeftRadius: '55%',
                  }}
                >
                  <h1 className="my-5">$28</h1>
                  <a
                    href="#"
                    className="btn btn-dark px-5 py-2 primary-btn mb-3"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="card-body m-0 p-0">
                <div
                  className="title py-3 mb-2"
                  style={{ background: 'rgba(140, 241, 241, 0.199)' }}
                >
                  <h5 className="card-title">FlyDocs</h5>
                </div>
                <p className="card-text pt-2">One Year</p>
                <div
                  className="pricing"
                  style={{
                    background: 'rgba(140, 241, 241, 0.199)',
                    borderTopRightRadius: '55%',
                    borderTopLeftRadius: '55%',
                  }}
                >
                  <h1 className="my-5">$110</h1>
                  <a
                    href="#"
                    className="btn btn-dark px-5 py-2 primary-btn mb-3"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
