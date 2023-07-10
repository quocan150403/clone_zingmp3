import PropTypes from 'prop-types';
import Helmet from 'components/Helmet';
import Title from 'components/Title';
import { NavLink } from 'react-router-dom';
import Tabs from 'components/Tabs';

function Playlist(props) {
  return (
    <Helmet title="Playlist">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Playlist" />
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
