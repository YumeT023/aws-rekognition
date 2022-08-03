// import
import React from 'react';
import { FabIconI } from '../types';

// FabIcon: any extra className which the user wish to add is concatened directly
// after the className in this component
const FabIcon: React.FC<FabIconI> = (props) => {
  const { children, className, color, icon, sticky, label, ...defaultButtonAttributes } = props;

  return (
    <button
      {...defaultButtonAttributes}
      className={`FabIcon colorable ${className} ${sticky && 'f-sticky'}`}
      color={color || 'default'}
    >
      {
        icon ? (
          <i className={icon} />
        ) : label
      }
    </button>
  )
}

export default FabIcon;