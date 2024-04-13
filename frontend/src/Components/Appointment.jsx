import { useState } from 'react';
import {Button,Form,Modal} from 'react-bootstrap';


export function Appointment(props) {
    const [formDetails, setFormDetails] = useState({
        date: "",
        time: "",
      });
    const inputChange = (e) => {
        const { name, value } = e.target;
        return setFormDetails({
          ...formDetails,
          [name]: value,
        });
    };
  const handleClose = () => props.setShow(false);
  

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>date</Form.Label>
              <Form.Control
                type="date"
                placeholder="select your date"
                onChange = {inputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>select time</Form.Label>
              <Form.Control type = "time"  placeholder="select your time" onChange = {inputChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Book appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
