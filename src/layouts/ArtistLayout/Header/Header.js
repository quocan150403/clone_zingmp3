import { Link } from 'react-router-dom';

import './header.scss';
import config from 'config';
import images from 'assets/images';
import { Button } from 'components';

function Header(props) {
  return (
    <div className="artist-header">
      <div className="block">
        <div className="d-flex justify-content-between align-items-center">
          <div className="artist-header__left d-flex align-items-center">
            <Link to={config.routes.register} className="artist-header__logo">
              <img src={images.logoWhite} alt="logo" />
            </Link>
            <div className="artist-header__separator" />
            <h2>Nghệ sĩ Indie</h2>
          </div>
          <div className="artist-header__right d-flex align-items-center justify-content-end">
            <Button circle>
              <img src={images.avatar} alt="avatar" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
