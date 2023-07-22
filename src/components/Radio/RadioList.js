import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import RadioItem from './RadioItem';
import './Radio.scss';

function RadioList(radios) {
  return (
    <Row className="row-custom g-custom">
      {radios.map((item, index) => (
        <Col key={index} xs={4} sm={3} md={'2-4'} lg={'1-7'}>
          <RadioItem small />
        </Col>
      ))}
    </Row>
  );
}

RadioList.propTypes = {
  radios: PropTypes.array,
};

export default RadioList;
