import React from 'react';
import { Chip, FabIcon } from '..';
import { Card } from '../../components';
import { ItemI } from '../types';

const Item: React.FC<ItemI> = ({text, ...chipProps}) => (
  <div className='Item'>
    {
      chipProps && <FabIcon icon='fas fa-angle-right' color='medium'/>
    }
    <label>{text}</label>
  </div>
)

export default Item;