// import
import {
    ComponentType, CSSProperties,
} from "react";

import {
    ColorableParts,
    ComponentWithChild,
    theme,
    FilteredDataType
} from "./../types"

import {
    BoundingBox,
    FaceDetail
} from "aws-sdk/clients/rekognition";


/* -------------
 1. Configuration
 -------------*/
export interface ConfigurationI {
    Visualize: ComponentType<VisualizeI>;
    Sidebar: ComponentType<SidebarI>;
    option?: ConfigOpt;
}

export interface ConfigOpt {
    theme?: theme;
    collapsed?: boolean;
}

/* -------------
 2. Placeholder
 -------------*/
export interface PlaceholderI {
    onImageLoad: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

/* -------------
 3. Sidebar
 -------------*/
export interface SidebarI {
    data: FaceDetail | {};
    loading: boolean;
    isProcessing?: boolean;
    reset: () => void;
}

export type filterT = 'basic' | 'Emotions' | 'Landmarks';

/* -------------
 4. Card 
 -------------*/
export interface CardI extends ComponentWithChild, ColorableParts {
    title: string;
    isCollapsed?: boolean;
    collapsible?: boolean;
}

/* -------------
 5. Visualize
 -------------*/
export type boundingBox = [number, number, number, number]

export interface VisualizeI extends ComponentWithChild {
    // boundingBox: FaceDetail['BoundingBox'];
    loading: boolean;
    boundingBox: BoundingBox;
    getFaceDetail: (index: number) => void;
    faceListLength: number;
    displayStyle: CSSProperties;
}

/* -------------
 6. Header
 -------------*/
export interface HeaderI {
    title?: string;
}

/* -------------
 7. Header
 -------------*/
export interface DataI {
    dataInfo: FaceDetail;
    filter: filterT;
    displayAll?: boolean;
}