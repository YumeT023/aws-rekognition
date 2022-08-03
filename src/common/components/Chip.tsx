// import
import React from "react";
import {ChipI} from '../types';

const Chip: React.FC<ChipI> = ({label, className, color}) => (
    <div 
        className={`Chip ${className} colorable`}
        color={color || 'default'}
    >
        {label}
    </div>
);

export default Chip;