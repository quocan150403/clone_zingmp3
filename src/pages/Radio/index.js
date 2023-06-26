import images from 'assets/images';
import './Radio.scss';

function Radio() {
  return (
    <div className="app__container tab--radio active">
      <div className="app__container-content">
        <div className="radio__container">
          <div className="grid">
            {/* <!-- Radio list --> */}
            <div className="row container__section mt-30">
              <div className="col-12">
                <div className="row row-cols-6">
                  {Array.from({ length: 7 }).map((item, index) => (
                    <div key={index} className="col">
                      <div className="row__item-container flex--top-left">
                        <div className="item--has-attach">
                          <svg
                            className="svg row__item-frame"
                            fill="transparent"
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              className="svg-circle-bg"
                              stroke="rgba(255, 255, 255, 0.2)"
                              cx="50"
                              cy="50"
                              r="48.75"
                              strokeWidth="2.5"
                            ></circle>
                            <circle
                              className="svg-circle"
                              stroke="#ff4b4a"
                              cx="50"
                              cy="50"
                              r="48.75"
                              strokeWidth="2.5"
                              strokeDasharray="306.3052837250048"
                              strokeDashoffset="155.1120299698101"
                              style={{
                                transition: 'stroke-dashoffset 850ms ease-in-out 0s',
                              }}
                            ></circle>
                          </svg>
                          <div className="row__item-display is-rounded">
                            <div
                              className="row__item-img img--square is-rounded"
                              style={{
                                backgroundImage: `url(${images.radio.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'contain',
                              }}
                            ></div>
                            <div className="row__item-actions hide-on-mobile">
                              <div className="btn--play-playlist">
                                <div className="control-btn btn-toggle-play">
                                  <i className="bi bi-play-fill icon-play"></i>
                                </div>
                              </div>
                            </div>
                            <div className="overlay"></div>
                          </div>
                          <div className="radio__label">LIVE</div>
                          <div className="radio__logo is-rounded">
                            <div
                              className="radio__logo-img"
                              style={{
                                backgroundImage: `url(${images.radio.logo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="row__item-info media radio--info">
                          <div className="media__left">
                            <div className="media__info text-center">
                              <span className="info__title is-active is-oneline">Xone Radio</span>
                              <h3 className="row__info-creator text-center">476 đang nghe</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <!-- Playlist --> */}
            <div className="row container__section special-playlist--section mt-30">
              <div className="col l-12 m-12 c-12 mb-16">
                <div className="container__header special-playlist--header">
                  <div className="row__item-info media">
                    <div className="media__left">
                      <div className="row__item-display br-5">
                        <div
                          className="row__item-img img--square"
                          style={{
                            backgroundImage: `url(${images.tabRadio})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                          }}
                        ></div>
                      </div>
                      <div className="media__info special-playlist--info">
                        <span className="info__explication">Podcast</span>
                        <h3 className="info__topic-name is-active">Vietcetera</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-12 m-12 c-12">
                <div className="row no-wrap special-playlist--container">
                  <div className="col l-2-4 m-3 c-4">
                    <div className="row__item item--playlist">
                      <div className="row__item-container flex--top-left">
                        <div className="row__item-display br-5">
                          <div
                            className="row__item-img img--square"
                            style={{
                              backgroundImage: `url(${images.playlist.image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center center',
                              backgroundSize: 'cover',
                            }}
                          ></div>
                          <div className="row__item-actions">
                            <div className="action-btn btn--heart">
                              <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
                            </div>
                            <div className="btn--play-playlist">
                              <div className="control-btn btn-toggle-play">
                                <i className="bi bi-play-fill"></i>
                              </div>
                            </div>
                            <div className="action-btn">
                              <i className="btn--icon bi bi-three-dots"></i>
                            </div>
                          </div>
                          <div className="overlay"></div>
                        </div>
                        <div className="row__item-info explore-playlist--info">
                          <a href="#" className="row__info-name is-twoline">
                            Have A Sip
                          </a>
                          <p className="info__artist"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
