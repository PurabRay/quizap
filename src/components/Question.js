import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    if (question.type === 'multiple') {
      const newSelectedAnswers = selectedAnswers.includes(answer.text)
        ? selectedAnswers.filter(a => a !== answer.text)
        : [...selectedAnswers, answer.text];
      setSelectedAnswers(newSelectedAnswers);
    } else {
      onAnswer(answer.isCorrect);
    }
  };

  const handleSubmit = () => {
    if (question.type === 'multiple') {
      const isCorrect = question.answers.every(answer => 
        (answer.isCorrect && selectedAnswers.includes(answer.text)) ||
        (!answer.isCorrect && !selectedAnswers.includes(answer.text))
      );
      onAnswer(isCorrect);
      setSelectedAnswers([]);
    }
  };

  return (
    <div className="question">
      <h3>{question.text}</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <li 
            key={index} 
            onClick={() => handleAnswerClick(answer)}
            style={{ 
              backgroundColor: selectedAnswers.includes(answer.text) ? '#e0e0e0' : 'transparent', 
              cursor: question.type === 'multiple' ? 'pointer' : 'default',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '5px'
            }}
          >
            {answer.text}
          </li>
        ))}
      </ul>
      {question.type === 'multiple' && (
        <button onClick={handleSubmit} disabled={selectedAnswers.length === 0}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Question;
