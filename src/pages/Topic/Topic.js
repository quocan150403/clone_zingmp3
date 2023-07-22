import Section from 'components/Section';
import './Topic.scss';
import { Col, Row } from 'reactstrap';
import { useState } from 'react';
import CardItem from 'components/CardItem';
import images from 'assets/images';
import { useEffect } from 'react';
import genreApi from 'api/genreApi';

function Topic() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    const getTopic = async () => {
      try {
        const response = await genreApi.getQuery({ row: 0 });
        setTopic(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTopic();
  }, []);
  return (
    <div className="topic">
      <section className="mb-5 topic__banner">
        <img className="w-100 rounded-3" src={images.bannerTopic} alt="" />
      </section>

      <Section title="Topic">
        <Row className="row-custom g-custom">
          {topic.map((item, index) => (
            <Col key={index} xs="6" sm="4" lg="4" xl="3">
              <CardItem link={item.slug} image={item.thumbnail_url} name={item.name} />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
}

export default Topic;
