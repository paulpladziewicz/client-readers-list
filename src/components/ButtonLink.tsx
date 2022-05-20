import React from 'react';
import styles from 'styles/ButtonLink.module.css';

interface Props {
  text: string;
  href: string;
}

export const ButtonLink: React.FC<Props> = ({ text, href }) => {
  return (
      <a className={styles.link}>{text}</a>
  );
};
