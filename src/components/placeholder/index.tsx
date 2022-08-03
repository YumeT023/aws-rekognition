// import
import React from 'react';
import { PlaceholderI } from '../types';
import camera from './../../assets/transparent-camera.png';
import './index.css';


const Placeholder: React.FC<PlaceholderI> = ({ onImageLoad }) => (
    <div className="Placeholder">
        <div className="wrapper">

            <img src={camera} />
            <input type="file" accept="image/*" onChange={onImageLoad} title="pick an image" />

        </div>
    </div>
)

export default Placeholder;