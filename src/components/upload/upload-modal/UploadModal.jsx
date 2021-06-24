import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function UploadModal({
  showModal,
  setShowModal,
  fileInputRef,
  setShowWebCam,
}) {
  return (
    <>
      <Modal isOpen={showModal}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <h3>local or camera?</h3>
          <div className="d-flex align-items-center justify-content-left">
            <input type="checkbox" name="" id="" defaultChecked={true} />
            <i className="mx-1">remember my choice</i>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              setShowModal(false)
              fileInputRef.current.click()
            }}
          >
            local file
          </Button>{' '}
          <Button
            color="danger"
            onClick={() => {
              setShowModal(false)
              setShowWebCam(true)
            }}
          >
            Webcam
          </Button>
          <Button
            color="danger"
            onClick={() => {
              setShowModal(false)
            }}
          >
            Cancle
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
