import React, { useState, useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import {
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  Button,
  FormGroup,
  Label,
} from 'reactstrap'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
// import { ToastContainer, toast, Flip, Slide } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { nanoid } from 'nanoid'
import timestamp from '../../utils/timestamp'
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')

function ImgEditor({ setFinalImg, setShowImgSigModal, choosedSrc }) {
  const imageEditor = React.createRef()
  const [userLocation, setUserLocation] = useState(null)
  const [showOption, setShowOption] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(true)
  const [position, setPosition] = useState(null)
  const [signatureSrc, setSignatureSrc] = useState(null)
  const [signatureId, setSignatureId] = useState(0)
  const [markPosition, setMarkPosition] = useState({})
  const [openTextEditModal, setOpenTextEditModal] = useState(false)
  const [openTextResizeModal, setOpenTextResizeModal] = useState(false)
  const [modalTextInput, setModalTextInput] = useState()
  const [anyActivedObj, setAnyActivedObj] = useState(false)
  const [addedText, setAddedText] = useState([])
  const [choosedTextId, setChoosedTextId] = useState(null)
  const [textResizeValue, setTextResizeValue] = useState(80)

  const fileInputRef = useRef()

  // get Location API
  // useEffect(() => {
  //   onTextEditing()
  //   onObjectActivated()
  // }, [])

  useEffect(() => {
    onTextEditing()
    onObjectActivated()
  }, [choosedTextId, addedText])

  useEffect(() => {
    fetch(
      'https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410'
    )
      .then((res) => res.json())
      .then((data) => setUserLocation(data))
  }, [])

  useEffect(() => {
    getPosition()
    setDropdownOpen(true)
  }, [position])

  useEffect(() => {
    const imgEditorSize = document.querySelector('.tui-image-editor')
    const imgWrapper = document.querySelector('.img-wrapper')
    if (isMobile) {
      imgWrapper.style.width = '95%'
      console.log('here is mobile')
      // imgEditorSize.style.width = '300px !important'
    } else {
      console.log('here is web')
      imgWrapper.style.width = '50%'
      // imgEditorSize.style.width = '400px !important'
    }
  }, [])

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
      x: position?.x,
      y: position?.y,
      originX: 'left',
      originY: 'top',
    })
    setSignatureId(null)
  }, [signatureId])

  useEffect(() => {
    handleTextResizeChange()
  }, [textResizeValue])

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
    editorInstance.removeActiveObject()
    // if (anyActivedObj) {
    //   editorInstance.removeActiveObject()
    // } else {
    //   alert('choose one to delete')
    // }
  }

  const stopDrawing = () => {
    const editorInstance = imageEditor.current.getInstance()
    //  取消选择
    // editorInstance.discardSelection()
    editorInstance.stopDrawingMode()
  }

  const test = () => {
    console.log(addedText)
    console.log(choosedTextId)
  }

  const addDataAndLocation = () => {
    setShowOption(false)
    const editorInstance = imageEditor.current.getInstance()
    var canvasSize = editorInstance.getCanvasSize()
    console.log(canvasSize)
    editorInstance
      .addText(`${userLocation.city}, ${timestamp()}`, {
        styles: {
          fill: '#000',
          fontSize: textResizeValue,
          fontWeight: 'bold',
        },
        position: {
          x: position.x - 240,
          y: position.y - 60,
        },
        autofocus: false,
      })
      .then((objectProps) => {
        setAddedText((preText) => [
          ...preText,
          {
            id: objectProps.id,
            text: `${userLocation.city}, ${timestamp()}`,
          },
        ])
      })
      .catch((err) => {
        alert(err)
      })
    setModalTextInput(`${userLocation.city}, ${timestamp()}`)
    editorInstance.stopDrawingMode()
    editorInstance.changeCursor('crosshair')
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
    // document.querySelector('.tie-mask-image-file').click()
    fileInputRef.current.click()
    setOpenTextResizeModal(false)
  }

  const addMark = () => {
    setShowOption(false)
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
    editorInstance.changeCursor('crosshair')
    setOpenTextResizeModal(false)
  }

  const getPosition = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('mousedown', function (event, originPointer) {
      setShowOption(true)
      setPosition(originPointer)
      setDropdownOpen(true)
    })
    editorInstance.stopDrawingMode()
    // setOpenTextResizeModal(false)
    setAnyActivedObj(false)
    editorInstance.changeCursor('crosshair')
  }

  const onTextEditing = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('textEditing', function () {
      console.log('text editing')
      setShowOption(false)
      setOpenTextEditModal(true)
    })
  }

  const onObjectActivated = () => {
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.on('objectActivated', function (props) {
      console.log(props.type)
      setChoosedTextId(props.id)
      // console.log(choosedTextId)
      // console.log(addedText)
      if (props.type === 'i-text') {
        const choosedText = addedText.filter(
          (textObj) => textObj.id === choosedTextId
        )
        console.log(choosedText[0]?.text)
        setModalTextInput(choosedText[0]?.text)
        console.log(openTextResizeModal)
        setOpenTextResizeModal(true)
      } else {
        setOpenTextResizeModal(false)
      }
      setAnyActivedObj(true)
      setShowOption(false)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const editorInstance = imageEditor.current.getInstance()
    editorInstance.changeText(choosedTextId, modalTextInput)
    setOpenTextEditModal(false)
    console.log(modalTextInput)
  }

  const handleTextResizeChange = () => {
    const editorInstance = imageEditor.current.getInstance()
    console.log(choosedTextId)
    editorInstance.changeTextStyle(choosedTextId, {
      fontSize: textResizeValue,
    })
    console.log(textResizeValue)
  }

  return (
    <>
      <Modal isOpen={openTextEditModal}>
        <ModalBody>
          <Form onSubmit={handleSubmit} inline className="row">
            <FormGroup>
              <Label>Edit:</Label>
              <input
                type="text"
                value={modalTextInput}
                onChange={(e) => {
                  setModalTextInput(e.target.value)
                }}
              />
              <Button>yes</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
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
          <div className="header-first-part d-flex justify-content-flex-start align-items-center pt-1">
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
              <i className="bi bi-trash-fill"></i>
            </span>
            <span
              className="btn btn-primary mb-2 mx-1"
              onClick={() => {
                setShowImgSigModal(false)
              }}
            >
              cancel
            </span>
            <span className="btn btn-primary mb-2 mx-1" onClick={test}>
              test
            </span>
          </div>
          <hr className="m-0" />
          <div className="header-second-part d-flex justify-content-flex-start align-items-center mt-1">
            {showOption ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen)
                }}
              >
                choose
                {dropdownOpen ? (
                  <i className="bi bi-arrow-right-short mx-1"></i>
                ) : (
                  <i className="bi bi-arrow-down-short"></i>
                )}
              </button>
            ) : (
              ''
            )}
            {dropdownOpen && showOption ? (
              <div className="mx-2 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-success mx-1 "
                  onClick={addDataAndLocation}
                >
                  Data+Loc
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={addSignature}
                >
                  Sign
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-1"
                  onClick={addMark}
                >
                  Mark
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="text-resize-rapper">
          {openTextResizeModal ? (
            <input
              type="range"
              class="form-range"
              id="customRange1"
              min="30"
              max="150"
              value={textResizeValue}
              onChange={(e) => {
                setTextResizeValue(e.target.value)
              }}
            ></input>
          ) : (
            ''
          )}
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
