// import
import React from 'react';
import { DataI } from "../types";
import AwsMapper from './../../services/Aws/AwsMapper';
import './index.css';

const Data: React.FC<DataI> = ({ dataInfo = {} , filter, displayAll = false}) => {
    return (
        <div className="data n-scroll">
            {   
                AwsMapper.render(dataInfo, filter, displayAll)
            }
        </div>
    )
}

export default Data;