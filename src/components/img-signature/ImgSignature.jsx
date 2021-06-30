import React, { useState, useRef, useCallback } from 'react'
import RegionSelect from 'react-region-select'
import { nanoid } from 'nanoid'
import './style.scss'
import test1 from '../../assets/img/test1.jpg'
import { Alert } from 'reactstrap'

const ImgSignature = ({ choosedSrc, choosedId, setShowImgSigModal }) => {
  const [regions, setRegions] = useState([])
  const [insertImg, setInsertImg] = useState()
  // const [insertPosition, setInsertPosition] = useState([])
  // const [imgRegionProps, setImgRegionProps] = useState()
  const imgInputRef = useRef()

  // 这里可以安全设置state
  const onChange = (regions) => {
    // console.log('​App -> onChange -> regions', regions)
    setRegions(regions)
  }

  const actionDeleteRegion = (regionIdx) => {
    console.log('​regionIdx', regionIdx)
    const filteredRegion = regions.filter((reg) => reg.data.index !== regionIdx)
    setRegions(filteredRegion)
    setInsertImg(null)
  }

  const addImg = () => {
    imgInputRef.current.click()
    console.log('now is inserting image')
  }

  const handleOnChange = (e) => {
    if (e.target.files) {
      console.log('success')
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = function (e) {
        const img = new Image()
        img.src = reader.result
        // const imgObj = { id: choosedId, src: img.src }
        const imgObj = { id: nanoid(), src: img.src }
        setInsertImg(imgObj)
      }
      reader.readAsDataURL(file)
    } else {
      setInsertImg(null)
      console.log('e.target.files failure')
    }
  }

  const save = (index) => {
    alert(`image ${index} saved`)
  }

  // 会一直输出。。
  console.log(insertImg)

  const regionRenderer = (regionProps) => {
    const region = regions[0]
    let myPosition = {}
    // if the mouse movement finished
    if (!regionProps.isChanging) {
      console.log(regionProps.data.index)
      const position = {
        width: region.width,
        height: region.height,
        x: region.x,
        y: region.y,
      }
      myPosition = position
      console.log(myPosition)
      return (
        <div>
          <div
            className="useage-region"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${myPosition.width / 0.3}px`,
              height: `${myPosition.height / 0.177}px`,
            }}
          >
            {insertImg ? (
              <img
                className="img-fluid"
                src={insertImg.src}
                alt="img not found"
                style={{
                  maxHeight: '100%',
                  width: 'auto',
                }}
              />
            ) : (
              ''
            )}
          </div>
          <div style={{ position: 'absolute', right: 0, top: '-31px' }}>
            <button onClick={() => actionDeleteRegion(regionProps.data.index)}>
              Cancel
            </button>
          </div>
          <div style={{ position: 'absolute', left: 0, top: '-31px' }}>
            <button onClick={addImg}>image</button>
            <input
              type="file"
              hidden
              ref={imgInputRef}
              onChange={handleOnChange}
            />
          </div>
          <div
            className="img-save"
            style={{
              position: 'absolute',
              right: `${myPosition.width / 0.6}px`,
              top: '-31px',
            }}
          >
            <i
              class="bi bi-save-fill"
              onClick={() => save(regionProps.data.index)}
            ></i>
            {/* <button onClick={() => save(regionProps.data.index)}>save</button> */}
          </div>
        </div>
      )
    }
  }
  return (
    <div className="img-mainArea">
      <div className="img-wrapper">
        <div className="img-title text-center pt-2">
          <h3 className="">add your signature here</h3>
          <button
            className="btn btn-primary mb-2 mx-1"
            // onClick={() => setShowImgSigModal(false)}
          >
            cancle
          </button>
        </div>
        <hr className="m-0 mb-2" />
        <div className="img-body ">
          <RegionSelect
            className="regionSelect"
            maxRegions={1}
            regions={regions}
            // regionStyle={regionStyle}
            constraint
            onChange={onChange}
            regionRenderer={regionRenderer}
            // style={{ width: "50%" }}
          >
            {/* <img src={choosedSrc} alt="img not found" className="img-fluid" /> */}
            <img src={test1} alt="img not found" className="img-fluid" />
          </RegionSelect>
        </div>
      </div>
    </div>
  )
}

export default ImgSignature
