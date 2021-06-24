import React, { useRef, useState } from 'react'
import { Alert } from 'reactstrap'

export default function MobilView() {
  const [alert, setAlert] = useState(false)

  const camInputRef = useRef()

  const handleTouch = () => {
    console.log('you pressed!!!')
    setAlert(!alert)
  }
  return (
    <div>
      <h1 className="bg-info">Hi! Flydocs! take a picture</h1>
      <button onClick={handleTouch} className="btn btn-primary">
        touch me
      </button>
      {alert ? <div className="bg-dark">touch function works well </div> : ''}
      <input
        ref={camInputRef}
        type="file"
        name="mobil-camera"
        id="mobil-camera"
        accept="image/"
        capture="environment"
      />
    </div>
  )
}
