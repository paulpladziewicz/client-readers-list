import React from 'react';
import styles from 'styles/CenteredDiv.module.css';

type Props = {
  children: React.ReactNode;
};

export const CenteredDiv: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.centeredDiv}>
      <div className={styles.centeredDivInner}>{children}</div>
    </div>
  );
};
