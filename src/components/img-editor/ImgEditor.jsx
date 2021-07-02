import React, { useRef, useEffect } from 'react'
import TuiImageEditor from 'tui-image-editor'
import 'tui-image-editor/dist/tui-image-editor.css'
import './style.scss'

const useEditor = () => {
  const ref = useRef()
  useEffect(() => {
    if (!ref.current) {
      return
    }

    const tuiEditor = new TuiImageEditor(ref.current, {
      includeUI: {
        loadImage: {
          path: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
          name: 'SampleImage',
        },
        initMenu: 'mask',
        menuBarPosition: 'top',
        menu: ['mask'],
      },
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
    })

    console.log(tuiEditor)
  }, [])

  return ref
}

const ImageEditor = () => {
  const ref = useEditor()

  return <div ref={ref} />
}

export default ImageEditor

// import React, { useState, useRef } from 'react'
// import 'tui-image-editor/dist/tui-image-editor.css'
// import ImageEditor from '@toast-ui/react-image-editor'
// // import ImageEditor from '../../utils/ImageEditor'

// export default function ImgEditor() {
//   const [showCanvas, setShowCanvas] = useState(false)
//   const imageEditorRef = useRef()

//   const addIcon = () => {
//     setShowCanvas(!showCanvas)
//   }

//   const handleCrop = () => {
//     alert('jiba')
//   }

//   const handleDraw = () => {
//     alert('jiba')
//   }
//   return (
//     <div>
//       <button className="btn btn-info" onClick={addIcon}>
//         add icon
//       </button>
//       <button className="btn btn-info" onClick={handleCrop}>
//         crop
//       </button>
//       <button className="btn btn-info" onClick={handleDraw}>
//         draw
//       </button>
//       {showCanvas ? (
//         <ImageEditor
//           ref={imageEditorRef}
//           includeUI={{
//             loadImage: {
//               path: 'https://qa4-cdata-app.sprinklr.com/DAM/400002/882f0bb5-4d7d-4f81-a043-bda1b3794f93-1388469934/aspectratio2.jpg',
//               name: 'TempImage',
//             },
//           }}
//         ></ImageEditor>
//       ) : (
//         ''
//       )}
//     </div>
//   )
// }
