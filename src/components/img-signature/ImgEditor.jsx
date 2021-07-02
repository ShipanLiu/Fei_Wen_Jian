import React, { useState, useEffect } from 'react'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
import { nanoid } from 'nanoid'
import timestamp from '../../utils/timestamp'
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')

function ImgEditor2({ setFinalImg, setShowImgSigModal, choosedSrc }) {
  const imageEditor = React.createRef()
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    fetch(
      'https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410'
    )
      .then((res) => res.json())
      .then((data) => setUserLocation(data))
  }, [])

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

  const getUserGeolocationDetails = () => {}

  const addDataAndLocation = async () => {
    console.log(await getUserGeolocationDetails())
    const editorInstance = imageEditor.current.getInstance()
    var canvasSize = editorInstance.getCanvasSize()
    console.log(canvasSize)
    editorInstance
      .addText(
        `${userLocation.city} ${userLocation.country_name}, ${timestamp()}`,
        {
          styles: {
            fill: '#000',
            fontSize: 80,
            fontWeight: 'bold',
          },
          position: {
            x: canvasSize.width / 3,
            y: canvasSize.height / 1.5,
            // x: 400,
            // y: 3000,
          },
        }
      )
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
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
            <i class="bi bi-geo-alt-fill mx-1"></i>+
            <i className="bi bi-calendar-date-fill mx-1"></i>
          </span>
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
  )
}
export default ImgEditor2
