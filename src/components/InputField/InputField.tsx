import React from 'react';

interface InputFieldProps {
  id?: string;
  text?: string;
  style?: React.CSSProperties;
  placeholder: string;
  type: 'text' | 'password' | 'email' | 'number';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  text,
  style,
  placeholder,
  type,
  onChange,
  value,
  ariaLabel,
  ariaDescribedby,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        <span>{text}</span>
        <input
          id={id}
          className="input-field"
          type={type}
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
      </label>
    </div>
  );
};