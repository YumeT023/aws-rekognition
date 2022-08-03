// import
import React from 'react';
import { SelectI } from '../types';

const Select: React.FC<SelectI> = (props) => {
  const { listOption, listValue, ...restProps } = props;

  return (
    <select {...restProps} className='Select colorable'>
      {
        listOption.map((item, index) => {
          return (
            <option 
              value={listValue && listValue[index] || item}
              key={index}
            >{item}</option>
          )
        })
      }
    </select>
  )

}

export default Select;