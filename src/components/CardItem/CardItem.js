import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CardItem.scss';

function CardItem({ image, name, link }) {
  return (
    <Link to={link} className="card-item">
      <img className="card-item__image" src={image} alt={name} />
      {name && <p className="card-item__name">{name}</p>}
    </Link>
  );
}

CardItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

export default CardItem;
