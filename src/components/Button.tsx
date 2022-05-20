import React from 'react';

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
      type={type}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
