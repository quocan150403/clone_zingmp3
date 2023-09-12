import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { Col } from 'reactstrap';

function AddBtn({ classes, onClickAdd }) {
  return (
    <Col className={classes}>
      <div
        className="album__list-add w-100 h-100 d-flex flex-column align-items-center justify-content-center"
        onClick={onClickAdd}
      >
        <BsPlusCircle />
        <p className="mt-3">Tạo playlist mới</p>
      </div>
    </Col>
  );
}

export default AddBtn;
