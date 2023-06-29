function Helmet(props) {
  document.title = 'ZingMp3 ' + '- ' + props.title;
  return props.children;
}

export default Helmet;
