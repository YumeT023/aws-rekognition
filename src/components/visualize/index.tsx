import React, { CSSProperties, useEffect, useState } from "react";
import { VisualizeI } from "../types";
import { FabIcon } from "../../common";
import BorderBox from "./BorderBox";
import './index.css';


const Visualize: React.FC<VisualizeI> = ({ children, loading, faceListLength, displayStyle, boundingBox, getFaceDetail }) => {
    const [boxData, setBoxData] = React.useState<CSSProperties>({});
    const [selected, setSelected] = useState<number>(0);

    const handleClick = (index: number): void => {
        setSelected(index);
        getFaceDetail(index);
    }

    useEffect(() => {

        const { height, width, opacity } = displayStyle;
        const { Left, Top, Width, Height } = boundingBox;

        const left = Left! * Number(width);
        const top = Top! * Number(height);
        const _width = Width! * Number(width);
        const _height = Height! * Number(height);

        setBoxData({
            opacity,
            left,
            top,
            width: _width, 
            height: _height
        });

    }, [displayStyle, boundingBox])

    return (
        <div className="Visualize">
            <div className="output">
                <div className="v-center colorable" color="medium">
                    {faceListLength} face{faceListLength > 1 ? 's' : ''} detected
                </div>

                <main className="option-bar n-scroll">
                    {
                        new Array(faceListLength)
                            .fill("one")
                            .map((value, index) => (
                                <FabIcon
                                    label={(index + 1).toString()}
                                    color={`${index === selected ? 'primary' : 'medium'}`}
                                    onClick={() => handleClick(index)}
                                />
                            ))
                    }
                </main>
            </div>

            <div className="pic-wrapper flex-center">
                <main>
                    <BorderBox css={boxData} />
                    {children}

                </main>

            </div>
        </div>
    );
}

export default Visualize;