import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function TermsDialog({ show, onAccept, onDecline }) {
  return (
    <Modal show={show} onHide={onDecline} centered>
      <Modal.Header>
        <Modal.Title>Terms and Conditions for Voir Dire</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto' }}>
        <h4>Welcome to <b>Voir Dire</b></h4>
        <p>
          By using the <b>Voir Dire</b> application, you agree to the following terms and conditions. Please read them carefully before proceeding. These terms govern your access to and use of the app for jury selection purposes.
        </p>

        <h5>1. Purpose of the App</h5>
        <p>
          Voir Dire is designed to assist legal professionals in conducting voir dire, the process of questioning potential jurors to ensure a fair and impartial jury. By using this app, you agree to use it solely for its intended purpose of facilitating jury selection in accordance with applicable laws and ethical standards.
        </p>
        <h5>2. Agreement to Terms</h5>
        <p>
          By clicking "OK" below, you confirm that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree, please click "No" to exit the app.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onAccept}>
          OK !
        </Button>
        <Button variant="danger" onClick={onDecline}>
          No !
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsDialog;
