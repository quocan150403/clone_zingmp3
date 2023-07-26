import { memo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import RadioItem from './RadioItem';
import './Radio.scss';

function RadioList({ radioList }) {
  return (
    <Row className="row-custom g-custom">
      {radioList.map((item, index) => (
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

export default memo(RadioList);
