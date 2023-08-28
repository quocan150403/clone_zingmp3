import { Route, Routes } from 'react-router-dom';
import { Title, Tabs, Helmet } from 'components';
import SongHistory from './SongHistory';
import AlbumHistory from './AlbumHistory';
import PlaylistHistory from './PlaylistHistory';

const TABS = [
  { id: 0, name: 'Bài hát', path: 'song' },
  { id: 1, name: 'Album', path: 'album' },
  { id: 2, name: 'Playlist', path: 'playlist' },
];

export default function HistoryPage() {
  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon>
            Phát gần đây
          </Title>
          <div className="vertical-separator" />
          <Tabs uppercase list={TABS} />
        </div>
        <div className="history-content mt-4 mb-4 mh-100">
          <Routes>
            <Route path="/*" element={<SongHistory />} />
            <Route path="song" element={<SongHistory />} />
            <Route path="album" element={<AlbumHistory />} />
            <Route path="playlist" element={<PlaylistHistory />} />
          </Routes>
        </div>
      </div>
    </Helmet>
  );
}
