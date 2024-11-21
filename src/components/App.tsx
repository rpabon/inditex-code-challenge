import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/AppLayout';
import { PodcastList } from '@/routes/PodcastList';
import { SinglePodcastOverview } from '@/routes/SinglePodcastOverview';
import { PodcastEpisodeDetails } from '@/routes/PodcastEpisodeDetails';
import { PodcastEpisodeList } from '@/routes/PodcastEpisodeList';

export const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
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
