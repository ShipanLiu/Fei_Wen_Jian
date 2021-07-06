import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'reactstrap'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
import { nanoid } from 'nanoid'
import timestamp from '../../utils/timestamp'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')

function ImgEditor({ setFinalImg, setShowImgSigModal, choosedSrc }) {
  const imageEditor = React.createRef()
  const [userLocation, setUserLocation] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(true)
  const [position, setPosition] = useState({})
  const [signatureSrc, setSignatureSrc] = useState(null)
  const [signatureId, setSignatureId] = useState(0)
  const [markPosition, setMarkPosition] = useState(null)
  const [pointClicked, setpointClicked] = useState(false)
  const [showCloseTextBtn, setShowCloseTextBtn] = useState(false)
  const fileInputRef = useRef()

  // get Location API
  useEffect(() => {
    onTextEditing()
    onObjectActivated()
  }, [])

  useEffect(() => {
    fetch(
      'https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410'
    )
      .then((res) => res.json())
      .then((data) => setUserLocation(data))
  }, [])

  useEffect(() => {
    getPosition()
  }, [position])

  // useEffect(() => {
  //   document.querySelector('.tie-btn-text').addEventListener('click', () => {
  //     console.log('.tie-btn-text点击')
  //     setShowModal(false)
  //   })
  // }, [])

  useEffect(() => {
    console.log('enter Effect' + position)
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.addImageObject(signatureSrc).then((objectProps) => {
      console.log(objectProps.id)
      setSignatureId(objectProps.id)
    })
    setSignatureSrc(null)
  }, [signatureSrc])

  useEffect(() => {
    // 进入改变位置
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.setObjectPosition(signatureId, {
      x: position.x,
      y: position.y,
      originX: 'left',
      originY: 'top',
    })
    setSignatureId(null)
  }, [signatureId])

  // useEffect(() => {
  //   document.querySelector('.upper-canvas').width = window.innerWidth * 0.5
  //   document.querySelector('.upper-canvas').height = window.innerHeight * 0.5
  //   console.log(document.querySelector('.upper-canvas').width)
  // }, [])

  // useEffect(() => {
  //   var c = document.querySelector('.upper-canvas ')
  //   console.log(c)
  //   var ctx = c.getContext('2d')
  //   var img = new Image()
  //   img.src = signatureSrc
  //   ctx.drawImage(img, position.x, position.y)
  //   setSignature(null)
  // }, [signature])

  const myTheme = {
    'menu.backgroundColor': 'white',
    'common.backgroundColor': '#151515',
    'downloadButton.backgroundColor': 'white',
    'downloadButton.borderColor': 'white',
    'downloadButton.color': 'black',
    'menu.normalIcon.path': icond,
    'menu.activeIcon.path': iconb,
    'menu.disabledIcon.path': icona,
    'menu.hoverIcon.path': iconc,
  }
  const saveImage = () => {
    alert('image saved')
    setShowImgSigModal(false)
    const imageEditorInst = imageEditor.current.imageEditorInst
    // convert to base64
    const data = imageEditorInst.toDataURL()
    if (data) {
      const imgObj = {
        id: nanoid(),
        finalImgSrc: data,
        OriginImgSrc: choosedSrc,
        markPosition: markPosition,
      }
      console.log(imgObj)
      setFinalImg((preImgObj) => [...preImgObj, imgObj])
    }
  }

  const handleUndo = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.undo()
  }

  const handleRedo = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.redo()
  }

  const handleDelete = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.clearObjects()
  }

  const testClick = () => {
    // document.querySelector('.tie-btn-text').click()
    // document.querySelector('.cancel').click()
    console.log('height' + window.innerHeight)
    console.log('width' + window.innerWidth)
  }

  const getPosition = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('mousedown', function (event, originPointer) {
      setShowModal(true)
      setpointClicked(true)
      setPosition(originPointer)
    })
  }

  const addDataAndLocation = async () => {
    setShowCloseTextBtn(true)
    setpointClicked(false)
    setShowModal(false)
    const editorInstance = imageEditor.current.getInstance()
    var canvasSize = editorInstance.getCanvasSize()
    console.log(canvasSize)
    editorInstance
      .addText(`${userLocation.city}, ${timestamp()}`, {
        styles: {
          fill: '#000',
          fontSize: 80,
          fontWeight: 'bold',
        },
        position: {
          x: position.x - 240,
          y: position.y - 60,
        },
      })
      .then((result) => {
        // console.log(result)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleOnChange = (e) => {
    console.log('handleOnChange')
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader()
      reader.onload = () => {
        const img = new Image()
        img.src = reader.result
        setSignatureSrc(img.src)
        // console.log(img.src)
      }
      reader.readAsDataURL(file)
    } else {
      setSignatureSrc(null)
    }
  }

  const addSignature = () => {
    setpointClicked(false)
    // document.querySelector('.tie-mask-image-file').click()
    fileInputRef.current.click()
  }

  const addMark = () => {
    setpointClicked(false)
    setShowModal(false)
    setMarkPosition(position)
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.addShape('triangle', {
      fill: '#0D6EFD',
      stroke: 'blue',
      strokeWidth: 10,
      width: 100,
      height: 100,
      left: position.x,
      top: position.y,
      isRegular: true,
    })
  }

  const onTextEditing = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('textEditing', function (event) {
      console.log(event)
      console.log('text editing')
      setShowModal(false)
      setpointClicked(false)
    })
  }

  const onObjectActivated = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('objectActivated', function (props) {
      console.log(showModal)
      console.log(props.type)
      console.log(props.id)
      setShowModal(false)
      setpointClicked(false)
    })
  }

  return (
    <>
      {/*for uploading the signature  */}
      <input
        hidden
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="upload-input col-6 col-md-4 col-lg-3 mx-2"
        onChange={handleOnChange}
      />
      {/* main page */}
      <div className="home-page">
        <div className="control-header ">
          <div className="header-first-part d-flex justify-content-flex-start align-items-center">
            <span className="btn btn-primary mb-2 mx-1" onClick={saveImage}>
              <i className="bi bi-save2-fill"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={handleUndo}>
              <i className="bi bi-arrow-90deg-left"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={handleRedo}>
              <i className="bi bi-arrow-90deg-right"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={handleDelete}>
              <i class="bi bi-trash-fill"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={testClick}>
              test T
            </span>
            <span
              className="btn btn-primary mb-2 mx-1"
              onClick={() => {
                setShowImgSigModal(false)
              }}
            >
              cancel
            </span>
          </div>
          <hr className="m-0" />
          <div className="header-second-part d-flex justify-content-flex-start align-items-center">
            {showModal ? (
              <Dropdown
                isOpen={true}
                toggle={() => {
                  setDropdownOpen((prevState) => !prevState)
                }}
                className="toggle-controll-bar bg-danger"
              >
                <DropdownToggle caret className="d-none">
                  Choose Function
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={addDataAndLocation}>
                    Data+Loc
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={addSignature}>Sign</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={addMark}>Mark</DropdownItem>
                </DropdownMenu>
                {/* <Button color="primary" onClick={addSignature} className="m-2">
                  Sign
                </Button>{' '}
                <Button color="secondary" onClick={addDataAndLocation}>
                  Data+Loc
                </Button>
                <Button color="success" onClick={addMark} className="m-2">
                  Mark
                </Button> */}
              </Dropdown>
            ) : (
              ''
            )}
            {pointClicked ? (
              <button className="btn btn-info mx-3">
                you choosed a position
              </button>
            ) : (
              ''
            )}
            {showCloseTextBtn ? (
              <button
                className="btn btn-danger mx-1"
                onClick={() => {
                  setShowCloseTextBtn(false)
                  document.querySelector('.tie-btn-text').click()
                }}
              >
                unchoose Text editing
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
        <ImageEditor
          includeUI={{
            loadImage: {
              path: `${choosedSrc}`,
              name: 'image',
            },
            theme: myTheme,
            menu: ['text', 'shape'],
            initMenu: 'shape',
            uiSize: {
              width: `${window.innerWidth}`,
              height: `${window.innerHeight}`,
              // width: '300px',
              // height: '300px',
            },
            menuBarPosition: 'top',
          }}
          cssMaxHeight={600}
          cssMaxWidth={1000}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true}
          ref={imageEditor}
        />
      </div>
    </>
  )
}
export default ImgEditor
