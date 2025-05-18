import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((q) => q.topic))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error loading topics:', error));
  }, []);

  return (
    <div className="landing-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '2rem' }}>
      <Container>
        <h1 className="text-center mb-4">Welcome to Evidentia</h1>
        <h3>Select a Topic to Begin</h3>
        <div className="row">
          {categories.map((category) => (
            <div key={category} className="col-md-4 mb-4">
              <Card className='shadow'>
                <Card.Header className={`item ${category.toLowerCase()}`}>{category}</Card.Header>
                <Card.Body>
                  <Button
                    as={Link}
                    to={`/questionnaire/${encodeURIComponent(category)}`}
                    variant="primary"
                  >
                    Go to Questions
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;

