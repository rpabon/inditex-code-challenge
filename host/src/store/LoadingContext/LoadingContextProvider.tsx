import React, { ReactNode, useState } from 'react';
import { LoadingContext } from '.';

interface Props {
  children: ReactNode;
}

export const LoadingProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
