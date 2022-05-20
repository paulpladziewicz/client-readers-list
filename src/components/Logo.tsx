import React from 'react';
import styles from 'styles/Logo.module.css';
import classNames from 'classnames';

interface Props {
  className?: string;
}
export const Logo: React.FC<Props> = ({ className }) => {
  const divStyles = classNames(styles.logo, className);
  return (
    <div className={divStyles}>
      <span>Fremont</span>
      <span className='text-indigo-700'>MI</span>
    </div>
  );
};
