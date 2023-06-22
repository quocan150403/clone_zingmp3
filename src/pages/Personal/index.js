import './Personal.scss';

function Personal() {
  return (
    <div className="app__container tab--personal active">
      <div className="app__header">
        <div className="app__header-bg" />
        <div className="app__header-overlay" />
        <div className="app__header-container">
          <div className="app__header-user">
            <div className="app__user-avatar">
              <img src="./public/img/avatars/avatar.jpg" alt="" className="app__user-img" />
            </div>
            <span className="app__user-name">Võ Quốc An</span>
          </div>
          <div className="app__header-actions">
            <a href="/" className="vip-btn is-small button button-gold hide-on-mobile">
              Mua vip ngay
            </a>
            <a href="/" className="vip-code-btn is-small button hide-on-tablet-mobile">
              Nhập code vip
            </a>
            <a href="/" className="app__header-options options--log-out hide-on-mobile">
              <i className="bi bi-three-dots" />
              <div className="option__log-out">
                <i className="bi bi-box-arrow-right log-out__icon" />
                <span>Đăng xuất</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="content">
        <div className="content__navbar">
          <div className="content__navbar-container">
            <ul className="content__navbar-menu">
              <li className="content__navbar-item active">
                <span>Tổng quan</span>
              </li>
              <li className="content__navbar-item">
                <span>Bài hát</span>
              </li>
              <li className="content__navbar-item">
                <span>Playlist</span>
              </li>
              <li className="content__navbar-item hide-on-mobile">
                <span>Album</span>
              </li>
              <li className="content__navbar-item">
                <span>MV</span>
              </li>
              <li className="content__navbar-item hide-on-mobile">
                <span>Nghệ sĩ</span>
              </li>
              <li className="content__navbar-item hide-on-tablet-mobile">
                <span>Tải lên</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content__container">
          {/* Tab Home */}
          <div className="grid container__tab tab-home active">
            {/* Play music */}
            <div className="container__control row">
              <div className="col l-12 m-12 c-12 mb-10">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Bài Hát&nbsp;</h3>
                    <i className="bi bi-chevron-right container__header-icon" />
                  </a>
                  <h3 className="container__header-subtitle">Bài Hát</h3>
                  <div className="container__header-actions">
                    <div className="button is-small container__header-btn hide-on-mobile">
                      <input
                        type="file"
                        name="upload song"
                        id="home__upload-input"
                        className="container__header-input"
                      />
                      <label htmlFor="home__upload-input">
                        <i className="bi bi-upload container__header-icon" />
                        Tải lên
                      </label>
                    </div>
                    <button className="button is-small button-primary container__header-btn btn--play-all">
                      <i className="bi bi-play-fill container__header-icon" />
                      <span>Phát tất cả</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="container__playmusic">
                  <div className="container__slide hide-on-mobile">
                    <div className="container__slide-show">
                      <div className="container__slide-item first">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item second">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item third">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                      <div className="container__slide-item fourth">
                        <div className="container__slide-img" />
                      </div>
                    </div>
                  </div>
                  <div className="container__playlist">
                    <div className="playlist__list playlist--play" />
                  </div>
                </div>
              </div>
            </div>
            {/* Playlist */}
            <div className="container__section row">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Playlist&nbsp;</h3>
                    <i className="bi bi-chevron-right container__header-icon" />
                  </a>
                  <h3 className="container__header-subtitle">Playlist</h3>
                  <div className="container__header-actions hide-on-tablet-mobile">
                    <div className="container__move-btn move-btn--playlist button--disabled">
                      <i className="bi bi-chevron-left container__move-btn-icon" />
                    </div>
                    <div className="container__move-btn move-btn--playlist">
                      <i className="bi bi-chevron-right container__move-btn-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row no-wrap playlist--container" />
              </div>
            </div>
            {/* Album */}
            <div className="container__section row mt-50">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Album&nbsp;</h3>
                    <i className="bi bi-chevron-right container__header-icon" />
                  </a>
                  <h3 className="container__header-subtitle">Album</h3>
                  <div className="container__header-actions hide-on-tablet-mobile">
                    <div className="container__move-btn move-btn--album button--disabled">
                      <i className="bi bi-chevron-left container__move-btn-icon" />
                    </div>
                    <div className="container__move-btn move-btn--album">
                      <i className="bi bi-chevron-right container__move-btn-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row no-wrap album--container" />
              </div>
            </div>
            {/* MV */}
            <div className="container__section row mt-50">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>MV&nbsp;</h3>
                    <i className="bi bi-chevron-right container__header-icon" />
                  </a>
                  <h3 className="container__header-subtitle">MV</h3>
                  <div className="container__header-actions hide-on-tablet-mobile">
                    <div className="container__move-btn move-btn--mv button--disabled">
                      <i className="bi bi-chevron-left container__move-btn-icon" />
                    </div>
                    <div className="container__move-btn move-btn--mv">
                      <i className="bi bi-chevron-right container__move-btn-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row no-wrap mv--container" />
              </div>
            </div>
            {/* Artist */}
            <div className="container__section row mt-30">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Nghệ Sĩ&nbsp;</h3>
                    <i className="bi bi-chevron-right container__header-icon" />
                  </a>
                  <h3 className="container__header-subtitle">Nghệ Sĩ</h3>
                  <div className="container__header-actions hide-on-tablet-mobile">
                    <div className="container__move-btn move-btn--artist button--disabled">
                      <i className="bi bi-chevron-left container__move-btn-icon" />
                    </div>
                    <div className="container__move-btn move-btn--artist">
                      <i className="bi bi-chevron-right container__move-btn-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row no-wrap artist--container" />
              </div>
            </div>
          </div>
          {/* Song section */}
          <div className="grid container__tab tab-song">
            <div className="row no-gutters">
              <div className="col l-12 m-12 c-12">
                <div className="container__header mb-10">
                  <a href="/" className="container__header-title">
                    <h3>Bài Hát&nbsp;</h3>
                  </a>
                  <h3 className="container__header-subtitle">Bài Hát</h3>
                  <div className="container__header-actions">
                    <div className="button is-small container__header-btn hide-on-mobile">
                      <input
                        type="file"
                        name="upload song"
                        id="song__upload-input"
                        className="container__header-input"
                      />
                      <label htmlFor="song__upload-input">
                        <i className="bi bi-upload container__header-icon" />
                        Tải lên
                      </label>
                    </div>
                    <button className="button is-small button-primary container__header-btn btn--play-all">
                      <i className="bi bi-play-fill container__header-icon" />
                      <span>Phát tất cả</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="container__playlist">
                  <div className="playlist__header mt-5">
                    <span className="playlist__header-title">Bài hát</span>
                    <span className="playlist__header-time">Thời gian</span>
                  </div>
                  <div className="playlist__list playlist--play playlist--play mb-30 overflow-visible">
                    <div className="playlist__list-song">
                      <div className="playlist__song-info">
                        <i className="bi bi-music-note-beamed playlist__song-icon mr-10" />
                        <div className="playlist__song-thumb" />
                        <div className="playlist__song-body">
                          <span className="playlist__song-title">Music Name</span>
                          <p className="playlist__song-author">Singer</p>
                        </div>
                      </div>
                      <span className="playlist__song-time">--/--</span>
                      <div className="playlist__song-option">
                        <div className="playlist__song-btn option-btn">
                          <i className="btn--icon bi bi-mic-fill" />
                        </div>
                        <div className="playlist__song-btn option-btn">
                          <i className="btn--icon bi bi-suit-heart" />
                        </div>
                        <div className="playlist__song-btn option-btn">
                          <i className="btn--icon bi bi-three-dots" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Playlist section */}
          <div className="grid container__tab tab-playlist">
            <div className="container__section row">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Playlist&nbsp;</h3>
                  </a>
                  <h3 className="container__header-subtitle">Playlist</h3>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row playlist--container" />
              </div>
            </div>
          </div>
          {/* Album section */}
          <div className="grid container__tab tab-album">
            <div className="container__section row">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Album&nbsp;</h3>
                  </a>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row album--container" />
              </div>
            </div>
          </div>
          {/* MV section */}
          <div className="grid container__tab tab-mv">
            <div className="container__section row">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>MV&nbsp;</h3>
                  </a>
                  <h3 className="container__header-subtitle">MV</h3>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row mv--container" />
              </div>
            </div>
          </div>
          {/* Artist section */}
          <div className="grid container__tab tab-artist">
            <div className="container__section row">
              <div className="col l-12 m-12 c-12 mb-10">
                <div className="container__header">
                  <a href="/" className="container__header-title">
                    <h3>Nghệ Sĩ&nbsp;</h3>
                  </a>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row artist--container" />
              </div>
            </div>
          </div>
          {/* Upload section */}
          <div className="grid container__tab tab-upload">
            <div className="container__section row">
              <div className="container__header col l-12 m-12 c-12 mb-10">
                <a href="/" className="container__header-title">
                  <h3 className="f-sz-18 lh-27">Danh Sách Tải Lên&nbsp;</h3>
                </a>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="box--no-content">
                  <div className="no-content-image" />
                  <span className="no-content-text">Không có bài hát tải lên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
