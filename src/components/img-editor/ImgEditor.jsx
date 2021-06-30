import React, { useState, useEffect } from 'react'
import './style.scss'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '../../utils/ImageEditor'
// 把自己的icon引进来
const icona = require('tui-image-editor/dist/svg/icon-a.svg')
const iconb = require('tui-image-editor/dist/svg/icon-b.svg')
const iconc = require('tui-image-editor/dist/svg/icon-c.svg')
const icond = require('tui-image-editor/dist/svg/icon-d.svg')
// const download = require('downloadjs')
// To change the colors of the image editor, we have:
// const myTheme = {
//   'menu.backgroundColor': 'white',
//   'common.backgroundColor': '#151515',
//   'downloadButton.backgroundColor': 'white',
//   'downloadButton.borderColor': 'white',
//   'downloadButton.color': 'black',
//   'menu.normalIcon.path': icond,
//   'menu.activeIcon.path': iconb,
//   'menu.disabledIcon.path': icona,
//   'menu.hoverIcon.path': iconc,
// }
function HomePage() {
  const [imageSrc, setImageSrc] = useState('')
  //  or use useRef()
  const imageEditor = React.createRef()
  const saveImageToDisk = () => {
    alert('download clicked')
    const imageEditorInst = imageEditor.current.imageEditorInst
    const data = imageEditorInst.toDataURL()
    if (data) {
      const mimeType = data.split(';')[0]
      const extension = data.split(';')[0].split('/')[1]
      // download(data, `image.${extension}`, mimeType)
    }
  }
  return (
    <div className="home-page">
      <div className="center">
        <h1>Photo Editor</h1>
        <button className="btn" onClick={saveImageToDisk}>
          Save Image to Disk
        </button>
      </div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: imageSrc,
            name: 'image',
          },
          // theme: myTheme,
          // added the toolbar functionality by adding
          menu: ['text', 'mask'],
          initMenu: '',
          uiSize: {
            height: `calc(100vh - 160px)`,
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
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
export default HomePage
