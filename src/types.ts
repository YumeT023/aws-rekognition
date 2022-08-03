import { Emotions, FaceDetail, Landmarks } from "aws-sdk/clients/rekognition";
import React from "react";

// standart color used in common component such as: chip, button
export type Colors = "primary" | "violet" | "warning" | "medium" |"info-success";

// standart theme used especially for the main view
export type theme = 'light' | 'dark' | 'light-yellow' | 'dark-yellow';


/*  Interface: any component should extends this interface
    to ensure the identifier's existance */
export interface Record {
    id: number;
    [props: string]: any;
}

// Interface: any component who are going to have a child could extends
export interface ComponentWithChild {
    children?: React.ReactNode;
}

// use this interface to obtain a ready made color attribute in you component
export interface Colorable {
    color?: Colors;
}

// Interface: for the component who need the base part colored like card, body
export interface ColorableParts {
    color: {
        head?: Colors;
        body?: Colors;
        footer?: Colors;
    }
}

// type alias for Emotions and Landmarks in FaceDetail
export type arrayAttribute = Emotions | Landmarks;

export type BasicFaceDetailInfo = FaceDetail & {
    Emotions: null;
    Landmarks: null;
}

export type FilteredDataType = arrayAttribute | BasicFaceDetailInfo;