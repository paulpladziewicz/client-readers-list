import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import styles from 'styles/Input.module.css';

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
  const divStyles = classNames(styles.inputContainer, className);
  const inputStyles = classNames(styles.input, 'mb-2');

  const renderErrorMessage = error ? (
    <div className={styles.error}>{errorMessage}</div>
  ) : null;

  return (
    <div className={divStyles}>
      <label className='mb-2' htmlFor={name}>
        {label}
      </label>
      <input
        className={inputStyles}
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
