import PropTypes from 'prop-types';

function Helmet(props) {
  document.title = `${props.title} - Zing MP3`;
  return props.children;
}

Helmet.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Helmet;
