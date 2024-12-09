import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/AppLayout';
import { PodcastList } from '@/routes/PodcastList';
import { SinglePodcastOverview } from '@/routes/SinglePodcastOverview';
import { PodcastEpisodeDetails } from '@/routes/PodcastEpisodeDetails';
import { PodcastEpisodeList } from '@/routes/PodcastEpisodeList';

// Lazy load the Button component from the remoteApp
const RemoteButton = lazy(() => import('remoteApp/Button'));

export const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteButton />
        </Suspense>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<SinglePodcastOverview />}>
            <Route index element={<PodcastEpisodeList />} />
            <Route
              path="episode/:episodeId"
              element={<PodcastEpisodeDetails />}
            />
          </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
};
