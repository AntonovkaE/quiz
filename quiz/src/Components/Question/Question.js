import React from 'react';
import './Questioin.css'

export default function Question({ q }) {
  return (
    <><h3>{q.question}</h3>
      <fieldset className="answers">
        {Object.keys(q.answers).map(key => q.answers[key] !== null ? (<label>{q.answers[key]}
          <input name={q.id} type="radio" value={key}></input></label>) : '')}
      </fieldset>
    </>
  );
}
