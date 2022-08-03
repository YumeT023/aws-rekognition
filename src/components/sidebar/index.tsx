// import
import React, { useEffect, useState } from 'react';
import { filterT, SidebarI } from '../types';
import { FabIcon, Select, Spinner } from '../../common';
import { FaceDetail } from 'aws-sdk/clients/rekognition';
import { Data } from '..';
import './index.css';

const Sidebar: React.FC<SidebarI> = ({ data /* faceDetail */, loading = false, reset }) => {
    const [filter, setFilter] = useState<filterT>('basic');
    const [faceData_toDisplay, setFaceData_toDisplay] = useState<FaceDetail | null>(null);
    const [display, setDisplay] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(loading);

    const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as filterT);
    }

    useEffect(() => {
        setFaceData_toDisplay(data);
    }, [data]);

    useEffect(() => {
        setLoad(loading);
    }, [loading])

    return (
        <div className="Sidebar">
            <header>
                <div className='sidebar-title v-center '>

                    Face Detail

                    <Select
                        title='display information'
                        defaultValue='basic'
                        listOption={['basic', 'Emotions', 'Landmarks']}
                        color='medium'
                        onChange={handleChangeFilter}
                    />
                </div>

                <div className='option-bar v-center'>


                    <FabIcon
                        color='violet'
                        icon='fas fa-times'
                        title='reset'
                        onClick={reset}
                    />

                    <FabIcon
                        color='medium'
                        icon={`fas fa-book${!display ? '-open' : ''}`}
                        title={`${display ? 'collapse all' : 'expand all'}`}
                        onClick={() => setDisplay(!display)}
                    />
                </div>
            </header>

            <main>
                {
                    load ? (
                        <Spinner />
                    ): <Data dataInfo={faceData_toDisplay || {}} filter={filter} displayAll={display} />
                }
            </main>

            <footer>
                <div></div>
            </footer>
        </div>
    )
}

export default Sidebar;