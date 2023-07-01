import Section from 'components/Section';
import './Topic.scss';
import { Col, Row } from 'reactstrap';
import { useState } from 'react';
import CardItem from 'components/CardItem';
import images from 'assets/images';

function Topic() {
  const [topic, setTopic] = useState(Array.from(Array(4)));
  return (
    <div className="topic">
      <section className="mb-5 topic__banner">
        <img className="w-100 rounded-3" src={images.bannerTopic} alt="" />
      </section>

      <Section title="Topic">
        <Row className="g-5">
          {topic.map((item, index) => (
            <Col key={index} xs="12" sm="6" md="4" lg="3">
              <CardItem image={images.topic} name="Nhạc mới" />
            </Col>
          ))}
        </Row>
      </Section>

      <Section title="Topic">
        <Row className="g-5">
          {topic.map((item, index) => (
            <Col key={index} xs="12" sm="6" md="4" lg="3">
              <CardItem image={images.topic} name="Nhạc mới" />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
}

export default Topic;
