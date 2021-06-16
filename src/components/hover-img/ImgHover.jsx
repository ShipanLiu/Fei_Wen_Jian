import React, { memo, useState } from 'react'
import './ImgHover.css'
import bgPic from '../../assets/img/faq-bg-1-1.png';
import test1 from '../../assets/img/test1.jpg'


export default memo(function ImgHover(props) {

  return (
    <>
      <section className="team-one" id="team">
         <img src={bgPic} className="bg-shape-1" alt=""/>
         <div className='container'>
            <div className="title text-center">
              <p>Doc Cards</p>
            </div>
             <div className='row'>
              <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                     <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single shadow">
                        <div className="detail">
                          <a href="" className='text-muted ml-1 mr-3 mt-1'>
                            <span>Details</span>
                          </a>
                          <a href="" className='text-muted mt-1'>
                            <span>Tag</span>
                          </a>
                        </div>
                        <div className="inner">
                            <div className="image">
                                <img src={test1} alt=""/>
                            </div>
                            <div className="social">
                                 <a href=""><i class="bi bi-save2"></i></a>
                            </div>
                        </div>
                    </div>
              </div>
           </div>
         </div>
      </section>
    </>
  )
})
