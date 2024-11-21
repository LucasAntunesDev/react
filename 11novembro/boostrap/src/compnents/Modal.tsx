import {Modal, Button} from 'react-bootstrap'

interface modalProps {
  show: boolean
  handleClose: any
}

const CustomModal = ({show, handleClose}: modalProps) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Roots</Modal.Title>
      </Modal.Header>
      <Modal.Body>Roots Bloody Roots</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary">Salvar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
