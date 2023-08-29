import React from 'react';
import Modal from 'react-modal';
import { BsX } from 'react-icons/bs';
import { Button } from 'components';

export default function AddForm(
  name,
  isPublic,
  isShowModal,
  onChangeName,
  onChangePublic,
  onClickHide,
  onClickConfirm,
) {
  return (
    <Modal
      isOpen={isShowModal}
      onRequestClose={onClickHide}
      className="add-playlist"
      overlayClassName="overlay"
    >
      <span onClick={onClickHide} className="add-playlist__close">
        <BsX />
      </span>
      <h2 className="add-playlist__heading">Tạo playlist mới</h2>
      <input
        type="text"
        placeholder="Nhập tên playlist"
        className="add-playlist__input"
        value={name}
        onChange={onChangeName}
      />
      <div className="add-playlist__option d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="add-playlist__title">Công khai</h3>
          <p className="add-playlist__subtitle">Mọi người có thể tìm thấy playlist này.</p>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={isPublic}
            checked={isPublic}
            onChange={onChangePublic}
          />
        </div>
      </div>
      <div className="add-playlist__option d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="add-playlist__title">Phát ngẫu nhiên</h3>
          <p className="add-playlist__subtitle">Luôn phát ngẫu nhiên tất cả bài hát </p>
        </div>
        <div className="form-check form-switch">
          <input
            defaultChecked
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={onClickConfirm} primary uppercase fullWidth>
          tạo mới
        </Button>
      </div>
    </Modal>
  );
}
