import { createContext } from 'react';
import { PodcastFeedContextType } from './PodcastFeedContext.types';

export const PodcastFeedContext = createContext<PodcastFeedContextType | undefined>(
  undefined,
);
