import React, { useRef, useEffect } from 'react'
import TuiImageEditor from 'tui-image-editor'
import 'tui-image-editor/dist/tui-image-editor.css'
// import './style.scss'
import test1 from '../../assets/img/test1.jpg'

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
          // path: { test1 },
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
