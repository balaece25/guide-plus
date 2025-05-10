import React from 'react';

function LandingPage({ onStart }) {
  return (
    <div className="card shadow p-4">
      <h2 className="card-title text-center">Welcome to Guide Plus</h2>
      <p className="card-text text-center">
        A guided decision-making assistant tailored for your needs.
      </p>
      <div className="d-grid">
        <button className="btn btn-primary" onClick={onStart}>Start</button>
      </div>
    </div>
  );
}

export default LandingPage;