import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import images from 'assets/images';
import './TopicItem.scss';

function TopicItem({ image, name, link }) {
  return (
    <Link to={link} className="topicItem">
      <img className="topicItem__image" src={images.topic} alt="" />
      <h3 className="topicItem__title">Nhạc mới</h3>
    </Link>
  );
}

TopicItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

export default TopicItem;
