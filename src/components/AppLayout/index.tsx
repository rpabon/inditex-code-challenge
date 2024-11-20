import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';

export const AppLayout: React.FC = () => {
  return (
    <div className={styles.appLayout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} | Developed by Ricardo Pabón</p>
      </footer>
    </div>
  );
};
