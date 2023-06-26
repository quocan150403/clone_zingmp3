import './Home.scss';
import images from 'assets/images';
import AlbumList from 'components/AlbumList';
import RadioList from 'components/RadioList';
import Section from 'components/Section';
import { Col, Row } from 'reactstrap';

function Home() {
  return (
    <>
      {/* Slide */}
      <div className="row">
        <div className="col-12">
          <div className="row explore__slide--container">
            <div className="explore__slide-move">
              <div className="slide__move-btn btn--prev">
                <i className="bi bi-chevron-left"></i>
              </div>
              <div className="slide__move-btn btn--next">
                <i className="bi bi-chevron-right"></i>
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

      <Section title="Có thể bạn muốn nghe">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      {/* Mới Phát hành */}
      {/* <Section title="Mới phát hành" to="/newrelease">
                <div>
                  <div className="tab-list">
                    <div className="tab-list__item">Tất cả</div>
                    <div className="tab-list__item">Việt Nam</div>
                    <div className="tab-list__item">Quốc tế</div>
                  </div>

                  <MediaList mediaList={Array.from({ length: 5 })} />
                </div>
              </Section> */}

      <Section title="Hè chill nhạc phiêu">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="Hè chill nhạc phiêu">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="Lo gì xoã đi">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="Lo gì xoã đi">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section
        info={{
          image: images.playlist.image,
          name: 'Dành cho fan',
          singer: 'Hương Ly',
        }}
      >
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="BXH Nhạc mới" to="/top100">
        <Row className="row-cols-3 g-5">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index}>
              <div className="row__item item--new-playlist">
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
                      <div className="btn--play-new-playlist">
                        <div className="control-btn btn-toggle-play">
                          <i className="bi bi-play-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="row__item-info new-playlist--info">
                    <a href="#" className="row__info-name is-twoline">
                      Chưa Bao Giờ Em Quên
                    </a>
                    <h3 className="row__info-creator">
                      <a href="#" className="is-ghost">
                        Hương Ly
                      </a>
                    </h3>
                    <div className="row__item-detail">
                      <div className="info__detail-order">#1</div>
                      <div className="info__detail-time">01.10.2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Section>

      <div className="mb-5">
        <Row className="row-cols-3 g-5">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index}>
              <div className="row__item item--label">
                <div className="row__item-container flex--top-left">
                  <div className="row__item-display br-5">
                    <div
                      className="row__item-img img--label"
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
            </Col>
          ))}
        </Row>
      </div>

      <Section title="Top 100" to="/top100">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section
        info={{
          image: images.playlist.image,
          name: 'Bạn đã nghe nhiều',
          singer: 'Nhạc hàn',
        }}
      >
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="Album hot ">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

      <Section title="Radio nổi bật" to="/radio">
        <RadioList radioList={Array.from({ length: 7 })} />
      </Section>
    </>
  );
}

export default Home;
