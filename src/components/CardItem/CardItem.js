import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CardItem.scss';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function CardItem({ image, name, link }) {
  return (
    <Link to={link} className="card-item">
      <img className="card-item__image" src={BACKEND_URL + image} alt={name} />
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
