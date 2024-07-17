import React from 'react';
interface ButtonProps {
    id?: string;
    style?: React.CSSProperties;
    text: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export {};
