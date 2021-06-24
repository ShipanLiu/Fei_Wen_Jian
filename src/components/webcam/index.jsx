import React, { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'
import { Button } from 'reactstrap'
import './style.scss'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: 'user',
}

const WebcamCapture = ({ setShowWebCam, setAddedImg }) => {
  const webcamRef = React.useRef(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    // setCamImage(imageSrc)
    const imgObj = { id: nanoid(), src: imageSrc }
    setAddedImg((preImgArr) => [...preImgArr, imgObj])
  }, [webcamRef])

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        <Webcam
          audio={false}
          height={600}
          ref={webcamRef}
          screenshotFormat="image/*"
          width={600}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={(e) => {
            e.preventDefault()
            capture()
          }}
          color="success"
          size="lg"
          className="mx-3"
        >
          Capture
        </Button>
        <Button
          onClick={() => setShowWebCam(false)}
          color="warning"
          size="lg"
          className="mx-3"
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default WebcamCapture
