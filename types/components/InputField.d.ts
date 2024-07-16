import React from 'react';
interface InputFieldProps {
    id?: string;
    text?: string;
    name?: string;
    style?: React.CSSProperties;
    placeholder: string;
    type: 'text' | 'password' | 'email' | 'number';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
}
export declare const InputField: React.FC<InputFieldProps>;
export {};
