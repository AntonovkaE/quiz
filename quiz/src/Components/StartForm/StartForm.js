import React from 'react';
import './StartForm.css'
import {difficultOptions} from '../../utils/variables';
import SelectInput from '../SelectInput/SelectInput';

export default function StartForm() {
  return (
    <form onSubmit={() => {}}>
      <h2>
        Train your skills
        <SelectInput options={difficultOptions}/>
        {/*  category, difficult, maskedInput count q, start button*/}
        <button type='submit'></button>
      </h2>
    </form>
  )
}
