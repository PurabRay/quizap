// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return <Summary score={score} total={quiz.questions.length} />;
  }

  return (
    <div className="quiz">
      <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
      <Question question={quiz.questions[currentQuestion]} onAnswer={handleAnswerSelection} />
    </div>
  );
};

export default Quiz;
