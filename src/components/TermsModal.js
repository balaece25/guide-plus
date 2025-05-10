import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function TermsModal({ show, onAccept, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Terms & Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          By using <strong>Guide Pulse</strong>, you agree to participate in a guided
          consulting process. This application does not provide legal or medical advice.
        </p>
        <p>
          Your responses are not stored or shared and are used solely for generating
          insights in this session.
        </p>
        <p>
          Please ensure you understand that this tool provides generalized guidance and is not
          a substitute for professional consulting.
        </p>
        <p>Do you accept these terms?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onAccept}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsModal;
