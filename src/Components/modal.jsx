import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Modals=({name, file})=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div style={{ height:"50px"}}>
        <Button variant="primary" onClick={handleShow} >
          {name}
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false} size='xl' fullscreen='xxl-down'>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe id="file-frame" src={file} frameBorder="0" style={{ width: '100%', height: '500px' }}></iframe>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>
    
    );
}

export default Modals;