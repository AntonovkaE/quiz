import React from 'react';
import './Questioin.css';

export default function Question({ q }) {
  return (
    <><h3>{q.question}</h3>
      <fieldset>
        <ul className="answers">
          {Object.keys(q.answers).map(key => q.answers[key] !== null ? (
              <li className="answer" key={`${q.id}${key}`}>
                <label className="answer__label">
                  <input className="answer__input" name={q.id} type="radio" value={key}></input>
                  <span className="answer__img"></span>
                  <span className="answer__text">{q.answers[key]}</span>
                </label>
              </li>)
            : '')}
        </ul>
      </fieldset>
    </>
  );
}
