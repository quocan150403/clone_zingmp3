import React from 'react';
import PropType from 'prop-types';
import { Row, Col } from 'reactstrap';

import RadioItem from './RadioItem';
import './Radio.scss';

function RadioList({ radioList }) {
  return (
    <Row className="g-5">
      {radioList.map((radio, index) => (
        <Col key={index} xs="12" sm="6" md="4" lg="3" xl="2" className="custom-column-7">
          <RadioItem key={index} data={radio} />
        </Col>
      ))}
    </Row>
  );
}

RadioList.propTypes = {
  radioList: PropType.array.isRequired,
};

export default RadioList;
