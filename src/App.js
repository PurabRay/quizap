
import React, { useState } from 'react';
import './App.css';
import QuizSelector from './components/QuizSelector';
import Quiz from './components/Quiz';
import ThemeToggle from './components/ThemeToggle';

const quizzes = [
  {
    title: 'General Knowledge',
    questions: [
      {
        type: 'single',
        text: 'What is the capital of France?',
        answers: [
          { text: 'Berlin', isCorrect: false },
          { text: 'Madrid', isCorrect: false },
          { text: 'Paris', isCorrect: true },
          { text: 'Rome', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following authors wrote classic American novels?',
        answers: [
          { text: 'Harper Lee', isCorrect: true },
          { text: 'F. Scott Fitzgerald', isCorrect: true },
          { text: 'Ernest Hemingway', isCorrect: true },
          { text: 'J.K. Rowling', isCorrect: false },
        ],
      },
      {
        type: 'truefalse',
        text: 'Jupiter is the largest planet in our solar system.',
        answers: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
      {
        type: 'single',
        text: 'In what year did the Titanic sink?',
        answers: [
          { text: '1905', isCorrect: false },
          { text: '1912', isCorrect: true },
          { text: '1920', isCorrect: false },
          { text: '1915', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following are Quentin Tarantino films?',
        answers: [
          { text: 'Pulp Fiction', isCorrect: true },
          { text: 'Reservoir Dogs', isCorrect: true },
          { text: 'The Godfather', isCorrect: false },
          { text: 'Django Unchained', isCorrect: true },
        ],
      },
    ],
  },
  {
    title: 'Number Theory',
    questions: [
      {
        type: 'single',
        text: 'What is the smallest prime number?',
        answers: [
          { text: '1', isCorrect: false },
          { text: '2', isCorrect: true },
          { text: '3', isCorrect: false },
          { text: '5', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following numbers are divisors of 24?',
        answers: [
          { text: '2', isCorrect: true },
          { text: '3', isCorrect: true },
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
        ],
      },
      {
        type: 'truefalse',
        text: '81 is a perfect square.',
        answers: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
      {
        type: 'single',
        text: 'What is Eulers totient function value for n = 9?',
        answers: [
          { text: '3', isCorrect: false },
          { text: '6', isCorrect: true },
          { text: '9', isCorrect: false },
          { text: '12', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following are Fibonacci numbers?',
        answers: [
          { text: '8', isCorrect: true },
          { text: '10', isCorrect: false },
          { text: '13', isCorrect: true },
          { text: '21', isCorrect: true },
        ],
      },
    ],
  },
  {
    title: 'Films',
    questions: [
      {
        type: 'single',
        text: 'Which film won the Oscar for Best Picture in 2020?',
        answers: [
          { text: '1917', isCorrect: false },
          { text: 'Parasite', isCorrect: true },
          { text: 'Joker', isCorrect: false },
          { text: 'Once Upon a Time in Hollywood', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following films were directed by Christopher Nolan?',
        answers: [
          { text: 'Inception', isCorrect: true },
          { text: 'The Dark Knight', isCorrect: true },
          { text: 'Interstellar', isCorrect: true },
          { text: 'Avatar', isCorrect: false },
        ],
      },
      {
        type: 'truefalse',
        text: 'Tom Hanks played the character Forrest Gump in the movie "Forrest Gump".',
        answers: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
      {
        type: 'single',
        text: 'What is the highest-grossing film of all time (as of 2021)?',
        answers: [
          { text: 'Avatar', isCorrect: false },
          { text: 'Avengers: Endgame', isCorrect: true },
          { text: 'Titanic', isCorrect: false },
          { text: 'Star Wars: The Force Awakens', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of these films feature Arnold Schwarzenegger?',
        answers: [
          { text: 'The Terminator', isCorrect: true },
          { text: 'Predator', isCorrect: true },
          { text: 'Die Hard', isCorrect: false },
          { text: 'Total Recall', isCorrect: true },
        ],
      },
    ],
  },
  {
    title: 'Books',
    questions: [
      {
        type: 'single',
        text: 'Who is the author of "1984"?',
        answers: [
          { text: 'George Orwell', isCorrect: true },
          { text: 'Aldous Huxley', isCorrect: false },
          { text: 'Ray Bradbury', isCorrect: false },
          { text: 'J.D. Salinger', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following are books in the Harry Potter series?',
        answers: [
          { text: 'Harry Potter and the Philosopher\'s Stone', isCorrect: true },
          { text: 'Harry Potter and the Chamber of Secrets', isCorrect: true },
          { text: 'Harry Potter and the Deathly Hallows', isCorrect: true },
          { text: 'Harry Potter and the Cursed Child', isCorrect: false },
        ],
      },
      {
        type: 'truefalse',
        text: 'The novel "Moby-Dick" was written by Herman Melville.',
        answers: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
      {
        type: 'single',
        text: 'Who wrote "Pride and Prejudice"?',
        answers: [
          { text: 'Jane Austen', isCorrect: true },
          { text: 'Charlotte Brontë', isCorrect: false },
          { text: 'Emily Brontë', isCorrect: false },
          { text: 'Mary Shelley', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following books were written by John Steinbeck?',
        answers: [
          { text: 'Of Mice and Men', isCorrect: true },
          { text: 'The Grapes of Wrath', isCorrect: true },
          { text: 'To Kill a Mockingbird', isCorrect: false },
          { text: 'East of Eden', isCorrect: true },
        ],
      },
    ],
  },
  {
    title: 'Country Capitals',
    questions: [
      {
        type: 'single',
        text: 'What is the capital of Japan?',
        answers: [
          { text: 'Beijing', isCorrect: false },
          { text: 'Seoul', isCorrect: false },
          { text: 'Tokyo', isCorrect: true },
          { text: 'Bangkok', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following are capital cities?',
        answers: [
          { text: 'Canberra', isCorrect: true },
          { text: 'Sydney', isCorrect: false },
          { text: 'Ottawa', isCorrect: true },
          { text: 'Washington D.C.', isCorrect: true },
        ],
      },
      {
        type: 'truefalse',
        text: 'Rio de Janeiro is the capital of Brazil.',
        answers: [
          { text: 'True', isCorrect: false },
          { text: 'False', isCorrect: true },
        ],
      },
      {
        type: 'single',
        text: 'Which European capital city is known as "The City of Light"?',
        answers: [
          { text: 'Rome', isCorrect: false },
          { text: 'Paris', isCorrect: true },
          { text: 'Berlin', isCorrect: false },
          { text: 'Vienna', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of these cities are capitals of their respective countries?',
        answers: [
          { text: 'Toronto', isCorrect: false },
          { text: 'Amsterdam', isCorrect: true },
          { text: 'Zurich', isCorrect: false },
          { text: 'Madrid', isCorrect: true },
        ],
      },
    ],
  },
  {
    title: 'DSA Concepts',
    questions: [
      {
        type: 'single',
        text: 'Which data structure uses LIFO (Last In, First Out) principle?',
        answers: [
          { text: 'Queue', isCorrect: false },
          { text: 'Stack', isCorrect: true },
          { text: 'Tree', isCorrect: false },
          { text: 'Graph', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following have O(log n) time complexity?',
        answers: [
          { text: 'Binary Search', isCorrect: true },
          { text: 'Quick Sort (average case)', isCorrect: true },
          { text: 'Linear Search', isCorrect: false },
          { text: 'Heap operations', isCorrect: true },
        ],
      },
      {
        type: 'truefalse',
        text: 'A balanced binary search tree always has a height of O(log n).',
        answers: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
      {
        type: 'single',
        text: 'What does the "D" in "DSA" stand for?',
        answers: [
          { text: 'Dynamic', isCorrect: false },
          { text: 'Data', isCorrect: true },
          { text: 'Distributed', isCorrect: false },
          { text: 'Decimal', isCorrect: false },
        ],
      },
      {
        type: 'multiple',
        text: 'Which of the following are divide-and-conquer algorithms?',
        answers: [
          { text: 'Merge Sort', isCorrect: true },
          { text: 'Quick Sort', isCorrect: true },
          { text: 'Bubble Sort', isCorrect: false },
          { text: 'Binary Search', isCorrect: true },
        ],
      },
    ],
  },
];

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="app-container">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className={`app ${theme}`}>
        {!selectedQuiz && <QuizSelector quizzes={quizzes} onSelectQuiz={setSelectedQuiz} />}
        {selectedQuiz && <Quiz quiz={selectedQuiz} />}
      </div>
    </div>
  );
};

export default App;
