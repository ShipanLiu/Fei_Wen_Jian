import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'reactstrap'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
import { nanoid } from 'nanoid'
import timestamp from '../../utils/timestamp'
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')

function ImgEditor({ setFinalImg, setShowImgSigModal, choosedSrc }) {
  const imageEditor = React.createRef()
  const [userLocation, setUserLocation] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [position, setPosition] = useState({})
  const [signature, setSignature] = useState(null)
  const [signatureSrc, setSignatureSrc] = useState(null)
  const [signatureId, setSignatureId] = useState(null)
  const fileInputRef = useRef()

  // get Location API
  useEffect(() => {
    onTextEditing()
    // onObjectActivated()
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
  }, [])

  useEffect(() => {
    document.querySelector('.tie-btn-text').addEventListener('click', () => {
      console.log('.tie-btn-text点击')
      setShowModal(false)
    })
  }, [])

  useEffect(() => {
    if (signature) {
      const reader = new FileReader()
      reader.onload = () => {
        const img = new Image()
        img.src = reader.result
        setSignatureSrc(img.src)
      }
      reader.readAsDataURL(signature)
    }
  }, [signature])

  useEffect(() => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.setObjectPosition(signatureId, {
      x: position.x,
      y: position.y,
      originX: 'left',
      originY: 'top',
    })
  }, [signatureId])

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
      const imgObj = { id: nanoid(), src: data }
      setFinalImg((preImgObj) => [...preImgObj, imgObj])
      // console.log(data)
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

  const getPosition = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('mousedown', function (event, originPointer) {
      setShowModal(true)
      setPosition(originPointer)
      // console.log(event)
    })
  }

  const addDataAndLocation = async () => {
    closeModal()
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
          x: position.x,
          y: position.y,
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
    console.log('jibadan')
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === 'image') {
      setSignature(file)
    } else {
      setSignature(null)
    }
  }

  const addSignature = () => {
    // 自己手写一个canvas 加载图片。
    console.log(document.querySelector('.tie-mask-image-file').click())
  }

  const onTextEditing = () => {
    setShowModal(false)
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('textEditing', function (event) {
      console.log(event)
      console.log('text editing')
      setShowModal(false)
    })
  }

  const test = () => {
    console.log(position)
    fileInputRef.current.click()
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.addImageObject(signatureSrc, {}).then((objectProps) => {
      setSignatureId(objectProps.id)
    })
  }

  console.log(signatureId)

  const closeModal = () => {
    setShowModal(false)
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
        <div className="control-header  pt-2">
          <div className="center d-flex justify-content-flex-start align-items-center">
            <span className="btn btn-primary mb-2 mx-1" onClick={saveImage}>
              <i className="bi bi-save2-fill"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={handleUndo}>
              <i className="bi bi-arrow-90deg-left"></i>
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={handleRedo}>
              <i className="bi bi-arrow-90deg-right"></i>
            </span>
            <span
              className="btn btn-primary mb-2 mx-1 d-flex justify-content-flex-start align-items-center"
              onClick={addDataAndLocation}
            >
              Add
              <i className="bi bi-geo-alt-fill mx-1"></i>+
              <i className="bi bi-calendar-date-fill mx-1"></i>
            </span>
            <Button color="secondary" onClick={test}>
              test
            </Button>
            {showModal ? (
              <div className="toggle-controll-bar mb-2 mx-5 d-flex justify-content-flex-start align-items-center">
                <Button color="primary" onClick={addSignature} className="mx-2">
                  Add Signature
                </Button>{' '}
                <Button color="secondary" onClick={addDataAndLocation}>
                  Add Data and Location
                </Button>
              </div>
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
            menu: ['crop', 'text', 'mask'],
            initMenu: '',
            uiSize: {
              width: '100%',
              height: 'auto',
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
