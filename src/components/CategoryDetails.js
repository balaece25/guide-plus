import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TermsModal from './TermsModal';

function CategoryDetails() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
    navigate(`/questions/${encodeURIComponent(category)}`);
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate('/categories');
  };

  return (
    <>
      <h3 className="text-center">Preparing your session for: <strong>{category}</strong></h3>
      <TermsModal show={showModal} onAccept={handleAccept} onCancel={handleCancel} />
    </>
  );
}

export default CategoryDetails;
