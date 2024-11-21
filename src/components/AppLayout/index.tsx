import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLoading } from '@/hooks/useLoading';
import styles from './AppLayout.module.css';

export const AppLayout: React.FC = () => {
  const { loading } = useLoading();

  return (
    <div className={styles.appLayout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {loading && <p>Loading...</p>}
        <p>&copy; {new Date().getFullYear()} | Developed by Ricardo Pabón</p>
      </footer>
    </div>
  );
};
