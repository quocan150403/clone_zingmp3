import { NavLink } from 'react-router-dom';

import { Helmet, Title, Tabs } from 'components';

export default function PlaylistPage() {
  return (
    <Helmet title="Playlist">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon>
            Playlist
          </Title>
          <div className="vertical-separator" />
          {/* <Tabs
            tabs={[
              { id: 1, name: 'Tất cả' },
              { id: 2, name: 'Của tôi' },
            ]}
          /> */}
        </div>
        <div className="history-content"></div>
      </div>
    </Helmet>
  );
}
