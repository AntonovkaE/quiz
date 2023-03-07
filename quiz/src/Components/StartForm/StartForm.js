import React, { useEffect, useState } from 'react';
import './StartForm.css';
import { categoryOptions, difficultOptions } from '../../utils/variables';
import SelectInput from '../SelectInput/SelectInput';
import quizApi from '../../utils/QuizApi';
import Question from '../Question/Question';

export default function StartForm({formSubmit}) {

  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('');
  const [questionCount, setQuestionCount] = useState('20');
  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmit(category, difficulty, questionCount)
  };

  return (<form onSubmit={handleSubmit}>
      <h2>
        Train your skills
      </h2>
      <div>
        <h3>Category</h3>
        <SelectInput options={categoryOptions}
                     state={category} setState={setCategory}/>
      </div>
      <div>
        <h3>Difficulty</h3>
        <SelectInput options={difficultOptions}
                     state={difficulty} setState={setDifficulty}/>
      </div>
      <div>
        <h3>How many questions?</h3>
        <input type="number"/>
      </div>
      <button type="submit">Start</button>
    </form>);
}

