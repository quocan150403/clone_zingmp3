import Helmet from 'components/Helmet';
import { Top100Banner } from 'components/Icons';
import Section from 'components/Section';
import './Top100.scss';
import { Col, Row } from 'reactstrap';
import AlbumItem from 'components/AlbumItem';

const myArray = Array.from({ length: 4 });

function Top100() {
  return (
    <Helmet title="Top 100">
      <div className="top100">
        <div className="mb-5 text-center">
          <Top100Banner />
        </div>
        <Section className="pt-5" title="Nổi bật">
          <Row>
            {myArray.map((item, index) => (
              <Col key={index}>
                <AlbumItem small />
              </Col>
            ))}
          </Row>
        </Section>

        <Section title="Nhạc Việt">
          <Row>
            {myArray.map((item, index) => (
              <Col key={index}>
                <AlbumItem small />
              </Col>
            ))}
          </Row>
        </Section>
      </div>
    </Helmet>
  );
}

export default Top100;
