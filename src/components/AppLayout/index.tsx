import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLoading } from '@/hooks/useLoading';
import { LoaderSpinner } from '@/components/LoaderSpinner';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { loading } = useLoading();

  return (
    <div className={styles.appLayout}>
      <header className={styles.header}>
        <Link to="/" className={styles.title}>
          Podcaster
        </Link>
        {loading && <LoaderSpinner />}
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} | Developed by Ricardo Pabón</p>
      </footer>
    </div>
  );
};
