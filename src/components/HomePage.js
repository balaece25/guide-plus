import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  "Permanent Resident",
  "Student Visa",
  "Work Permit"
];

function HomePage({ onSelectCategory }) {
  return (
<div className="text-center card shadow p-4 bg-light border-0">
  <h2 className="text-primary">Welcome to Guide Plus</h2>
  <p>Your personalized guide to smarter decisions in immigration and career paths.</p>
  <Link to="/categories" className="btn btn-outline-primary mt-3">Get Started</Link>
</div>
  );
}

export default HomePage;
