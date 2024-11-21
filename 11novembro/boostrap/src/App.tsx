import {useState} from 'react'
import {Alert, Button, Container} from 'react-bootstrap'
import Modal from './compnents/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <Container>
      {[
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
        'secondary',
      ].map((variant, index) => (
        <Button
          variant={variant}
          key={index}
          onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
      ))}

      <Alert variant="danger">Roots Bloody Roots</Alert>

      <Button onClick={() => setShow(true)} size="lg">
        Open Modal
      </Button>

      <Modal show={show} handleClose={() => setShow(false)} />
    </Container>
  )
}

export default App
