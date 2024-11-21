import { createContext } from 'react';
import { ErrorContextType } from './ErrorContext.types';

export const ErrorContext = createContext<ErrorContextType | undefined>(
  undefined,
);
