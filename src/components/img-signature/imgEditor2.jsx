import React, { useState, useEffect } from 'react'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
import { nanoid } from 'nanoid'
import test1 from '../../assets/img/test1.jpg'
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')

function ImgEditor2({ setFinalImg, setShowImgSigModal, choosedSrc }) {
  const imageEditor = React.createRef()
  const [imgUrl, setImgUrl] = useState()
  useEffect(() => {
    console.log('render again')
    const editorInstance = imageEditor.current.getInstance()
    editorInstance
      .loadImageFromURL(
        'https://qa4-cdata-app.sprinklr.com/DAM/400002/882f0bb5-4d7d-4f81-a043-bda1b3794f93-1388469934/aspectratio2.jpg',
        // `${choosedSrc}`,
        'my-image'
      )
      .then((result) => {
        console.log(result)
        console.log('old : ' + result.oldWidth + ', ' + result.oldHeight)
        console.log('new : ' + result.newWidth + ', ' + result.newHeight)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [choosedSrc])
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
    console.log('save')
    setShowImgSigModal(false)
    const imageEditorInst = imageEditor.current.imageEditorInst
    // convert to base64
    const data = imageEditorInst.toDataURL()
    if (data) {
      const imgObj = { id: nanoid(), src: data }
      setFinalImg((preImgObj) => [...preImgObj, imgObj])
      // console.log(data)
      // const mimeType = data.split(';')[0]
      // const extension = data.split(';')[0].split('/')[1]
      // download(data, `image.${extension}`, mimeType)
    }
  }

  return (
    <div className="home-page">
      <div className="center">
        <button className="btn btn-primary mb-2 mx-1" onClick={saveImage}>
          Save Image
        </button>
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
