import React, { useState, useEffect, useRef } from 'react';
import './StartForm.css'
import {difficultOptions, categoryOptions} from '../../utils/variables';
import SelectInput from '../SelectInput/SelectInput';

export default function StartForm() {
  return (
    <form onSubmit={() => {}}>
      <h2>
        Train your skills
      </h2>
        <div>
          <h3>Category</h3>
          <SelectInput options={categoryOptions}/>
        </div>
        <div>
          <h3>Difficulty</h3>
          <SelectInput options={difficultOptions}/>
        </div>
      <input type='number'/>
        {/*  category, difficult, maskedInput count q, start button*/}
        <button type='submit'>Start</button>
    </form>
  )
}
