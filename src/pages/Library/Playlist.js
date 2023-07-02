import PropTypes from 'prop-types';
import Helmet from 'components/Helmet';
import Title from 'components/Title';
import { NavLink } from 'react-router-dom';

function Playlist(props) {
  return (
    <Helmet title="Playlist">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Playlist" />
          <div className="vertical-separator" />
          <div className="tabs__list">
            <NavLink to="/my-music/history/song" className="tabs__item tabs__item--active">
              Tất cả
            </NavLink>
            <NavLink to="/my-music/history/playlist" className="tabs__item">
              Của tôi
            </NavLink>
          </div>
        </div>
        <div className="history-content"></div>
      </div>
    </Helmet>
  );
}

Playlist.propTypes = {};

export default Playlist;
