// import
import React, { ButtonHTMLAttributes, ComponentType, SelectHTMLAttributes } from "react";
import { Colorable, Colors, ComponentWithChild } from "../types";

/* -------------
 1. Chip
 -------------*/
export interface ChipI extends Colorable {
    label: string;
    className?: string;
}

/* -------------
 2. Spinner
 -------------*/
export interface Spinner {
    color?: Colors;
}

/* -------------
 3. FabButton
 -------------*/
export interface FabIconI extends
    ComponentWithChild,
    ButtonHTMLAttributes<HTMLButtonElement> 
{
    color?: Colorable['color'];
    sticky?: boolean;
    label?: string;
    // fontawesome icon
    icon?: string;
}

/* -------------
 4. Item
 -------------*/
export interface ItemI extends ChipI {
    text: string;
}

/* -------------
 5. Select
 -------------*/
export interface SelectI extends SelectHTMLAttributes<HTMLSelectElement>  {
    listOption: Array<number | string>;
    color?: Colorable['color'];
    listValue?: number[];
}