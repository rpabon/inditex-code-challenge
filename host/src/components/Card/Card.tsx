import React from 'react';
import cx from 'classnames';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      {children}
    </div>
  );
};
