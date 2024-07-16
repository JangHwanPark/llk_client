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

export const InputField: React.FC<InputFieldProps> = ({
  id,
  text,
  name,
  style,
  placeholder,
  type,
  onChange,
  value,
  ariaLabel,
  ariaDescribedby,
}) => {
  return (
    <div className='input-field'>
      <label htmlFor={id} className='screen-out'>
        <span>{text}</span>
        <input
          id={id}
          type={type}
          name={name}
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