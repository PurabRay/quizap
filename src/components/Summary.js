import React from 'react';

const Summary = ({ score, total, isDarkMode }) => {
  return (
    <div className={`summary ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
    </div>
  );
};

export default Summary;
