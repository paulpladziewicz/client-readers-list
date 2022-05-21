import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/Logo.module.css';
import classNames from 'classnames';

interface Props {
  className?: string;
}
export const Logo: React.FC<Props> = ({ className }) => {
  const divStyles = classNames(styles.logo, 'text-center', className);
  return <div className={divStyles}><NavLink to='/'>ReadersList</NavLink></div>;
};
