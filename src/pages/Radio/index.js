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
                    <div class="col">
                      <div class="row__item-container flex--top-left">
                        <div class="item--has-attach">
                          <svg
                            class="svg row__item-frame"
                            fill="transparent"
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              class="svg-circle-bg"
                              stroke="rgba(255, 255, 255, 0.2)"
                              cx="50"
                              cy="50"
                              r="48.75"
                              stroke-width="2.5"
                            ></circle>
                            <circle
                              class="svg-circle"
                              stroke="#ff4b4a"
                              cx="50"
                              cy="50"
                              r="48.75"
                              stroke-width="2.5"
                              stroke-dasharray="306.3052837250048"
                              stroke-dashoffset="155.1120299698101"
                              style={{
                                transition: 'stroke-dashoffset 850ms ease-in-out 0s',
                              }}
                            ></circle>
                          </svg>
                          <div class="row__item-display is-rounded">
                            <div
                              class="row__item-img img--square is-rounded"
                              style={{
                                backgroundImage: `url(${images.radio.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'contain',
                              }}
                            ></div>
                            <div class="row__item-actions hide-on-mobile">
                              <div class="btn--play-playlist">
                                <div class="control-btn btn-toggle-play">
                                  <i class="bi bi-play-fill icon-play"></i>
                                </div>
                              </div>
                            </div>
                            <div class="overlay"></div>
                          </div>
                          <div class="radio__label">LIVE</div>
                          <div class="radio__logo is-rounded">
                            <div
                              class="radio__logo-img"
                              style={{
                                backgroundImage: `url(${images.radio.logo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div class="row__item-info media radio--info">
                          <div class="media__left">
                            <div class="media__info text-center">
                              <span class="info__title is-active is-oneline">Xone Radio</span>
                              <h3 class="row__info-creator text-center">476 đang nghe</h3>
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
            <div class="row container__section special-playlist--section mt-30">
              <div class="col l-12 m-12 c-12 mb-16">
                <div class="container__header special-playlist--header">
                  <div class="row__item-info media">
                    <div class="media__left">
                      <div class="row__item-display br-5">
                        <div
                          class="row__item-img img--square"
                          style={{
                            backgroundImage: `url(${images.tabRadio})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                          }}
                        ></div>
                      </div>
                      <div class="media__info special-playlist--info">
                        <span class="info__explication">Podcast</span>
                        <h3 class="info__topic-name is-active">Vietcetera</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-12 m-12 c-12">
                <div class="row no-wrap special-playlist--container">
                  <div class="col l-2-4 m-3 c-4">
                    <div class="row__item item--playlist">
                      <div class="row__item-container flex--top-left">
                        <div class="row__item-display br-5">
                          <div
                            class="row__item-img img--square"
                            style={{
                              backgroundImage: `url(${images.playlist.image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center center',
                              backgroundSize: 'cover',
                            }}
                          ></div>
                          <div class="row__item-actions">
                            <div class="action-btn btn--heart">
                              <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                            </div>
                            <div class="btn--play-playlist">
                              <div class="control-btn btn-toggle-play">
                                <i class="bi bi-play-fill"></i>
                              </div>
                            </div>
                            <div class="action-btn">
                              <i class="btn--icon bi bi-three-dots"></i>
                            </div>
                          </div>
                          <div class="overlay"></div>
                        </div>
                        <div class="row__item-info explore-playlist--info">
                          <a href="#" class="row__info-name is-twoline">
                            Have A Sip
                          </a>
                          <p class="info__artist"></p>
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
