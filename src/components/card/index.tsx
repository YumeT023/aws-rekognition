import React, { useEffect } from 'react';
import { CardI } from '../types';
import { Chip, FabIcon } from '../../common/index';
import './index.css';

const Card: React.FC<CardI> = ({ title, children, collapsible, color, isCollapsed }) => {
    const [show_mInfo, setShow_mInfo] = React.useState(isCollapsed);

    const toggleInfo = (): void => {
        setShow_mInfo(!show_mInfo);
    }

    useEffect(() => {
        setShow_mInfo(!isCollapsed);
    }, [isCollapsed])

    return (
        <div className="card">
            <div className="card-container">

                <div className="card-header">
                    <Chip label={title} color={color.head} />

                    {
                        collapsible && (
                            <FabIcon
                                title='expand'
                                icon={`fas fa-angle-down ${!show_mInfo && 'reverse-angle'}`}
                                onClick={toggleInfo}
                                className='action'
                            />
                        )
                    }

                </div>

                <div className={`card-content ${(show_mInfo && collapsible) && 'd-transit-none'} n-scroll`}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Card;