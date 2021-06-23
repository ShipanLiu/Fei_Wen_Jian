import React, { useState, useCallback } from 'react'
import './style.scss'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: 'user',
}

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null)
  const [camImage, setCamImage] = useState('')
  const { setShowWebCam } = props

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setCamImage(imageSrc)
  }, [webcamRef])

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {camImage == '' ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={camImage} />
        )}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault()
          capture()
        }}
        className="btn btn-success"
      >
        Capture
      </button>
      <button
        onClick={() => setShowWebCam(false)}
        className="btn btn-dark mx-2"
      >
        close
      </button>
    </div>
  )
}

export default WebcamCapture
