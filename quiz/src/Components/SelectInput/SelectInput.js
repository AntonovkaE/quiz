import React, { useState } from 'react';
import './SelectInput.css'

export default function SelectInput({ options, state, setState }) {

  return (
    <select onChange={e => setState(e.target.value)}>
      {options.map((option, i) => {
          return <option key={i} value={option}>{option}</option>
        })}
    </select>
  )
}
