import './App.css';
import StartForm from '../StartForm/StartForm';
import quizApi from '../../utils/QuizApi';
import Question from '../Question/Question';
import React, { useState } from 'react';
import Questions from '../Questions/Questions';

function App() {

  const [questions, setQuestions] = useState([]);
  const findQuestion = (category, difficulty, questionCount) => {
    quizApi.getQuiz(category, difficulty, questionCount)
      .then(res => {
        setQuestions(res);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {questions.length ?
        <Questions questions={questions}/> :
        <StartForm formSubmit={findQuestion}/>
      }
    </div>
  );
}

export default App;
