import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PodcastList } from '@/pages/PodcastList';
import { PodcastEpisodeDetails } from '@/components/PodcastEpisodeDetails';
import { PodcastEpisodeList } from '@/components/PodcastEpisodeList';
import { PodcastLayout } from '@/components/PodcastLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast/:podcastId" element={<PodcastLayout />}>
          <Route index element={<PodcastEpisodeList />} />
          <Route
            path="episode/:episodeId"
            element={<PodcastEpisodeDetails />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
