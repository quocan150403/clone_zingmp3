import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';

import { Section, CardItem } from 'components';
import { genreApi } from 'api';
import images from 'assets/images';

export default function GenrePage() {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const response = await genreApi.getQuery({
          isHome: false,
        });
        setTopic(response);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('Error! an error occurred. please try again later!');
        }
      }
    };
    getTopic();
  }, []);

  return (
    <div className="topic">
      <section className="mb-5">
        <img className="w-100 rounded-3" src={images.bannerTopic} alt="" />
      </section>

      <Section title="Thể loại">
        <Row className="g-4">
          {topic.map((item, index) => (
            <Col key={index} xs="6" sm="4" lg="4" xl="3">
              <CardItem link={'/hub/' + item.slug} image={item.imageUrl} name={item.name} />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
}
