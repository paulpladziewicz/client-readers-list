import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';

interface Props {
  label?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  className?: string;
  value?: string;
  error?: boolean | '' | undefined;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  autocomplete?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type = 'text',
  name,
  className,
  value,
  error,
  errorMessage,
  onChange,
  onBlur,
  autocomplete
}) => {
  const divStyles = classNames(className);

  const renderErrorMessage = error ? (
    <div>{errorMessage}</div>
  ) : null;

  return (
    <div className={divStyles}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autocomplete}
      />
      {renderErrorMessage}
    </div>
  );
};
