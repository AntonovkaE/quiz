import React from 'react';
import './SelectInput.css'

export default function SelectInput(options) {
  return (
    <select>
      {options.options.map((option, i) => {
          return <option key={i} value={option}>{option}</option>
        })}
    </select>
  )
}
