import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  "Permanent Resident",
  "Student Visa",
  "Work Permit"
];

function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-center mb-4">Choose a Category</h2>
      <div className="row">
        {categories.map((cat) => (
            <div className="col-md-4 mb-4" key={cat}>
            <div className="card h-100 shadow border-0" role="button" onClick={() => navigate(`/categories/${encodeURIComponent(cat)}`)}>
            <div className="card-header bg-primary text-white text-center">
                <h5 className="mb-0">{cat}</h5>
            </div>
            <div className="card-body text-center">
                <p className="card-text">Start your consultation on {cat.toLowerCase()}.</p>
                <button className="btn btn-outline-primary">Start</button>
            </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
