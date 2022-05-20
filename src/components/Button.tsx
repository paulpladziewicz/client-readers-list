import React from 'react';
import styles from 'styles/Button.module.css';

interface Props {
  text: string;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = ({
  className,
  text,
  onSubmit,
  type,
  disabled
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
