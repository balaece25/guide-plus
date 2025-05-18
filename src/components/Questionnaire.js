import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Questionnaire() {
  const { category } = useParams();
  const [allquestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [previousQuestion, setPreviousQuestion] = useState(null);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => {   
        setAllQuestions(data);     
        const categoryQuestions = data.filter((q) => q.topic === decodeURIComponent(category));
        setQuestions(categoryQuestions);
        const first = categoryQuestions.find(q => q.issectionfirstquestion === "yes");
        setCurrentQuestion(first);
      })
      .catch((error) => console.error('Error loading questions:', error));;
  }, [category]);
  
  const handleBack = () => {
     if(previousQuestion != null){
      setCurrentQuestion(previousQuestion);
     }
  };
  const handleAnswer = (answer) => {
    const nextId = currentQuestion[answer];
    const nextSectionId = currentQuestion["nextsectionid"];
    setPreviousQuestion(currentQuestion);

    if(nextSectionId !== '' && nextSectionId !== 'end'){
      const nextQuestionSection = allquestions.find(q => q.id === nextSectionId);
      const nextSectionTopic = nextQuestionSection["topic"];
      const categoryQuestions = allquestions.filter((q) => q.topic === decodeURIComponent(nextSectionTopic));
      setQuestions(categoryQuestions);
      const first = categoryQuestions.find(q => q.id === nextSectionId);
      setCurrentQuestion(first);
    } else {
    if (nextId !== '') {      
      const next = questions.find(q => q.id === nextId);
      setCurrentQuestion(next);
    }
  }
  };

  if (!currentQuestion) return <Container><p>Loading...</p></Container>;

  return (
<Container className="my-5">
      <h2 className={`text-center mb-4 item ${currentQuestion.topic.toLowerCase()}`}> Topic: {currentQuestion.topic}</h2>
      <div className={`question-text mb-5 p-4 ${currentQuestion.questiontype} ${currentQuestion.isnotypequestion}`}>
       {currentQuestion.question}      
       </div>
       {currentQuestion.nextSectionId === 'end' ? (<></>):
       (<>
       <div className="d-flex justify-content-center gap-3 mt-4" >
        {currentQuestion.isnotypequestion === 'yes' ? (<>
               <button className="btn btn-primary px-5 py-2" onClick={() => handleBack()}>
                  Go Back
                  </button>
                  <Button
                    as={Link}
                    to="/"
                    variant="primary"
                  > Go Home</Button>
        </>):(<></>)}
                  <button className="btn btn-success px-5 py-2" onClick={() => handleAnswer('yesid')}
                    style={{display: currentQuestion.yesid === '' ? 'none' : 'block' }}>
                    {currentQuestion.noid === '' ? 'OK' : 'YES' }
                  </button>
                  <button className="btn btn-danger px-5 py-2" onClick={() => handleAnswer('noid')}
                    style={{display: currentQuestion.noid === '' ? 'none' : 'block' }}>
                    No
                  </button>
                  </div>
       </>)}
    </Container>
  );
}

export default Questionnaire;
