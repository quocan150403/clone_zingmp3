import { useEffect, useState } from 'react';
import './Home.scss';
import images from 'assets/images';

console.log(images.slide);
function Home() {
  return (
    <>
      <div className="app__container">
        <div className="app__container-content">
          <div className="explore__container">
            <div className="grid">
              {/* Slide */}
              <div className="row">
                <div className="col-12">
                  <div class="row explore__slide--container">
                    <div class="explore__slide-move">
                      <div class="slide__move-btn btn--prev">
                        <i class="bi bi-chevron-left"></i>
                      </div>
                      <div class="slide__move-btn btn--next">
                        <i class="bi bi-chevron-right"></i>
                      </div>
                    </div>
                    {images.slide.map((item, index) => (
                      <div
                        key={index}
                        className={`
                        col-lg-4 col-md-4 col-6 explore__slide-item
                        ${index === 0 && 'first next'}
                        ${index === 1 && 'second'}
                        ${index === 2 && 'third'}
                        ${index === 3 && 'fourth'}
                        ${index > 3 && index < images.slide.length - 1 && 'fifth'}
                        ${index === images.slide.length - 1 && 'sixth prev'}
                        `}
                      >
                        <div className="row__item-display">
                          <div
                            className="explore__slide-img row__item-img img--rec"
                            style={{
                              backgroundImage: `url(${item.image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center center',
                              backgroundSize: 'cover',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playlists */}
              <div class="row mt-30">
                <div class="col-12 mb-4">
                  <div class="container__header">
                    <a href="/" class="container__header-title">
                      <h3>Có Thể Bạn Muốn Nghe</h3>
                    </a>
                    <h3 class="container__header-subtitle">Có Thể Bạn Muốn Nghe</h3>
                  </div>
                </div>

                <div class="col-12">
                  <div class="row row-cols-5">
                    {Array.from({ length: 5 }).map((item, index) => (
                      <div class="col">
                        <div class="row__item-container ">
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
                                <i class="btn--icon icon--heart bi bi-heart"></i>
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
                            <a href="#" class="row__info-name is-oneline">
                              Mở Đầu Hoàn Hảo
                            </a>

                            <p class="info__artist">
                              <a href="#" class="is-ghost">
                                AMEE
                              </a>
                              ,
                              <a href="#" class="is-ghost">
                                ERIK
                              </a>
                              ,
                              <a href="#" class="is-ghost">
                                Hoàng Duyên
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Radio */}
              <div className="row mt-30">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="/" className="container__header-title">
                      <h3>Radio Nổi bật&nbsp;</h3>
                      <i className="bi bi-chevron-right container__header-icon" />
                    </a>
                    <h3 className="container__header-subtitle">Radio Nổi bật</h3>
                    <div className="container__header-actions hide-on-tablet-mobile">
                      <div className="container__move-btn move-btn--radio button--disabled">
                        <i className="bi bi-chevron-left container__move-btn-icon" />
                      </div>
                      <div className="container__move-btn move-btn--radio">
                        <i className="bi bi-chevron-right container__move-btn-icon" />
                      </div>
                    </div>
                  </div>
                </div>
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

              {/* Label */}
              <div className="row mt-30">
                <div className="col-12">
                  <div className="row">
                    {Array.from({ length: 3 }).map((item, index) => (
                      <div class="col-4">
                        <div class="row__item item--label">
                          <div class="row__item-container flex--top-left">
                            <div class="row__item-display br-5">
                              <div
                                class="row__item-img img--label"
                                style={{
                                  backgroundImage: `url(${images.label.image})`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'center center',
                                  backgroundSize: 'cover',
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* New Playlist */}
              <div className="row container__section mt-30">
                <div className="col l-12 m-12 c-12 mb-16">
                  <div className="container__header">
                    <a href="/" className="container__header-title">
                      <h3>Mới Phát Hành</h3>
                    </a>
                    <h3 className="container__header-subtitle">Mới Phát Hành</h3>
                    <div className="container__header-actions new-playlist--move hide-on-tablet-mobile">
                      <div className="container__move-btn move-btn--new-playlist btn--prev button--disabled">
                        <i className="bi bi-chevron-left container__move-btn-icon" />
                      </div>
                      <div className="container__move-btn move-btn--new-playlist btn--next">
                        <i className="bi bi-chevron-right container__move-btn-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-12 m-12 c-12">
                  <div className="row no-wrap new-playlist--container">
                    {Array.from({ length: 3 }).map((item, index) => (
                      <div class="col l-4 m-6 c-12">
                        <div class="row__item item--new-playlist">
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
                                <div class="btn--play-new-playlist">
                                  <div class="control-btn btn-toggle-play">
                                    <i class="bi bi-play-fill"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="overlay"></div>
                            </div>
                            <div class="row__item-info new-playlist--info">
                              <a href="#" class="row__info-name is-twoline">
                                Chưa Bao Giờ Em Quên
                              </a>
                              <h3 class="row__info-creator">
                                <a href="#" class="is-ghost">
                                  Hương Ly
                                </a>
                              </h3>
                              <div class="row__item-detail">
                                <div class="info__detail-order">#1</div>
                                <div class="info__detail-time">01.10.2021</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme */}
      {/* <div className="modal-theme grid">
        <div className="modal-container">
          <div className="modal__close-btn">
            <i className="bi bi-x-lg close close__btn-icon" />
          </div>
          <div className="theme__header">
            <h3 className="theme__header-title">Giao Diện</h3>
          </div>
          <div className="theme__content">
            <div className="grid theme__container" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
