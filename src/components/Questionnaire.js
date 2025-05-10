import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Questionnaire() {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  //const [currentId, setCurrentId] = useState('q1');
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => {
        const categoryQuestions = data[category];  // Access questions for selected category
        if (!categoryQuestions) return;
        setQuestions(categoryQuestions);
        const first = categoryQuestions.find(q => q.id === 'q1');  // ✅ find() works on array now
        setCurrentQuestion(first);
      });
  }, [category]);
  

  const handleAnswer = (answer) => {
    const nextId = currentQuestion[answer];
    if (nextId === 'end') {
      setCurrentQuestion({ text: "Thank you for completing the consultation!" });
    } else {
      const next = questions.find(q => q.id === nextId);
      setCurrentQuestion(next);
    }
  };

  if (!currentQuestion) return <p>Loading...</p>;

  return (
    <div className="card shadow p-4">
      <h5 className="text-center">{currentQuestion.text}</h5>
      {'yes' in currentQuestion && (
        <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-outline-success px-5 py-2" onClick={() => handleAnswer('yes')}>
          Yes
        </button>
        <button className="btn btn-outline-danger px-5 py-2" onClick={() => handleAnswer('no')}>
          No
        </button>
      </div>
      )}
    </div>
  );
}

export default Questionnaire;
