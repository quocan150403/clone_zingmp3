import PropTypes from 'prop-types';

function Helmet(props) {
  document.title = `Zing MP3 | ${props.title}`;
  return props.children;
}

Helmet.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Helmet;
