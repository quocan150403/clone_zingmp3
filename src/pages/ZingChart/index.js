import images from 'assets/images';
import './ZingChart.scss';

function ZingChart() {
  return (
    <div className="app__container tab--charts active">
      <div className="app__container-content">
        <div className="charts__container">
          <div className="grid">
            <div className="chart__container-header mb-40">
              <h3 className="chart__header-name">#zingchart</h3>
              <div className="chart__header-btn">
                <i className="bi bi-play-fill chart__header-icon"></i>
              </div>
            </div>
            <div className="row no-gutters chart--container mt-10 mb-20">
              <div className=" col l-12 m-12 c-12">
                <div className="container__playlist">
                  <div className="playlist__list-charts overflow-visible">
                    <div className="playlist__list-song media ">
                      <div className="playlist__song-info media__left">
                        <div className="playlist__song-rank">
                          <div className="playlist__rank-number is-outline--blue">1</div>
                          <div className="playlist__rank-icon">
                            <i className="bi bi-dash-lg"></i>
                          </div>
                        </div>
                        <div
                          className="playlist__song-thumb media__thumb mr-10"
                          style={{
                            backgroundImage: `url(${images.song})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                          }}
                        >
                          <div className="thumb--animate">
                            <div
                              className="thumb--animate-img"
                              style={{
                                backgroundImage: `url(${images.playing})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50%',
                                backgroundSize: 'contain',
                              }}
                            ></div>
                          </div>
                          <div className="play-song--actions">
                            <div className="control-btn btn-toggle-play">
                              <i className="bi bi-play-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="playlist__song-body media__info">
                          <span className="playlist__song-title info__title">Chưa Bao Giờ Em Quên</span>
                          <p className="playlist__song-author info__author">
                            <a href="/" className="is-ghost">
                              Hương Ly
                            </a>
                          </p>
                        </div>
                      </div>
                      <span className="playlist__song-time media__content">05:11</span>
                      <div className="playlist__song-option song--tab media__right hide-on-mobile">
                        <div className="playlist__song-btn btn--mic option-btn">
                          <i className="btn--icon song__icon bi bi-mic-fill"></i>
                        </div>
                        <div className="playlist__song-btn btn--heart option-btn">
                          <i className="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                        </div>
                        <div className="playlist__song-btn option-btn">
                          <i className="btn--icon bi bi-three-dots"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="charts__expand">
              <button className="button charts__expand-btn">Xem top 100</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZingChart;
