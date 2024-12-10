import React from 'react';
import styles from './LoaderSpinner.module.css';

export const LoaderSpinner: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
