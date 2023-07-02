import { Col, Row } from 'reactstrap';

import images from 'assets/images';
import AlbumList from 'components/Album/AlbumList';
import RadioList from 'components/RadioList';
import Section from 'components/Section';
import './Home.scss';
import Button from 'components/Button';
import { MediaItem } from 'components/Media';
import CardItem from 'components/CardItem';
import Helmet from 'components/Helmet';

function Home() {
  return (
    <Helmet title="Trang chủ">
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

      <Section title="Gần đây" to={`/recently`}>
        <AlbumList isCol7 small albumList={Array.from({ length: 7 })} />
      </Section>

      <Section title="Mới phát hành" to={`/new-release`}>
        <div>
          <div className="mb-4 gap-4 d-flex align-items-center ">
            <Button medium uppercase primary>
              Tất cả
            </Button>
            <Button medium uppercase outline>
              Việt Nam
            </Button>
            <Button medium uppercase outline>
              Quốc tế
            </Button>
          </div>
          <Row className="row-cols-3">
            <Col>
              {Array.from({ length: 4 }).map((item, index) => (
                <MediaItem release key={index} />
              ))}
            </Col>
            <Col>
              {Array.from({ length: 4 }).map((item, index) => (
                <MediaItem release key={index} />
              ))}
            </Col>
            <Col>
              {Array.from({ length: 4 }).map((item, index) => (
                <MediaItem release key={index} />
              ))}
            </Col>
          </Row>
        </div>
      </Section>

      <Section title="Có thể bạn muốn nghe">
        <AlbumList albumList={Array.from({ length: 5 })} />
      </Section>

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
        <Row className="gap-5">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index}>
              <MediaItem rank />
            </Col>
          ))}
        </Row>
      </Section>

      <section className="mb-5">
        <Row className="row-cols-3 g-5">
          {Array.from({ length: 3 }).map((item, index) => (
            <Col key={index}>
              <CardItem image={images.label.image} />
            </Col>
          ))}
        </Row>
      </section>

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
    </Helmet>
  );
}

export default Home;
