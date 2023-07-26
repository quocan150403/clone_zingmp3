import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Helmet, Title, Tabs } from 'components';

function Playlist() {
  return (
    <Helmet title="Playlist">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon>
            Playlist
          </Title>
          <div className="vertical-separator" />
          <Tabs
            tabs={[
              { id: 1, name: 'Tất cả' },
              { id: 2, name: 'Của tôi' },
            ]}
          />
        </div>
        <div className="history-content"></div>
      </div>
    </Helmet>
  );
}

Playlist.propTypes = {};

export default Playlist;
