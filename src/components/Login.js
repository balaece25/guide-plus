import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleCreateAccount = () => {
    alert('Create Account functionality is not implemented yet.');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">
            <div><img src="/VD.png" width="130" height="100" className='d-inline-block align-top'
            alt="Voir Dire Logo"/></div>
            Welcome to Voir Dire</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3 d-flex align-items-center">
              <Form.Label className="me-2 mb-0" style={{width:'100px'}}>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3 d-flex align-items-center">
              <Form.Label className="me-2 mb-0" style={{width:'100px'}}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='d-flex justify-content-between'>            '
            <Button variant="primary" type="submit" className="w-50 mb-2">
              Login
            </Button> &nbsp;
            <Button variant="secondary" onClick={handleCreateAccount} className="w-50 mb-2">
              Create Account
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login