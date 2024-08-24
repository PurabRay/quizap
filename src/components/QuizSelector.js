import React from 'react';

const QuizSelector = ({ quizzes, onSelectQuiz }) => {
  return (
    <div className="quiz-selector">
      <h2>Select a Quiz</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index} onClick={() => onSelectQuiz(quiz)}>
            {quiz.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelector;