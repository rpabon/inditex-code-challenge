import React from 'react';
import styles from './LoaderSpinner.module.css';

interface LoaderSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({
  size = 'medium',
}) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
