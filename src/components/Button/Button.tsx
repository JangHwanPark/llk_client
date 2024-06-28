import React from 'react';

interface ButtonProps {
    id?: string;
    style?: React.CSSProperties;
    text: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    ariaLabel?: string;     // 버튼의 용도를 명확히 설명
    ariaPressed?: boolean;  // 토글 버튼
    ariaExpanded?: boolean; // 확장/축소 버튼
}

export const Button: React.FC<ButtonProps> = (
    {
        id,
        text,
        type,
        onClick,
        style,
        ariaLabel,
        ariaPressed,
        ariaExpanded
    }
) => {
    return (
        <button
            id={id}
            className="button"
            type={type}
            onClick={onClick}
            style={style}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
        >
            {text}
        </button>
    );
}