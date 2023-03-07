import Question from '../Question/Question';
import React from 'react';


export default function  Questions ({ questions }) {
  return (<ul>
      {questions.map(q => {
        return (
          <li key={q.id}>
            <Question q={q}/>
          </li>);
      })}
    </ul>
  )
}


