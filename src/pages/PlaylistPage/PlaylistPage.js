import { Helmet, Tabs, Title } from 'components';
import { Route, Routes } from 'react-router-dom';
import PlaylistAll from './PlaylistAll';
// import PlaylistOwner from './PlaylistOwner';

// const TABS = [
//   {
//     id: 1,
//     name: 'Tất cả',
//     to: '*',
//   },
//   {
//     id: 2,
//     name: 'Của tôi',
//     to: 'owner',
//   },
// ];

export default function PlaylistPage() {
  return (
    <Helmet title="Nhạc cá nhân">
      <div className="mt-3">
        {/* <div className="is-border-bottom d-flex align-items-center"> */}
        <Title className="mb-0" small hideIcon>
          Playlist của tôi
        </Title>
        {/* <div className="vertical-separator" /> */}
        {/* <Tabs uppercase list={TABS} /> */}
        {/* </div> */}
        <div className="mt-4 ">
          <Routes>
            <Route path="/*" element={<PlaylistAll />} />
            {/* <Route path="owner" element={<PlaylistOwner />} /> */}
          </Routes>
        </div>
      </div>
    </Helmet>
  );
}
