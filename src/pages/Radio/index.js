import { Col, Row } from 'reactstrap';

import Helmet from 'components/Helmet';
import Title from 'components/Title';
import './Radio.scss';
import RadioList from 'components/RadioList';
import Section from 'components/Section';
import AlbumList from 'components/Album/AlbumList';
import CardItem from 'components/CardItem';
import images from 'assets/images';

function Radio() {
  return (
    <Helmet title="Radio">
      <div className="radio">
        <Title name="Radio" hideIcon />

        <section className="mb-4">
          <RadioList radioList={Array.from({ length: 7 })} />
        </section>

        <Section title="podcast">
          <Row className="row-cols-5 g-5">
            {Array.from({ length: 5 }).map((item, index) => (
              <CardItem image={images.podcast} key={index} to="/podcast" />
            ))}
          </Row>
        </Section>

        <Section className="mt-5" title="Khám phá Podcasts">
          <AlbumList albumList={Array.from({ length: 5 })} />
        </Section>

        <Section
          className="mt-5"
          info={{
            image: images.playlist.image,
            name: 'Podcast',
            singer: 'VietCetera',
          }}
        >
          <AlbumList albumList={Array.from({ length: 5 })} />
        </Section>
      </div>
    </Helmet>
  );
}

export default Radio;
