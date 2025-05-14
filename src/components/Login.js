import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const staticUsers = [
    {username: 'admin@ranilegal.au', password:'ranilegal123'},
    {username: 'user1@ranilegal.au', password:'ranilegal123'},
    {username: 'user2@ranilegal.au', password:'ranilegal123'},
    {username: 'user3@ranilegal.au', password:'ranilegal123'},
    {username: 'user4@ranilegal.au', password:'ranilegal123'},
    {username: 'user5@ranilegal.au', password:'ranilegal123'}
  ];  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const user = staticUsers.find((u) => u.username === username && u.password === password);
    if(user) {
      setError('');
      setUsername(username);
      onLogin(username);
    } else{
      setError('Invalid username or password. Please try again.');
      setUsername('');
      setPassword('');
    }
  } else {
    setError('Enter username and password.');
  }
}

  const handleCreateAccount = () => {
    alert('Create Account functionality is not implemented yet.');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">
            <div><img src="/VD.PNG" width="150" height="130" className='d-inline-block align-top'
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
            {error && <p className="error-message">{error}</p>}
            <div className='d-flex justify-content-between'>            
            <Button variant="primary" type="submit" className="w-50 mb-2">
              Login
            </Button> &nbsp;
            <Button variant="secondary" onClick={handleCreateAccount} className="w-50 mb-2" disabled>
              Create Account
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;