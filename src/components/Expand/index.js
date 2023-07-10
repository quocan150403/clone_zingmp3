import { Col } from 'reactstrap';

import './Expand.scss';

function Expand({ content, icon, OnClick }) {
  return (
    <Col>
      <div className="plus">
        <div className="plus-icon">{icon}</div>
        <div className="plus-content" onClick={OnClick}>
          {content}
        </div>
      </div>
    </Col>
  );
}

export default Expand;
