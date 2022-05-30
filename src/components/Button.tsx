import React from 'react';
import styles from 'styles/Button.module.css';

interface Props {
  text: string;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = ({
  className,
  text,
  onSubmit,
  onClick,
  type = 'button',
  disabled
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
