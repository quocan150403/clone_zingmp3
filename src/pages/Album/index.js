import './Album.scss';

function Album() {
  return (
    <div className="app__container tab--playlist">
      <div className="app__container-content">
        <div className="explore__container">
          <div className="row">
            <div className="col l-3 m-3 c-0">
              <img className="tab-playlist__img" src="./public/img/playlists/playlist1.jpg" alt="" />
              <div className="tab-playlist__content">
                <div className="container__header">
                  <a href="/" className="text-center container__header-title">
                    <h3 className="tab-playlist__name">Nhạc trẻ</h3>
                  </a>
                  <h3 className="tab-playlist__author text-center container__header-subtitle">Nhạc trẻ</h3>
                </div>
                <div className="row__item-info">
                  <a href="/" className="row__info-name text-center is-twoline">
                    V-Pop: The A-List
                  </a>
                </div>
                <button className="button is-small button-primary container__header-btn btn--play-all">
                  <i className="bi bi-play-fill container__header-icon" />
                  <span>Phát ngẫu nhiên</span>
                </button>
              </div>
            </div>
            <div className="col l-9 m-9 c-12">
              <div className="playlist__new playlist--play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
