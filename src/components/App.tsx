import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PodcastList } from '@/routes/PodcastList';
import { SinglePodcastOverview } from '@/routes/SinglePodcastOverview';
import { PodcastEpisodeDetails } from '@/routes/PodcastEpisodeDetails';
import { PodcastEpisodeList } from '@/routes/PodcastEpisodeList';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
