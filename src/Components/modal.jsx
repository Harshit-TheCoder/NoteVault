import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Modals=({name, file})=>{
  const googleDocsViewer = `https://docs.google.com/viewer?url=${window.location.origin}/${file}&embedded=true`;

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div style={{ height:"50px"}}>
        <Button variant="primary" onClick={handleShow} style={{width:"200px", borderRadius:"50px", textAlign:"center"}} >
          {name}
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false} size='xl' fullscreen='xxl-down'>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <iframe id="file-frame" src={googleDocsViewer} frameBorder="0" style={{ width: '100%', height: '500px' }}></iframe> */}
            {/* <object
            data={file}
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>Your browser does not support PDFs. <a href={file}>Download the PDF</a>.</p>
          </object> */}
          <iframe src={file} width="100%" height="800px" allow="autoplay"></iframe>

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