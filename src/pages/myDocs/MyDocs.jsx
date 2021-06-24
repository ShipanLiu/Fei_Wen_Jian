import React, { memo, useState, useCallback } from 'react'
import './style.css'
import Modal from '../../components/modal/Modal'
import ImgOverlay from '../../components/imgOverlay/ImgOverlay'
import Upload from '../../components/upload/upload-main/index'

export default memo(function ImgHover(props) {
  const [showModal, setShowModal] = useState(false)
  const [choosedPic, setChoosedPic] = useState()
  const imgArr = [
    { id: 1, time: '2020-01-02' },
    { id: 2, time: '2021-06-08' },
  ]

  const openModal = useCallback((key) => {
    console.log('key is', key)
    setChoosedPic(key)
    setShowModal(!showModal)
  })

  return (
    <>
      <Upload></Upload>
      <section className="team-one" id="team">
        <div className="container">
          <div className="row">
            {imgArr.map((item) => {
              return (
                <ImgOverlay
                  key={item.id}
                  id={item.id}
                  time={item.time}
                  openModal={openModal}
                ></ImgOverlay>
              )
            })}
          </div>
        </div>
      </section>
      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          choosedPic={choosedPic}
        ></Modal>
      ) : null}
    </>
  )
})
