import React, { useState } from 'react';
import './StartForm.css';
import { categoryOptions, difficultOptions } from '../../utils/variables';
import SelectInput from '../SelectInput/SelectInput';

export default function StartForm({ formSubmit }) {

  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('');
  const [questionCount, setQuestionCount] = useState('20');
  const [mistake, setMistake] = useState({ count: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmit(category, difficulty, questionCount);
  };

  function changeCount(event) {
    setMistake(prevState => {
      return {
        count: `${(event.target.value <= 20 && event.target.value > 0) ? '' : 'min: 1, max: 20 '}`,
      };
    });
    setIsDisabled(event.target.value > 20 || event.target.value < 1);
    setQuestionCount((event.target.value > 20 || event.target.value < 1) ? '20' : event.target.value)
  }

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
      <input name="count" max="20" onChange={changeCount} type="number"/>
      {mistake.count.length > 0 ? <span>{mistake.count}</span> : ''}
    </div>
    <button disabled={isDisabled} type="submit">Start</button>
  </form>);
}

