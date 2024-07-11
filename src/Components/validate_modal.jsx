import React, { useState } from 'react';
import { Alert, Button, Modal, Form } from 'react-bootstrap';

const Validate_Email = () => {
  const [showModal, setShowModal] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseModal = () => {
    if (validateCredentials()) {
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      setTimeout(() => {
        setShowModal(false);
        setShowSuccessAlert(false);
      }, 3000); // Hide modal and alert after 3 seconds
    } else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000); // Hide error alert after 3 seconds
    }
  };

  const handleSecretKeyChange = (e) => setSecretKey(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateCredentials = () => {
    // Replace with your actual validation logic
    return secretKey === 'harshitthecoder' && password === '1570567249903836974';
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          <strong>Form Submitted Successfully!</strong>
        </Alert>
      )}
      {showErrorAlert && (
        <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
          <strong>Invalid Credentials!!</strong>
        </Alert>
      )}
        <Modal.Header closeButton>
          <Modal.Title>Unlock your Vault</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSecretKey">
              <Form.Label>Secret Key:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter secret key"
                value={secretKey}
                onChange={handleSecretKeyChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={handleCloseModal}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      
    </div>
  );
};

export default Validate_Email;
