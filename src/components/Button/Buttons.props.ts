import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children:ReactNode;
    size: 'large' | 'medium' | 'small'
    onClick?:React.MouseEventHandler
}